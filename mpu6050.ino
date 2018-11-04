// MPU-6050 Short Example Sketch
// By Arduino User JohnChi
// August 17, 2014
// Public Domain
#include<Wire.h>
const int MPU_addr=0x68;  // I2C address of the MPU-6050
int16_t AcX,AcY,AcZ,Tmp,GyX,GyY,GyZ;
int8_t state = 0;
void setup(){
  Wire.begin();
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x6B);  // PWR_MGMT_1 register
  Wire.write(0);     // set to zero (wakes up the MPU-6050)
  Wire.endTransmission(true);
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(11, OUTPUT);
  Serial.begin(9600);
}
void loop(){
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x3B);  // starting with register 0x3B (ACCEL_XOUT_H)
  Wire.endTransmission(false);
  Wire.requestFrom(MPU_addr,14,true);  // request a total of 14 registers
  AcX=Wire.read()<<8|Wire.read();  // 0x3B (ACCEL_XOUT_H) & 0x3C (ACCEL_XOUT_L)    
  AcY=Wire.read()<<8|Wire.read();  // 0x3D (ACCEL_YOUT_H) & 0x3E (ACCEL_YOUT_L)
  AcZ=Wire.read()<<8|Wire.read();  // 0x3F (ACCEL_ZOUT_H) & 0x40 (ACCEL_ZOUT_L)
//  Tmp=Wire.read()<<8|Wire.read();  // 0x41 (TEMP_OUT_H) & 0x42 (TEMP_OUT_L)
//  GyX=Wire.read()<<8|Wire.read();  // 0x43 (GYRO_XOUT_H) & 0x44 (GYRO_XOUT_L)
//  GyY=Wire.read()<<8|Wire.read();  // 0x45 (GYRO_YOUT_H) & 0x46 (GYRO_YOUT_L)
//  GyZ=Wire.read()<<8|Wire.read();  // 0x47 (GYRO_ZOUT_H) & 0x48 (GYRO_ZOUT_L)
  Serial.print("AcX = "); Serial.print(AcX);
  Serial.print(" | AcY = "); Serial.print(AcY);
  Serial.print(" | AcZ = "); Serial.println(AcZ);
//  Serial.print(" | Tmp = "); Serial.print(Tmp/340.00+36.53);  //equation for temperature in degrees C from datasheet
//  Serial.print(" | GyX = "); Serial.print(GyX);
//  Serial.print(" | GyY = "); Serial.print(GyY);
//  Serial.print(" | GyZ = "); Serial.println(GyZ);


if(AcY >= 11000 && AcY < 14000 && state == 0){
  state = 1;
}

Serial.println(state);

delay(1000);

if(AcY >= 11000 && AcY < 14000 && state == 1){
  Serial.println("Pos 1 acheived"); 
  state = 2;
  digitalWrite(11, HIGH);
}

if(state == 2 && AcX >= -15200 && AcX <= 10450 && AcY >= -3000 && AcY <= 6000)
{
  state = 3;
}

delay(1000);
if(state == 3 && AcX >= -15200 && AcX <= 10450 && AcY >= -3000 && AcY <= 6000)
{
  state = 4;
  Serial.println("Pos 2 Acheived!");
  digitalWrite(12, HIGH);
}


if(state == 4 && AcX >= 4500 && AcX <=11600 && AcY >= 6000 && AcY <= 16000)
{
  state = 5;
}

delay(1000);
if(state == 5 && AcX >= 4500 && AcX <=11600 && AcY >= 6000 && AcY <= 18000)
{
  state = 0;
  Serial.println("I win go sleep for a bit!");
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.write('A');

  delay(5000);

  digitalWrite(11, LOW);
  digitalWrite(12, LOW);
  digitalWrite(LED_BUILTIN, LOW);
  
}

}
