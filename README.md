# Manual de construcción y configuración
#### Integrantes grupo 9 
- 201503470 Yimmi Daniel Ruano Pernillo
- 201314852 Diego René Molina Roldán
- 201504399 María de Los Angeles Herrera Sumalé
- 201504254 Wendy Aracely Chamalé Boch

## Topología 1 


### Configuración de la topología 1


## Topología 2
![Screenshot_251](https://user-images.githubusercontent.com/70044543/113488128-513f7900-9479-11eb-8eeb-c4bc141ae384.png)

### Configuración PORT CHANNEL 
#### ESW1
- ESW1 y ESW2
int range f1/6 - 7
channel-group 1 mode on
exit

- ESW1 y ESW3 
int range f1/0 - 2
channel-group 2 mode on
exit

- ESW1 y ESW4 
int range f1/3 - 5
channel-group 3 mode on
exit

#### ESW2
- ESW2 y ESW1
int range f1/6 - 7
channel-group 1 mode on
exit

- ESW2 y ESW3 
int range f1/3 - 5
channel-group 4 mode on
exit

- ESW2 y ESW4
int range f1/0 - 2
channel-group 5 mode on
exit
#### ESW3
- ESW3 y ESW1 
int range f1/0 - 2
channel-group 2 mode on
exit

- ESW3 y ESW2 
int range f1/3 - 5
channel-group 4 mode on
exit
#### ESW4
- ESW4 y ESW2
int range f1/0 - 2
channel-group 5 mode on
exit

- ESW4 y ESW1
int range f1/3 - 5
channel-group 3 mode on
exit

#### Comprobación de las configuraciones
![Screenshot_239](https://user-images.githubusercontent.com/70044543/113490913-59ec7b00-948a-11eb-9b8e-a03bb0ddb305.png)

### Configuración VTP
#### ESW1
vtp domain Grupo9
vtp password Grupo9
vtp mode server
end
#### Comprobación de las configuraciones 
![Screenshot_240](https://user-images.githubusercontent.com/70044543/113491148-cc118f80-948b-11eb-8724-f7e1fbf6a578.png)

#### ESW2, ESW3, ESW4
vtp domain Grupo9
vtp password Grupo9
vtp mode client
end
#### Comprobación de las configuraciones 
![Screenshot_241](https://user-images.githubusercontent.com/70044543/113491157-e5b2d700-948b-11eb-98e7-2ea206c5a5db.png)

### Configuración VLAN
conf t
vlan 10
name ADMINISTRACION
exit

conf t
vlan 20
name CONTABILIDAD
exit

conf t
vlan 30
name VENTAS-INFORMATICA
exit

#### Comprobación de las configuraciones
![Screenshot_244](https://user-images.githubusercontent.com/70044543/113491209-45a97d80-948c-11eb-861f-46d601675b81.png)

### Configuración Enlaces troncales
#### ESW1
int Po1 
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,1002-1005
exit 

int Po2 
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,1002-1005
exit 

int Po3 
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,1002-1005
exit 
#### ESW2
int Po1 
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,1002-1005
exit 

int Po4 
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,1002-1005
exit 

int Po5 
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,1002-1005
exit 
#### ESW3
int Po2 
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,1002-1005
exit 

int Po4 
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,1002-1005
exit 

#### ESW4
int Po3 
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,1002-1005
exit 

int Po5 
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,1002-1005
exit 
#### Comprobación de las configuraciones
![Screenshot_245](https://user-images.githubusercontent.com/70044543/113491250-98833500-948c-11eb-8e1d-03863db2ff43.png)

### root bridge y puertos bloqueados

![Screenshot_250](https://user-images.githubusercontent.com/70044543/113491266-b5b80380-948c-11eb-8b13-a1a66950e674.png)






