#include <TinyGPS.h>
#include <SoftwareSerial.h>
SoftwareSerial Gsm(10, 11);
char phone_no[] = "09231567002"; //replace with phone no. to get sms
TinyGPS gps;  //Creates a new instance of the TinyGPS object
const int yellow_bin = 6;
const int green_bin = 7;
int yellow_State = 0; 
int green_State = 0; 
void setup()
{
Serial.begin(9600);
Gsm.begin(9600);
 Serial.println("welcome"); 

pinMode(yellow_bin, INPUT_PULLUP);
pinMode(green_bin, INPUT_PULLUP);
delay(1000);  
}
void loop()
{ 
 yellow_State = digitalRead(yellow_bin);
 green_State = digitalRead(green_bin); 

  if (yellow_State == LOW) 
  {
    Serial.println("Yellow Bin Full"); 
    
    send_message_normal();
    delay(10000);  
    send_message();
    delay(10000);
  } 
   else if (green_State ==LOW ) 
  {
    Serial.println("green Bin Full"); 
   
    send_message_normal();
    delay(1000); 
     send_message(); 
     delay(1000); 
  } 
 
}

void send_message()
{

  int count=0;  
  bool newData = false;
  unsigned long chars;
  unsigned short sentences, failed;
  // For one second we parse GPS data and report some key values
  for (unsigned long start = millis(); millis() - start < 1000;)
  {
    while (Serial.available())
    {
      char c = Serial.read();
      Serial.print(c);
      count++;
      if (gps.encode(c))
        newData = true;
      if(count >= 10000)
        break;  
    }
  }
  if (newData)      //If newData is true
  {
    float flat, flon;
    unsigned long age;
    gps.f_get_position(&flat, &flon, &age);
    Gsm.print("AT+CMGF=1\r");
    delay(400);
    Gsm.print("AT+CMGS=\"");
    Gsm.print(phone_no);
    Gsm.println("\"");
    delay(300);
    
    Gsm.print("http://maps.google.com/maps?q=loc:");
    Gsm.print(flat == TinyGPS::GPS_INVALID_F_ANGLE ? 0.0 : flat, 6);
    Gsm.print(",");
    Gsm.print(flon == TinyGPS::GPS_INVALID_F_ANGLE ? 0.0 : flon, 6);
    delay(200);
    Gsm.println((char)26); // End AT command with a ^Z, ASCII code 26
    delay(200);
    Gsm.println("\"");
    delay(300);
    Gsm.println();
    delay(20000);
  }
 
  else
  {
    Gsm.print("AT+CMGF=1\r");
    delay(400);
    Gsm.print("AT+CMGS=\"");
    Gsm.print(phone_no);
    Gsm.println("\"");
    delay(300);
    if(yellow_State == LOW)
    {
      Gsm.print("Yellow Bin Full");
    }
    if(green_State == LOW)
    {
      Gsm.print("Green Bin Full");
    }
    delay(200);
    Gsm.println((char)26); // End AT command with a ^Z, ASCII code 26
    delay(200);
    Gsm.println();
    delay(20000);
  }
}

void send_message_normal()
{
    Serial.println("sending...."); 
  Gsm.print("AT+CMGF=1\r");
  delay(400);
  Gsm.print("AT+CMGS=\"");
  Gsm.print(phone_no);
  Gsm.println("\"");
  delay(300);
  if(yellow_State == LOW)
  {
    Gsm.print("Yellow Bin Full");
  }
  if(green_State == LOW)
  {
    Gsm.print("Green Bin Full");
  }
  delay(200);
  Gsm.println((char)26); // End AT command with a ^Z, ASCII code 26
  delay(200);
  Gsm.println();
  delay(20000); 
  Serial.println("sending....ok"); 

}
