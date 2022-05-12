#include <Wire.h> 
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);
const int trigger_front = 2; // front ultrasonic sensor
const int echo_front = 3; // front ultrasonic sensor
long distance_front;
///////////////////////////////////////////////////
const int trigger_green = 4; // front ultrasonic sensor
const int echo_green = 5; // front ultrasonic sensor
long distance_green;
/////////////////////////////////////////////////
const int trigger_yellow = 6; // front ultrasonic sensor
const int echo_yellow = 7; // front ultrasonic sensor
long distance_yellow;
const int SoilSensor = A0;
int vout = 0;
const int motorF = 12;
const int motorB = 11;
int motor_flag = 0;
const int G_status = A1;
const int Y_status = A2;

///////////////////////////////////////////////////
#include <Servo.h>
Servo G_hand;  
Servo Y_hand;
int pos_G = 90; 
int pos_Y =90;

void setup()
{
  Serial.begin(9600);
  Y_hand.attach(10);
  G_hand.attach(9);
  pinMode(trigger_front, OUTPUT);
  pinMode(echo_front, INPUT);
  pinMode(trigger_green, OUTPUT);
  pinMode(echo_green, INPUT);
  pinMode(trigger_yellow, OUTPUT);
  pinMode(echo_yellow, INPUT);
  pinMode(motorF, OUTPUT);
  pinMode(motorB, OUTPUT);
  pinMode(G_status , OUTPUT);
  pinMode(Y_status , OUTPUT);
  pinMode(SoilSensor, INPUT);
  digitalWrite(motorF, LOW);
  digitalWrite(motorB, LOW);
  digitalWrite(G_status, LOW);
  digitalWrite(Y_status, LOW);

  lcd.init(); 
  lcd.backlight();
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("   IOT BASED.   ");
  lcd.setCursor(0,1);
  lcd.print("  SMART DUSTBIN  ");
  delay(3000);
}
void check_distance_front()
{
  long dis;
  digitalWrite(trigger_front, LOW);
  delayMicroseconds(2);
  digitalWrite(trigger_front, HIGH);
  delayMicroseconds(5);
  digitalWrite(trigger_front, LOW);
  dis = pulseIn(echo_front, HIGH);
  distance_front = dis/29/2;
  Serial.print("distance front:");
  Serial.println(distance_front);
  
}
void check_distance_green()
{
  long dis;
  digitalWrite(trigger_green, LOW);
  delayMicroseconds(2);
  digitalWrite(trigger_green, HIGH);
  delayMicroseconds(5);
  digitalWrite(trigger_green, LOW);
  dis = pulseIn(echo_green, HIGH);
  distance_green = dis/29/2;
  Serial.print("distance green:");
  Serial.println(distance_green);
}

void check_distance_yellow()
{
  long dis;
  digitalWrite(trigger_yellow, LOW);
  delayMicroseconds(2);
  digitalWrite(trigger_yellow, HIGH);
  delayMicroseconds(5);
  digitalWrite(trigger_yellow, LOW);
  dis = pulseIn(echo_yellow, HIGH);
  distance_yellow = dis/29/2;
  Serial.print("distance yellow:");
  Serial.println(distance_yellow);
}

void loop()
{
  check_distance_front();
  check_distance_green();
  check_distance_yellow();
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Green bin=");
  lcd.print(distance_green);
  lcd.setCursor(0,1);
  lcd.print("Yellow bin= ");
  lcd.print(distance_yellow);
  digitalWrite(G_status, LOW);
  digitalWrite(Y_status, LOW);
  delay(500);
  if(distance_front <=15)
  {
    Serial.println("GOT IT");
    //open_door();
    vout = analogRead(SoilSensor);
    Serial.println(vout);
    if (vout > 800) // green
    {    
      Y_hand.write(5);              
      delay(1000);
      digitalWrite(motorF, HIGH);
      digitalWrite(motorB, LOW);
      delay(1000);
      digitalWrite(motorF, LOW);
      digitalWrite(motorB, LOW);
      delay(1000);

      digitalWrite(motorF, LOW);
      digitalWrite(motorB, HIGH);
      delay(1000);
      digitalWrite(motorF, LOW);
      digitalWrite(motorB, LOW);
      delay(1000);
      Y_hand.write(90);              
       delay(1000);
      
    }
    else  // yellow
    {
       G_hand.write(90);              
       delay(1000);
      digitalWrite(motorF, LOW);
      digitalWrite(motorB, HIGH);
      delay(1000);
      digitalWrite(motorF, LOW);
      digitalWrite(motorB, LOW);
      delay(1000);

      digitalWrite(motorF, HIGH);
      digitalWrite(motorB, LOW);
      delay(1000);
      digitalWrite(motorF, LOW);
      digitalWrite(motorB, LOW);
      delay(1000);
       G_hand.write(5);              
      delay(1000);
      }
  }
  else if(distance_green <=5)
  {
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("  green BIN FULL  ");
      lcd.setCursor(0, 1);
      lcd.print("Sending sms.......");
      digitalWrite(G_status, HIGH);
      delay(5000);
  }
    else if(distance_yellow <=5)
  {
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("  yellow BIN FULL  ");
      lcd.setCursor(0, 1);
      lcd.print("Sending sms.......");
      digitalWrite(Y_status, HIGH);
      delay(5000);
  }

  

}
