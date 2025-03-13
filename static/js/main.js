let panorama_arrow,panorama_outside1,panorama_outside2,panorama_outside3,panorama_outside3r,panorama_outside4,panorama_outside5,panorama_outside6,panorama_outside7,panorama_outside8 ;
let panorama_outside9,panorama_outside9l,panorama_outside9r3,panorama_outside9r4,panorama_outside9r5,panorama_outside9r6,panorama_outside9r7,panorama_outside9r8;
let panorama_ward_g1,panorama_ward_g2,panorama_ward_g3,panorama_ward_g4,panorama_ward_g5,panorama_ward_g6,panorama_ward_g7,panorama_ward_g8,panorama_ward_g9,panorama_ward_g10,panorama_ward_g11;
let panorama_lb1,panorama_lb2,panorama_lb3,panorama_lb4,panorama_lb5,panorama_lb6;
let panorama_br1,panorama_br2,panorama_br3,panorama_br4;
let panorama_sf2,panorama_sf3,panorama_sf4,panorama_sf5,panorama_sf6,panorama_sf7;
let panorama_ss2,panorama_ss3,panorama_ss4,panorama_ss5,panorama_ss6,panorama_ss7;
let panorama_classars21,panorama_classars22,panorama_classars41,panorama_classars42,panorama_classars61,panorama_classars62;
let panorama_classars221,panorama_classars211;
let panorama_classleft1,panorama_classleft2,panorama_classright1,panorama_classright2;
let panorama_ch1,panorama_ch2,panorama_ch3,panorama_ch4;
let panorama_ward_11,panorama_ward_12,panorama_ward_13,panorama_ward_14,panorama_ward_15,panorama_ward_16,panorama_ward_17,panorama_ward_18;
let panorama_ward_21,panorama_ward_22,panorama_ward_23,panorama_ward_24,panorama_ward_25,panorama_ward_27,panorama_ward_28,panorama_ward_29,panorama_ward_210,panorama_ward_211;
let panorama_ward_31,panorama_ward_32,panorama_ward_33,panorama_ward_34,panorama_ward_35,panorama_ward_36,panorama_ward_37,panorama_ward_38,panorama_ward_39,panorama_ward_310,panorama_ward_311,panorama_ward_312;
let panorama_of1,panorama_of2,panorama_of3,panorama_of4,panorama_of5,panorama_of6,priciple;
let ctlab1,ctlab2,ctlab3,ctlab4,ctlab5,ctlab6;
let cadlab_1,cadlab_2,cadlab_3,cadlab_4;
let eeect1,eeect2,ct,eee;
let aume1,aume2,au,me;
let cear1,cear2,ce,ar;
let nss1,nss2,nss,science;
let sleft1,sleft2,smartright1,smartright2,smartright11,smartright22,smartright111,smartright222,smartright1111,smartright2222;
let dr1,dr2,dr3,dr4;
let panorama_classleft12,panorama_classleft22,panorama_classleft13,panorama_classleft23,panorama_classleft14,panorama_classleft24,panorama_classleft15,panorama_classleft25,panorama_classright12,panorama_classright22,panorama_classright13,panorama_classright23,panorama_classright14,panorama_classright24;

const imageContainer = document.querySelector(".image-container");

const path = "static/icons/map";
const format = '.jpg';

panorama_arrow = new PANOLENS.CubePanorama([
    path + format, path + format,
    path + format, path + format,
    path + format, path + format
]);



panorama_arrow = new PANOLENS.ImagePanorama("static/icons/map.jpg");
//images of outdoor
panorama_outside1 = new PANOLENS.ImagePanorama("static/images/outside/1.jpg");
panorama_outside2 = new PANOLENS.ImagePanorama("static/images/outside/2.jpg");
panorama_outside3 = new PANOLENS.ImagePanorama("static/images/outside/3.jpg");
panorama_outside3r = new PANOLENS.ImagePanorama("static/images/outside/3r.jpg");
panorama_outside4 = new PANOLENS.ImagePanorama("static/images/outside/4.jpg");
panorama_outside5 = new PANOLENS.ImagePanorama("static/images/outside/5.jpg");
panorama_outside6 = new PANOLENS.ImagePanorama("static/images/outside/6.jpg");
panorama_outside7 = new PANOLENS.ImagePanorama("static/images/outside/7.jpg");
panorama_outside8 = new PANOLENS.ImagePanorama("static/images/outside/8.jpg");
panorama_outside9 = new PANOLENS.ImagePanorama("static/images/outside/9.png");
panorama_outside9l = new PANOLENS.ImagePanorama("static/images/outside/9l.jpg");
panorama_outside9r3 = new PANOLENS.ImagePanorama("static/images/outside/9r3.jpg");
panorama_outside9r4 = new PANOLENS.ImagePanorama("static/images/outside/9r4.jpg");
panorama_outside9r5 = new PANOLENS.ImagePanorama("static/images/outside/9r5.jpg");
panorama_outside9r6 = new PANOLENS.ImagePanorama("static/images/outside/9r6.jpg");
panorama_outside9r7 = new PANOLENS.ImagePanorama("static/images/outside/9r7.jpg");
panorama_outside9r8 = new PANOLENS.ImagePanorama("static/images/outside/9r8.jpg");
panorama_outside9r9 = new PANOLENS.ImagePanorama("static/images/outside/9r9.jpg");

//images of ground foolr
panorama_ward_g1 = new PANOLENS.ImagePanorama("static/images/ward/1.jpg");
panorama_ward_g2 = new PANOLENS.ImagePanorama("static/images/ward/g/2.jpg");
panorama_ward_g3 = new PANOLENS.ImagePanorama("static/images/ward/g/3.jpg");
panorama_ward_g4 = new PANOLENS.ImagePanorama("static/images/ward/g/4.jpg");
panorama_ward_g5 = new PANOLENS.ImagePanorama("static/images/ward/g/5.png");
panorama_ward_g6 = new PANOLENS.ImagePanorama("static/images/ward/g/6.jpg");
panorama_ward_g7 = new PANOLENS.ImagePanorama("static/images/ward/g/7.jpg");
panorama_ward_g8 = new PANOLENS.ImagePanorama("static/images/ward/g/8.jpg");
panorama_ward_g9 = new PANOLENS.ImagePanorama("static/images/ward/g/9.jpg");
panorama_ward_g10 = new PANOLENS.ImagePanorama("static/images/ward/g/10.jpg");
panorama_ward_g11 = new PANOLENS.ImagePanorama("static/images/ward/g/11.jpg");


//images of library
panorama_lb1 = new PANOLENS.ImagePanorama("static/images/library/1.jpg");
panorama_lb2 = new PANOLENS.ImagePanorama("static/images/library/2.jpg");
panorama_lb3 = new PANOLENS.ImagePanorama("static/images/library/3.jpg");
panorama_lb4 = new PANOLENS.ImagePanorama("static/images/library/4.jpg");
panorama_lb5 = new PANOLENS.ImagePanorama("static/images/library/5.jpg");
panorama_lb6 = new PANOLENS.ImagePanorama("static/images/library/6.jpg");

//bord room images
panorama_br1=new PANOLENS.ImagePanorama("static/images/office/br1.jpg")
panorama_br2=new PANOLENS.ImagePanorama("static/images/office/br2.jpg")
panorama_br3=new PANOLENS.ImagePanorama("static/images/office/br3.jpg")
panorama_br4=new PANOLENS.ImagePanorama("static/images/office/br4.jpg")


//step first
panorama_sf2=new PANOLENS.ImagePanorama("static/images/step/f2.jpg")
panorama_sf3=new PANOLENS.ImagePanorama("static/images/step/f3.jpg")
panorama_sf4=new PANOLENS.ImagePanorama("static/images/step/f4.jpg")
panorama_sf5=new PANOLENS.ImagePanorama("static/images/step/f5.jpg")
panorama_sf6=new PANOLENS.ImagePanorama("static/images/step/f6.jpg")
panorama_sf7=new PANOLENS.ImagePanorama("static/images/step/f7.jpg")

//step second 
panorama_ss2=new PANOLENS.ImagePanorama("static/images/step/s2.jpg")
panorama_ss3=new PANOLENS.ImagePanorama("static/images/step/s3.jpg")
panorama_ss4=new PANOLENS.ImagePanorama("static/images/step/s4.jpg")
panorama_ss5=new PANOLENS.ImagePanorama("static/images/step/s5.jpg")
panorama_ss6=new PANOLENS.ImagePanorama("static/images/step/s6.jpg")
panorama_ss7=new PANOLENS.ImagePanorama("static/images/step/s7.jpg")



//class room-1 left gnd
panorama_classars21=new PANOLENS.ImagePanorama("static/images/classroom/ars21.jpg")
panorama_classars22=new PANOLENS.ImagePanorama("static/images/classroom/ars22.jpg")

//class room-1 left gnd
panorama_classars211=new PANOLENS.ImagePanorama("static/images/classroom/ars21.jpg")
panorama_classars221=new PANOLENS.ImagePanorama("static/images/classroom/ars22.jpg")


//class room-2 right gnd 
panorama_classars41=new PANOLENS.ImagePanorama("static/images/classroom/ars41.jpg")
panorama_classars42=new PANOLENS.ImagePanorama("static/images/classroom/ars42.jpg")


//class room -3 right gnd smart class
panorama_classars61=new PANOLENS.ImagePanorama("static/images/classroom/ars61.jpg")
panorama_classars62=new PANOLENS.ImagePanorama("static/images/classroom/ars62.jpg")

//chemistry lab
panorama_ch1=new PANOLENS.ImagePanorama("static/images/lab/ch1.jpg")
panorama_ch2=new PANOLENS.ImagePanorama("static/images/lab/ch2.jpg")
panorama_ch3=new PANOLENS.ImagePanorama("static/images/lab/ch3.jpg")
panorama_ch4=new PANOLENS.ImagePanorama("static/images/lab/ch4.jpg")



//dept
eeect1=new PANOLENS.ImagePanorama("static/images/office/deptec1.jpg")
eeect2=new PANOLENS.ImagePanorama("static/images/office/deptec2.jpg")
eee=new PANOLENS.ImagePanorama("static/images/office/hoseee.jpg")
ct=new PANOLENS.ImagePanorama("static/images/office/hosct.jpg")

cear1=new PANOLENS.ImagePanorama("static/images/office/deptac1.jpg")
cear2=new PANOLENS.ImagePanorama("static/images/office/deptac2.jpg")
ce=new PANOLENS.ImagePanorama("static/images/office/hosce.jpg")
ar=new PANOLENS.ImagePanorama("static/images/office/hosar.jpg")



//1st floor
//1st floor
panorama_of1=new PANOLENS.ImagePanorama("static/images/office/office1.jpg")
panorama_of2=new PANOLENS.ImagePanorama("static/images/office/office2.jpg")
panorama_of3=new PANOLENS.ImagePanorama("static/images/office/office3.jpg")
panorama_of4=new PANOLENS.ImagePanorama("static/images/office/office4.jpg")
panorama_of5=new PANOLENS.ImagePanorama("static/images/office/office5.jpg")
panorama_of6=new PANOLENS.ImagePanorama("static/images/office/office6.jpg")
priciple=new PANOLENS.ImagePanorama("static/images/office/pr.jpg")

//ct and cad lab
ctlab1=new PANOLENS.ImagePanorama("static/images/lab/ctlab1.jpg")
ctlab2=new PANOLENS.ImagePanorama("static/images/lab/ctlab2.jpg")
ctlab3=new PANOLENS.ImagePanorama("static/images/lab/ctlab3.jpg")
ctlab4=new PANOLENS.ImagePanorama("static/images/lab/ctlab4.jpg")
ctlab5=new PANOLENS.ImagePanorama("static/images/lab/ctlab5.jpg")
ctlab6=new PANOLENS.ImagePanorama("static/images/lab/ctlab6.jpg")
cadlab_1=new PANOLENS.ImagePanorama("static/images/lab/cad1.jpg")
cadlab_2=new PANOLENS.ImagePanorama("static/images/lab/cad2.jpg")
cadlab_3=new PANOLENS.ImagePanorama("static/images/lab/cad3.jpg")
cadlab_4=new PANOLENS.ImagePanorama("static/images/lab/cad4.jpg")


panorama_ward_11 = new PANOLENS.ImagePanorama("static/images/ward/1/1.jpg");
panorama_ward_12 = new PANOLENS.ImagePanorama("static/images/ward/1/2.jpg");
panorama_ward_13 = new PANOLENS.ImagePanorama("static/images/ward/1/3.jpg");
panorama_ward_14 = new PANOLENS.ImagePanorama("static/images/ward/1/4.jpg");
//panorama_ward_15 = new PANOLENS.ImagePanorama("static/images/ward/1/5.png");
panorama_ward_16 = new PANOLENS.ImagePanorama("static/images/ward/1/6.jpg");
panorama_ward_17 = new PANOLENS.ImagePanorama("static/images/ward/1/7.jpg");
panorama_ward_18 = new PANOLENS.ImagePanorama("static/images/ward/1/8.jpg");
panorama_ward_19 = new PANOLENS.ImagePanorama("static/images/ward/1/9.jpg");

//normal class room all left and right
panorama_classleft1= new PANOLENS.ImagePanorama("static/images/classroom/left1.jpg")
panorama_classleft2= new PANOLENS.ImagePanorama("static/images/classroom/left2.jpg")
panorama_classright1= new PANOLENS.ImagePanorama("static/images/classroom/right1.jpg")
panorama_classright2= new PANOLENS.ImagePanorama("static/images/classroom/right2.jpg")



//second floor
panorama_ward_21 = new PANOLENS.ImagePanorama("static/images/ward/2/1.jpg");
panorama_ward_22 = new PANOLENS.ImagePanorama("static/images/ward/2/2.jpg");
panorama_ward_23 = new PANOLENS.ImagePanorama("static/images/ward/2/3.jpg");
panorama_ward_24 = new PANOLENS.ImagePanorama("static/images/ward/2/4.jpg");
panorama_ward_25 = new PANOLENS.ImagePanorama("static/images/ward/2/5.jpg");
//panorama_ward_26 = new PANOLENS.ImagePanorama("static/images/ward/2/6.jpg");
panorama_ward_27 = new PANOLENS.ImagePanorama("static/images/ward/2/7.jpg");
panorama_ward_28 = new PANOLENS.ImagePanorama("static/images/ward/2/8.jpg");
panorama_ward_29 = new PANOLENS.ImagePanorama("static/images/ward/2/9.jpg");
panorama_ward_210 = new PANOLENS.ImagePanorama("static/images/ward/2/10.jpg");
panorama_ward_211 = new PANOLENS.ImagePanorama("static/images/ward/2/11.jpg");

sleft1 = new PANOLENS.ImagePanorama("static/images/classroom/smartleft1.jpg");
sleft2 = new PANOLENS.ImagePanorama("static/images/classroom/smartleft2.jpg");
smartright1 = new PANOLENS.ImagePanorama("static/images/classroom/smartright1.jpg");
smartright2 = new PANOLENS.ImagePanorama("static/images/classroom/smartright2.jpg");
smartright11 = new PANOLENS.ImagePanorama("static/images/classroom/smartright1.jpg");
smartright22 = new PANOLENS.ImagePanorama("static/images/classroom/smartright2.jpg");
smartright111 = new PANOLENS.ImagePanorama("static/images/classroom/smartright1.jpg");
smartright222 = new PANOLENS.ImagePanorama("static/images/classroom/smartright2.jpg");
smartright1111 = new PANOLENS.ImagePanorama("static/images/classroom/smartright1.jpg");
smartright2222 = new PANOLENS.ImagePanorama("static/images/classroom/smartright2.jpg");

//drawing hall

dr1 = new PANOLENS.ImagePanorama("static/images/lab/dr1.jpg");
dr2 = new PANOLENS.ImagePanorama("static/images/lab/dr2.jpg");
dr3 = new PANOLENS.ImagePanorama("static/images/lab/dr3.jpg");
dr4 = new PANOLENS.ImagePanorama("static/images/lab/dr4.jpg");


//dept
nss1=new PANOLENS.ImagePanorama("static/images/office/deptnss1.jpg")
nss2=new PANOLENS.ImagePanorama("static/images/office/deptnss2.jpg")
nss=new PANOLENS.ImagePanorama("static/images/office/nss.jpg")
science=new PANOLENS.ImagePanorama("static/images/office/hosscince.jpg")

aume1=new PANOLENS.ImagePanorama("static/images/office/deptam1.jpg")
aume2=new PANOLENS.ImagePanorama("static/images/office/deptam2.jpg")
au=new PANOLENS.ImagePanorama("static/images/office/hosau.jpg")
me=new PANOLENS.ImagePanorama("static/images/office/hosme.jpg")


//3rd floor
//3rd floor
//3rd floor


//panorama_ward_31 = new PANOLENS.ImagePanorama("static/images/ward/3/1.jpg");
panorama_ward_32 = new PANOLENS.ImagePanorama("static/images/ward/3/2.jpg");
panorama_ward_33 = new PANOLENS.ImagePanorama("static/images/ward/3/3.jpg");
panorama_ward_34 = new PANOLENS.ImagePanorama("static/images/ward/3/4.jpg");
panorama_ward_35 = new PANOLENS.ImagePanorama("static/images/ward/3/5.jpg");
panorama_ward_36 = new PANOLENS.ImagePanorama("static/images/ward/3/6.jpg");
panorama_ward_37 = new PANOLENS.ImagePanorama("static/images/ward/3/7.jpg");
panorama_ward_38 = new PANOLENS.ImagePanorama("static/images/ward/3/8.jpg");
panorama_ward_39 = new PANOLENS.ImagePanorama("static/images/ward/3/9.jpg");
panorama_ward_310 = new PANOLENS.ImagePanorama("static/images/ward/3/10.jpg");
panorama_ward_311 = new PANOLENS.ImagePanorama("static/images/ward/3/11.jpg");
panorama_ward_312 = new PANOLENS.ImagePanorama("static/images/ward/3/12.jpg");



//normal class room all left and right
panorama_classleft12= new PANOLENS.ImagePanorama("static/images/classroom/left1.jpg")
panorama_classleft22= new PANOLENS.ImagePanorama("static/images/classroom/left2.jpg")
panorama_classright12= new PANOLENS.ImagePanorama("static/images/classroom/right1.jpg")
panorama_classright22= new PANOLENS.ImagePanorama("static/images/classroom/right2.jpg")
panorama_classleft13= new PANOLENS.ImagePanorama("static/images/classroom/left1.jpg")
panorama_classleft23= new PANOLENS.ImagePanorama("static/images/classroom/left2.jpg")
panorama_classright13= new PANOLENS.ImagePanorama("static/images/classroom/right1.jpg")
panorama_classright23= new PANOLENS.ImagePanorama("static/images/classroom/right2.jpg")
panorama_classleft14= new PANOLENS.ImagePanorama("static/images/classroom/left1.jpg")
panorama_classleft24= new PANOLENS.ImagePanorama("static/images/classroom/left2.jpg")
panorama_classright14= new PANOLENS.ImagePanorama("static/images/classroom/right1.jpg")
panorama_classright24= new PANOLENS.ImagePanorama("static/images/classroom/right2.jpg")
panorama_classleft15= new PANOLENS.ImagePanorama("static/images/classroom/left1.jpg")
panorama_classleft25= new PANOLENS.ImagePanorama("static/images/classroom/left2.jpg")




panorama_arrow.link(panorama_ward_g1,new THREE.Vector3(100, 1000, 2000));///
panorama_arrow.link(panorama_outside1,new THREE.Vector3(-200 ,1000, -2000)); ///
panorama_arrow.link(panorama_br1,new THREE.Vector3(1000, -500, 2000));///
panorama_arrow.link(panorama_lb1,new THREE.Vector3(-500, -500, 2000));///
panorama_arrow.link(aume1,new THREE.Vector3(1000, -500, -2500)) ///
panorama_arrow.link(cear1,new THREE.Vector3(3600, -1000, -2000)); ///
panorama_arrow.link(eeect1,new THREE.Vector3(-3000, -500, -1000)); ///
panorama_arrow.link(nss1,new THREE.Vector3(-1000, -500, -2000)); ///
panorama_arrow.link(panorama_of1,new THREE.Vector3(2600, -500, 1000)); ///
panorama_arrow.link(panorama_sf7,new THREE.Vector3(-1800, -300, 1000)); ///


//outside go front 
panorama_outside1.link(panorama_outside2,new THREE.Vector3(-500, 0,3500)) //1 to 2 outside
panorama_outside2.link(panorama_outside3,new THREE.Vector3(-2500, 0,500)) //2 to 3 outside
panorama_outside3.link(panorama_outside4,new THREE.Vector3(2300, 0,300)) //3 to 4 outside
panorama_outside4.link(panorama_outside5,new THREE.Vector3(2100, 0,-300)) //4 to 5 outside
panorama_outside5.link(panorama_outside6,new THREE.Vector3(-2300, 0,-150)) //5 to 6 outside
panorama_outside6.link(panorama_outside7,new THREE.Vector3(-2300, 0,-300)) //6 to 7 outside
panorama_outside7.link(panorama_outside8,new THREE.Vector3(2300, 0,300)) //7 to 8 outside
panorama_outside8.link(panorama_outside9,new THREE.Vector3(2300, 0,300)) // 8 to 9  outside
panorama_outside9.link(panorama_outside9l,new THREE.Vector3(-5000, 0,2000)) // 9 to 9 left outside
panorama_outside9l.link(panorama_ward_g1,new THREE.Vector3(-2000, 0,-300)) // 9left to temp connetion of 1




//outside go back
panorama_outside2.link(panorama_outside1,new THREE.Vector3(3000, 0,-500)) //2 to 3
panorama_outside3.link(panorama_outside2,new THREE.Vector3(-2300, 0,-300)) //3 to 2
panorama_outside4.link(panorama_outside3,new THREE.Vector3(-2300, 0,-300)) //4 to 3
panorama_outside5.link(panorama_outside4,new THREE.Vector3(2300, 0,300)) // 5 to 4
panorama_outside6.link(panorama_outside5,new THREE.Vector3(2300, 0,300)) //6 to 5
panorama_outside7.link(panorama_outside6,new THREE.Vector3(-2300, 0,-300)) //7 to 6 
panorama_outside8.link(panorama_outside7,new THREE.Vector3(-2300, 0,-300)) //8 to 7
panorama_outside9.link(panorama_outside8,new THREE.Vector3(-1000, 0,-3000)) // 9 to 8 
panorama_outside9l.link(panorama_outside9,new THREE.Vector3(-300, 0,2300)) //9left to 9



// 9 image to right move connetion front and back
panorama_outside9.link(panorama_outside9r3,new THREE.Vector3(3000, 0,500)) //9 to 9r3 front
panorama_outside9r3.link(panorama_outside9r4,new THREE.Vector3(-2300, -200,-800)) //9r3 to 9r4 
panorama_outside9r4.link(panorama_outside9r5,new THREE.Vector3(-2500, -200,200)) //9r4 to 9r5
panorama_outside9r5.link(panorama_outside9r6,new THREE.Vector3(-2300, -200,-800)) //9r5 to 9r6
panorama_outside9r6.link(panorama_outside9r7,new THREE.Vector3(-3500, -200,0)) //9r6 to 9r7
panorama_outside9r7.link(panorama_outside9r8,new THREE.Vector3(-3000, 0,-1000)) //9r7 to 9r8
panorama_outside9r8.link(panorama_outside9r9,new THREE.Vector3(2300, -200,-800)) //9r8 to 9r9

//9 image to right move connetion move back
panorama_outside9r3.link(panorama_outside9,new THREE.Vector3(2300, 0,800)) // 9r3 to 9
panorama_outside9r4.link(panorama_outside9r3,new THREE.Vector3(2500, 200,-200)) //9r4 to 9r3
panorama_outside9r5.link(panorama_outside9r4,new THREE.Vector3(2300, 0,800)) // 9r5 to 9r4 
panorama_outside9r6.link(panorama_outside9r5,new THREE.Vector3(2500, 200,-200)) // 9r6 to 9r5
panorama_outside9r7.link(panorama_outside9r6,new THREE.Vector3(3000, 0,1000)) //9r7 to 9r6
panorama_outside9r8.link(panorama_outside9r7,new THREE.Vector3(-2300, 0,800)) //9r8 to 9r7
panorama_outside9r9.link(panorama_outside9r8,new THREE.Vector3(-3000, 200,-800)) //9r9 to 9r8

//3 image to right move connetion move back and front
panorama_outside3.link(panorama_outside3r,new THREE.Vector3(-500, 0,-5000))// 3 to 3right outside
panorama_outside3r.link(panorama_outside3,new THREE.Vector3(-5000, 0,2000))// 3 right to 3 outside





// 9 right 4 image right














//ward gnd floor  front 
panorama_ward_g1.link(panorama_ward_g2,new THREE.Vector3(-2500, -100,300)) // gnd 1 to 2
panorama_ward_g2.link(panorama_ward_g3,new THREE.Vector3(-1000, -100,-1500)) //gnd 2 to 3
panorama_ward_g3.link(panorama_ward_g4,new THREE.Vector3(-3500, 0,500)) //gnd 3 to 4
panorama_ward_g4.link(panorama_ward_g5,new THREE.Vector3(3500, 0,300)) //gnd 4 to 5
panorama_ward_g5.link(panorama_ward_g6,new THREE.Vector3(2000, 0,-1000)) //gnd 5 to 6
panorama_ward_g6.link(panorama_ward_g7,new THREE.Vector3(3500, 0,-500)) //gnd 6 to gnd 7
panorama_ward_g7.link(panorama_ward_g8,new THREE.Vector3(3500, 0,300)) //gnd 7 to gnd 8
panorama_ward_g8.link(panorama_ward_g9,new THREE.Vector3(-300, 0,2000)) //gnd 8 to gnd 9
panorama_ward_g9.link(panorama_ward_g10,new THREE.Vector3(300, 0,-2000)) //gnd 9 to gnd 10
panorama_ward_g10.link(panorama_ward_g11,new THREE.Vector3(-300, 0,2000)) //gnd 10 to gnd 11
panorama_ward_g11.link(panorama_ward_g2,new THREE.Vector3(-2000, 0,1500)) //gnd 11 to gnd 2




//ward gnd floor back 
panorama_ward_g1.link(panorama_outside9l,new THREE.Vector3(2500, -100,-300)) // gnd 1 to outside 9l
panorama_ward_g2.link(panorama_ward_g1,new THREE.Vector3(2500, -100,-300)) // gnd 2 to gnd 1
panorama_ward_g3.link(panorama_ward_g2,new THREE.Vector3(1000, -100,500)) // gnd 3 to gnd 2 
panorama_ward_g4.link(panorama_ward_g3,new THREE.Vector3(-3500, 0,-300)) // gnd 4 to gnd 3
panorama_ward_g5.link(panorama_ward_g4,new THREE.Vector3(-2000, 0,1000)) // gnd 5 to gnd 4
panorama_ward_g6.link(panorama_ward_g5,new THREE.Vector3(-1000, 0,-1500)) // gnd 6 to gnd 5
panorama_ward_g7.link(panorama_ward_g6,new THREE.Vector3(300, 0,-2400)) //gnd 7 to gnd 6 
panorama_ward_g8.link(panorama_ward_g7,new THREE.Vector3(300, 0,-2000)) //gnd 8 to gnd 7
panorama_ward_g9.link(panorama_ward_g8,new THREE.Vector3(-300, 0,2000)) //gnd 9 to gnd 8
panorama_ward_g10.link(panorama_ward_g9,new THREE.Vector3(300, 0,-2000)) //gnd 10 to gnd 9
panorama_ward_g11.link(panorama_ward_g10,new THREE.Vector3(3500, 0,-500)) //gnd 11 to gnd 10
panorama_ward_g2.link(panorama_ward_g11,new THREE.Vector3(-2000, 0,1800)) //gnd 2 to gnd 11


//library front 
panorama_ward_g4.link(panorama_lb1,new THREE.Vector3(100, 0,1500))//g4 to lb1
panorama_lb1.link(panorama_lb2,new THREE.Vector3(600, 0,1500)) //lb1 to lb2
panorama_lb2.link(panorama_lb3,new THREE.Vector3(100, 0,-2000)) //lb2 to lb3
panorama_lb3.link(panorama_lb4,new THREE.Vector3(1800, 0,0)) //lb3 to lb4
panorama_lb4.link(panorama_lb5,new THREE.Vector3(1500, 0,-500)) //lb4 to lb5
panorama_lb5.link(panorama_lb6,new THREE.Vector3(1800, 100,0)) //lb5 to lb6
panorama_lb6.link(panorama_lb1,new THREE.Vector3(-1500, 0,0)) //lb6 to lb1


//library back 
panorama_lb1.link(panorama_ward_g4,new THREE.Vector3(-1500, 0,300))//lb1 to gnd4
panorama_lb1.link(panorama_lb6,new THREE.Vector3(300, 0,-1500))//lb1 to lb6
panorama_lb2.link(panorama_lb1,new THREE.Vector3(-1000, 0,500)) //lb2 to lb1
panorama_lb3.link(panorama_lb2,new THREE.Vector3(100,0,-2000)) //lb3 to lb2
panorama_lb4.link(panorama_lb3,new THREE.Vector3(-1800, 0,0)) //lb4 to lb3
panorama_lb5.link(panorama_lb4,new THREE.Vector3(100, 0,-2000)) //lb5 to lb4
panorama_lb6.link(panorama_lb5,new THREE.Vector3(100,0,1800)) //lb6 to lb5




//bord room front
panorama_ward_g11.link(panorama_br1,new THREE.Vector3(-800, 0,-1800)) //gnd 11 to br1
panorama_br1.link(panorama_br2,new THREE.Vector3(1900, 0,-500))  //br1 to br2
panorama_br2.link(panorama_br3,new THREE.Vector3(2500, 0,500)) //br2 to br3
panorama_br3.link(panorama_br4,new THREE.Vector3(-2500, 0,-500)) // br3 to br 4
panorama_br4.link(panorama_br1,new THREE.Vector3(1500, 0,-500)) //br4 to br1

//bord room back
panorama_br1.link(panorama_ward_g11,new THREE.Vector3(-1900, 0,500)) //br1 to gnd 11
panorama_br2.link(panorama_br1,new THREE.Vector3(1000, 0,-2500))  //br2 to br 1
panorama_br3.link(panorama_br2,new THREE.Vector3(-500, 0,2500)) //br3 to br2
panorama_br4.link(panorama_br3,new THREE.Vector3(-500, 0,-1200)) //br4 to br 3
panorama_br1.link(panorama_br4,new THREE.Vector3(500, 0,-1800)) //br1 to br4




//step star front
panorama_ward_g2.link(panorama_sf2,new THREE.Vector3(-2500, 500,300)) //gnd 2 to sf2
panorama_sf2.link(panorama_sf3,new THREE.Vector3(2000, 500,-500)) //sf2 to sf3
panorama_sf3.link(panorama_sf4,new THREE.Vector3(2500, 500,-500)) //sf3 to sf4 
panorama_sf4.link(panorama_sf5,new THREE.Vector3(2500, 500,-1200)) //sf4 to sf5
panorama_sf5.link(panorama_sf6,new THREE.Vector3(-2500, 500,500)) //sf5 to sf6
panorama_sf6.link(panorama_sf7,new THREE.Vector3(2500, 500,-1000)) //sf6 tp sf7


//step star back
panorama_sf2.link(panorama_ward_g2,new THREE.Vector3(2500, -500,300)) //sf2 to gnd2
panorama_sf3.link(panorama_sf2,new THREE.Vector3(2500, -500,300)) //sf3 to sf2
panorama_sf4.link(panorama_sf3,new THREE.Vector3(2500, -500,0)) //sf4 to sf3
panorama_sf5.link(panorama_sf4,new THREE.Vector3(-2500, -1000,-500)) //sf5 to sf4
panorama_sf6.link(panorama_sf5,new THREE.Vector3(2500, -1000,500)) //sf6 to sf5
panorama_sf7.link(panorama_sf6,new THREE.Vector3(2500, -500,300))


//step star front
panorama_ward_g7.link(panorama_ss2,new THREE.Vector3(-500, 0,-1000)) ///
panorama_ss2.link(panorama_ss3,new THREE.Vector3(2000, 500,-500)) ///
panorama_ss3.link(panorama_ss4,new THREE.Vector3(2500, 500,-500)) ///
panorama_ss4.link(panorama_ss5,new THREE.Vector3(-2500, 500,1200)) ///
panorama_ss5.link(panorama_ss6,new THREE.Vector3(2500, 500,-500)) ///
panorama_ss6.link(panorama_ss7,new THREE.Vector3(2500, 500,-1000))///


//step star back
panorama_ss2.link(panorama_ward_g7,new THREE.Vector3(2500, -500,300)) ///
panorama_ss3.link(panorama_ss2,new THREE.Vector3(2500, -500,300)) ///
panorama_ss4.link(panorama_ss3,new THREE.Vector3(-2500, -500,0)) ///
panorama_ss5.link(panorama_ss4,new THREE.Vector3(2500, -1000,500)) ///
panorama_ss6.link(panorama_ss5,new THREE.Vector3(2500, -1000,500)) ///
panorama_ss7.link(panorama_ss6,new THREE.Vector3(2500, -500,300)) ///


//class room-1 ar s6 full
panorama_ward_g5.link(panorama_classars61,new THREE.Vector3(1007.50, 0, 1000.00)); //ward g5 to S61
panorama_classars61.link(panorama_ward_g5,new THREE.Vector3(1007.50, 0, 0)); //class S61 TO WARDG5
panorama_classars61.link(panorama_classars62,new THREE.Vector3(-1007.50, 0, 1000)); //class ARS61 to class ARS62
panorama_classars62.link(panorama_classars61,new THREE.Vector3(-3500, 0, 900)); //CLASS ARS62 TO CLASS ARS61


//class room-2 ar s2
panorama_ward_g7.link(panorama_classars21,new THREE.Vector3(-1007.50, 0, 2500.00)); //ward g7 to CES21
panorama_classars21.link(panorama_ward_g7,new THREE.Vector3(1007.50, 0, 0)); // CES1 TO WARDG7
panorama_classars21.link(panorama_classars22,new THREE.Vector3(-3007.50, 0, -1000)); // CES1 TO CES2
panorama_classars22.link(panorama_classars21,new THREE.Vector3(2007, 0, 300)); //  CES2 TO CES1

//class room-2 ar s2
panorama_ward_g8.link(panorama_classars211,new THREE.Vector3(-3507.50, 0, -500.00)); //ward g7 to CES21
panorama_classars211.link(panorama_ward_g8,new THREE.Vector3(1007.50, 0, 0)); // CES1 TO WARDG7
panorama_classars211.link(panorama_classars221,new THREE.Vector3(-3007.50, 0, -1000)); // CES1 TO CES2
panorama_classars221.link(panorama_classars211,new THREE.Vector3(2007, 0, 300)); //  CES2 TO CES1

//class room-3 ar s4
panorama_ward_g9.link(panorama_classars41,new THREE.Vector3(3007.50, 0, 500.00)); //WARDG8 TO ARS4
panorama_classars41.link(panorama_ward_g9,new THREE.Vector3(-2500, 0, -400.50)); //ARS4 TO WARDG8
panorama_classars41.link(panorama_classars42,new THREE.Vector3(1007.50, 0, -1000)); //ARS41 TO ARS42
panorama_classars42.link(panorama_classars41,new THREE.Vector3(-4007.50, 0, 1000)); //ARS42 TO ARS41


//chemistry lab 
panorama_ward_g10.link(panorama_ch1,new THREE.Vector3(-3000, 0, -500)); // wardg10 to ch1
panorama_ch1.link(panorama_ward_g10,new THREE.Vector3(-4007.50, 0, 1000)); //ch1 to wardg10

panorama_ch1.link(panorama_ch2,new THREE.Vector3(3007, 0, -500)); //ch1 to ch2
panorama_ch1.link(panorama_ch4,new THREE.Vector3(1007, 0, -2000)); //ch1 to ch4

panorama_ch2.link(panorama_ch3,new THREE.Vector3(4007.50, 0, -1500)); // ch2 to ch3
panorama_ch2.link(panorama_ch1,new THREE.Vector3(-1000, 0, -1500)); // ch2 to ch1

panorama_ch3.link(panorama_ch4,new THREE.Vector3(-1007.50, 0, 2500)); // ch3 to ch4
panorama_ch3.link(panorama_ch2,new THREE.Vector3(2007, 0, 500)); // ch3 to ch 2

panorama_ch4.link(panorama_ch1,new THREE.Vector3(3007.50, 0, -500)); // ch4 to ch1
panorama_ch4.link(panorama_ch3,new THREE.Vector3(1007, 0, -3000)); //ch4 to ch3





//1st flowr start


//go front
panorama_sf3.link(panorama_ward_11,new THREE.Vector3(500, 0,2500))        // sf3 to ward 1st 1
panorama_ward_11.link(panorama_ward_12,new THREE.Vector3(3500, 0,1500))   // ward 1st 1 to ward 1st 2
panorama_ward_12.link(panorama_ward_13,new THREE.Vector3(-500, 0,3000))   // ward 1st 2 to ward 1st 3
panorama_ward_13.link(panorama_ward_14,new THREE.Vector3(-1500, 0,500))   // ward 1st 3 to ward 1st 4
panorama_ward_14.link(panorama_ss3,new THREE.Vector3(-1000, 0,2500))   // ward 1st 4 to ward 
panorama_ss3.link(panorama_ward_16,new THREE.Vector3(-500, 0,-2000)) // step second 3 to ward 1st 6  
panorama_ward_16.link(panorama_ward_17,new THREE.Vector3(-2500, 0,0))  //   ward 1st 6 to ward 1st 7
panorama_ward_17.link(panorama_ward_18,new THREE.Vector3(-2500, 0,0))   // ward 1st 7 to ward 1st 8
panorama_ward_18.link(panorama_ward_19,new THREE.Vector3(-2500, 0,0))   // ward 1st 8 to ward 1st 9  
panorama_ward_19.link(panorama_sf3,new THREE.Vector3(-500, 0,-2000))   // ward 1st 9 to step 1st 3

//go back
panorama_ward_11.link(panorama_sf3,new THREE.Vector3(1500, 0,-3500))      // ward 11 to step3
panorama_ward_12.link(panorama_ward_11,new THREE.Vector3(500, 0,-3000))   // ward 12 to ward 11
panorama_ward_13.link(panorama_ward_12,new THREE.Vector3(1500, 0,-500))   // ward 13 to ward 12
panorama_ward_14.link(panorama_ward_13,new THREE.Vector3(700, 0,-1500))   // ward 14 to ward 13
panorama_ss3.link(panorama_ward_14,new THREE.Vector3(500, 0,2000))   // step second 3 to ward 1st 4   
panorama_ward_16.link(panorama_ss3,new THREE.Vector3(500, 0,2500))   // ward  1st 6 to step second 3
panorama_ward_17.link(panorama_ward_16,new THREE.Vector3(2000, 0,0))   //ward 1st 7 to ward 1st 6
panorama_ward_18.link(panorama_ward_17,new THREE.Vector3(2000, 0,0))   //ward 1st 8 to ward 1st 7
panorama_ward_19.link(panorama_ward_18,new THREE.Vector3(0, 0,2000))   //ward 1st 9 to ward 1st 8
panorama_sf3.link(panorama_ward_19,new THREE.Vector3(-500, 0,-2500))   // step 1st to ward 1st 9




//ctlab
//go front
panorama_ward_16.link(ctlab1,new THREE.Vector3(-500, 0,-2500))  // ward 16 to ctlab 
ctlab1.link(ctlab2,new THREE.Vector3(2500, 0,-500))  //ctlab 1 to 2 
ctlab2.link(ctlab3,new THREE.Vector3(2500, 0,300)) //ct lab 2 to ctlab 3
ctlab3.link(ctlab4,new THREE.Vector3(500, 0,2500))   //ct lab 3 to 4
ctlab4.link(ctlab5,new THREE.Vector3(-2500, 0,200))  //ct lab 4 to 5 
ctlab5.link(ctlab6,new THREE.Vector3(-2500, 0,200))   //ct lab 5 to 6
ctlab6.link(ctlab1,new THREE.Vector3(-500, 0,-2500))   //ctlab 6 to 1


//ctlab
//go back
ctlab1.link(panorama_ward_16,new THREE.Vector3(-1500, 0,-300))   //ctlab 1 to ward 16
ctlab2.link(ctlab1,new THREE.Vector3(-2500, 0,-300)) //ctlab 2 to 1   
ctlab3.link(ctlab2,new THREE.Vector3(-2500, 0,-300))  //ct lab 3 to 2 
ctlab4.link(ctlab3,new THREE.Vector3(-500, 0,-2500))   // ct lab 4 to 3
ctlab5.link(ctlab4,new THREE.Vector3(2500, 0,-200))   //ct lab 5 to 4
ctlab6.link(ctlab5,new THREE.Vector3(2500, 0,-200))   // ct lab 6 to 5
ctlab1.link(ctlab6,new THREE.Vector3(500, 0,2500)) // ct lab1 to ctlab6




//cad lab go front
panorama_ward_17.link(cadlab_1,new THREE.Vector3(-500, 0,-2500)) //ward 17 to cadlab 1
cadlab_1.link(cadlab_2,new THREE.Vector3(2500, 0,1000)) //cadlab 1 to cadlab 2
cadlab_2.link(cadlab_3,new THREE.Vector3(1500, 0,-2500)) //cadlab 2 to cadlab3
cadlab_3.link(cadlab_4,new THREE.Vector3(-2500, 0,500)) //cadlab 3 to cadlab 4
cadlab_4.link(cadlab_1,new THREE.Vector3(0,0,2000)) //cad lab 4 to 1 


//cad lab go back
cadlab_1.link(panorama_ward_17,new THREE.Vector3(-2500, 0,-600)) // cad lab 1 to ward 17
cadlab_2.link(cadlab_1,new THREE.Vector3(-2500, 0,-600)) //cadlab 2 to cadlab 1
cadlab_3.link(cadlab_2,new THREE.Vector3(500, 0,2500)) //cadlab 3 to 2
cadlab_4.link(cadlab_3,new THREE.Vector3(1500, 0,500)) //cadlab 4 to 3
cadlab_1.link(cadlab_4,new THREE.Vector3(1500, 0,-2500)) // cad lab 1 to 4



panorama_ward_19.link(priciple,new THREE.Vector3(3007.50, 0, -500.00)); //ward 19 to priciple
priciple.link(panorama_ward_19,new THREE.Vector3(-3007.50, 0, 1500.00)); //priciple to ward 19


//office room
//go front
panorama_ward_12.link(panorama_of1,new THREE.Vector3(-2500, 0,-300))   // ward 12 to office 1
panorama_of1.link(panorama_of2,new THREE.Vector3(-2500, 0,500)) //office 1 to office 2
panorama_of2.link(panorama_of3,new THREE.Vector3(300, 0,-1500)) // office 2 to office 3
panorama_of3.link(panorama_of4,new THREE.Vector3(2800, 0,-500)) //office 3 to office 4
panorama_of4.link(panorama_of5,new THREE.Vector3(-500, 0,1500)) // office 4 to office 5
panorama_of5.link(panorama_of6,new THREE.Vector3(3500, 0,-1500)) // office 5 to office 4


panorama_of1.link(panorama_of4,new THREE.Vector3(2500, 0,1500)) // office 1 to office 4
panorama_of4.link(panorama_of1,new THREE.Vector3(-1000, 0,-2000)) // office 4 to office 1

//go back
panorama_of1.link(panorama_ward_12,new THREE.Vector3(-200, 0,-1800))//office 1 to ward 12
panorama_of2.link(panorama_of1,new THREE.Vector3(-2000, 0,500)) //office 2 to office 1
panorama_of3.link(panorama_of2,new THREE.Vector3(-500, 0,-1500)) //office 3 to office 2
panorama_of4.link(panorama_of3,new THREE.Vector3(-2500, 0,-500)) //office 4 to office 3
panorama_of5.link(panorama_of4,new THREE.Vector3(-500, 0,1500)) //office 5 to office 4
panorama_of6.link(panorama_of5,new THREE.Vector3(-2800, 0,800)) //office 6 to office 5



//go class room right 
panorama_ward_13.link(panorama_classright1,new THREE.Vector3(-500, 0,-3000))    // ward 13 to left class room
panorama_classright1.link(panorama_ward_13,new THREE.Vector3(-2500, 0,1000))    // class to ward 13
panorama_classright1.link(panorama_classright2,new THREE.Vector3(2500, 0,-400)) // class room 1 to 2
panorama_classright2.link(panorama_classright1,new THREE.Vector3(2500, 0,-500)) // class room 2 to 1

//go class room left 
panorama_ward_14.link(panorama_classleft1,new THREE.Vector3(-1500, 0,-500))   // ward 14 to right class room
panorama_classleft1.link(panorama_ward_14,new THREE.Vector3(-2000, 0,-200))   // class to ward 13
panorama_classleft1.link(panorama_classleft2,new THREE.Vector3(2500, 0,-400)) // class room 1 to 2
panorama_classleft2.link(panorama_classleft1,new THREE.Vector3(-2500, 0,500)) // class room 2 to 1



//second flow
//second flow


//go front
panorama_sf5.link(panorama_ward_21,new THREE.Vector3(-500, 0,-2500))   // step 2 to ward 2nd 1     
panorama_ward_21.link(panorama_ward_22,new THREE.Vector3(-1500, 0,-2500))  //ward 2nd 1 to 2
panorama_ward_22.link(panorama_ward_23,new THREE.Vector3(500, 0,2000))   //ward 2nd 2 to 3
panorama_ward_23.link(panorama_ward_24,new THREE.Vector3(500, 0,2000))   // ward 3 to 4
panorama_ward_24.link(panorama_ward_25,new THREE.Vector3(500, 0,-1800)) //ward 4 to 5
panorama_ward_25.link(panorama_ss5,new THREE.Vector3(-200, 0,-2000))  // ward 25 to step 5
panorama_ss5.link(panorama_ward_27,new THREE.Vector3(-200, 0,-2000))  //step 5 tp ward 27
panorama_ward_27.link(panorama_ward_28,new THREE.Vector3(-2000, 0,500))  // ward 7 to 8
panorama_ward_28.link(panorama_ward_29,new THREE.Vector3(-500, 0,-2000))  // ward 28 to 29 
panorama_ward_29.link(panorama_ward_210,new THREE.Vector3(500, 0,2000))   // ward 29 to 210
panorama_ward_210.link(panorama_ward_211,new THREE.Vector3(-500, 0,-2000))   // ward 210 to 11
panorama_ward_211.link(panorama_sf5,new THREE.Vector3(-500, 0,-2000)) // ward 11 to step 5  


//go back
panorama_ward_21.link(panorama_sf5,new THREE.Vector3(-1800, 0,1000)) // ward 2nd 1 to step 5 
panorama_ward_22.link(panorama_ward_21,new THREE.Vector3(-500, 0,-2000))   //ward 2nd 2 to 1
panorama_ward_23.link(panorama_ward_22,new THREE.Vector3(-500, 0,-2000))   // ward 3 to 2
panorama_ward_24.link(panorama_ward_23,new THREE.Vector3(-500, 0,2000))   //ward 4 to 3
panorama_ward_25.link(panorama_ward_24,new THREE.Vector3(-200, 0,2000))   //ward 5 to 4
panorama_ss5.link(panorama_ward_25,new THREE.Vector3(200, 0,2000))   //
panorama_ward_27.link(panorama_ss5,new THREE.Vector3(2000, 0,-500))   //
panorama_ward_28.link(panorama_ward_27,new THREE.Vector3(500, 0,2000))   ///
panorama_ward_29.link(panorama_ward_28,new THREE.Vector3(700, 0,-1500))   ///
panorama_ward_210.link(panorama_ward_29,new THREE.Vector3(500, 0,2000))   ///
panorama_ward_211.link(panorama_ward_210,new THREE.Vector3(-2000, 0,500))  // ward 211 to 210 
panorama_sf5.link(panorama_ward_211,new THREE.Vector3(500, 0,2500)) // step 5 to ward 211




//dept of eee and ct
//go front
panorama_ward_210.link(eeect1,new THREE.Vector3(4000, 0,-3000)) //ward 210 to eeect1
eeect1.link(eeect2,new THREE.Vector3(-5000, 0,2000)) //eeect1 to eeect2
eeect2.link(ct,new THREE.Vector3(-3000, 0,-1900)) //eeect2 to ct
eeect2.link(eee,new THREE.Vector3(-3000, 0,2000)) //eeect2 to eee

//go back
eeect1.link(panorama_ward_210,new THREE.Vector3(2000, 0,-1000)) // eeect1 ward 210
eeect2.link(eeect1,new THREE.Vector3(3000, 0,-500)) //eeect2 eeect1
ct.link(eeect2,new THREE.Vector3(-2000, -200,-2500)) //ct to eeect2
eee.link(eeect2,new THREE.Vector3(-5000, 0,2000))//eee to eeect2


//dept of ce and ar
//go front
panorama_ward_22.link(cear1,new THREE.Vector3(-2500, 0,800)) //ward 210 to ce and ar 1
cear1.link(cear2,new THREE.Vector3(-2500, 0,-800)) //cear1 to cear2
cear2.link(ce,new THREE.Vector3(-3000, 0,1000)) //ceart2 to ce
cear2.link(ar,new THREE.Vector3(-3000, 0,-1900)) //cear2 to ar

//go back
cear1.link(panorama_ward_22,new THREE.Vector3(2000,0,-500)) // cera1 ward 22
cear2.link(cear1,new THREE.Vector3(2000, 0,1000)) //cear2 cear1
ce.link(cear2,new THREE.Vector3(2000, 0,2500)) //ce to cear2
ar.link(cear2,new THREE.Vector3(2500, 0,0))//ar to cear2



//smart class room
panorama_ward_29.link(smartright1,new THREE.Vector3(-2800, 0,0)) //ward 29 to smart right1 
smartright1.link(panorama_ward_29,new THREE.Vector3(2000, 0,500)) // smart right 1 to ward 29 
smartright1.link(smartright2,new THREE.Vector3(-2000, 0,500)) // sright 1 to sright 2
smartright2.link(smartright1,new THREE.Vector3(-2000, 0,500)) //sright 2 to sright 1



//smart class room
panorama_ward_28.link(smartright11,new THREE.Vector3(2800, 0,0)) //ward 25 to smart right11 
smartright11.link(panorama_ward_28,new THREE.Vector3(2000, 0,500)) // smart right 1 to ward 25 
smartright11.link(smartright22,new THREE.Vector3(-2000, 0,500)) // sright 11 to sright 22
smartright22.link(smartright11,new THREE.Vector3(-2000, 0,500)) //sright 22 to sright 11

//smart class room
panorama_ward_25.link(smartright111,new THREE.Vector3(2800, 0,0)) //ward 25 to smart right111 
smartright111.link(panorama_ward_25,new THREE.Vector3(2000, 0,500)) // smart right 111 to ward 25 
smartright111.link(smartright222,new THREE.Vector3(-2000, 0,500)) // sright 111 to sright 222
smartright222.link(smartright111,new THREE.Vector3(-2000, 0,500)) //sright 222 to sright 111






//smart class room
panorama_ward_24.link(sleft1,new THREE.Vector3(2500, 0,300)) //ward 24 to smart left1
sleft1.link(panorama_ward_24,new THREE.Vector3(-2000, 0,500)) //sleft 2 to sleft 1 
sleft1.link(sleft2,new THREE.Vector3(2000, 0,500)) // smart left 1 to ward 24 
sleft2.link(sleft1,new THREE.Vector3(-2000, 0,-500)) // sleft 1 to sleft 2



//smart class room
panorama_ward_23.link(smartright1111,new THREE.Vector3(-2500, 0,-300)) //ward 23 to smart right1111 
smartright1111.link(panorama_ward_23,new THREE.Vector3(2000, 0,500)) // smart right 1111 to ward 23 
smartright1111.link(smartright2222,new THREE.Vector3(-2000, 0,500)) // sright 1111 to sright 2222
smartright2222.link(smartright1111,new THREE.Vector3(-2000, 0,500)) //sright 2222 to sright 1111


//drawing hall
//go front
panorama_ward_27.link(dr1,new THREE.Vector3(200, 0,-2000)) //ward27 to dr1
dr1.link(dr2,new THREE.Vector3(2000, 0,500)) //dr1 to dr2
dr2.link(dr3,new THREE.Vector3(500, 0,1500)) //dr2 to dr3
dr3.link(dr4,new THREE.Vector3(-400, 0,-2500)) //dr3 to dr4
dr4.link(dr1,new THREE.Vector3(-2000, 0,500)) //dr4 to dr1


//drawing hall
//go back
dr1.link(panorama_ward_27,new THREE.Vector3(-2000, 0,500)) //ward27 to dr1
dr2.link(dr1,new THREE.Vector3(-2000, 0,500)) //dr2 to dr1
dr3.link(dr2,new THREE.Vector3(2000, 0,-500)) //dr3 to dr2
dr4.link(dr3,new THREE.Vector3(1400, 0,-2500)) //dr4 to dr3
dr1.link(dr4,new THREE.Vector3(-200, 0,2000)) //dr1 to dr4





///3rd floor 
///3rd floor 
///3rd floor 
///3rd floor 


//go front
panorama_sf7.link(panorama_ward_32,new THREE.Vector3(500, 0,2500))  //step 17 to ward 32
//panorama_ward_31.link(panorama_ward_32,new THREE.Vector3(-1500, 0,-2500)) 
panorama_ward_32.link(panorama_ward_33,new THREE.Vector3(-500, 0,-2000))   // ward 32 to ward 33
panorama_ward_33.link(panorama_ward_34,new THREE.Vector3(-500, 0,-2000))  ///
panorama_ward_34.link(panorama_ward_35,new THREE.Vector3(-500, 0,1800)) ///
panorama_ward_35.link(panorama_ward_36,new THREE.Vector3(-200, 0,2000))  ///
panorama_ward_36.link(panorama_ss7,new THREE.Vector3(-500, 0,2500)) ///
panorama_ss7.link(panorama_ward_37,new THREE.Vector3(-200, 0,-2000))  ///
panorama_ward_37.link(panorama_ward_38,new THREE.Vector3(-500, 0,-2500)) ///
panorama_ward_38.link(panorama_ward_39,new THREE.Vector3(500, 0,2000)) ///
panorama_ward_39.link(panorama_ward_310,new THREE.Vector3(500, 0,2000))  ///
panorama_ward_310.link(panorama_ward_311,new THREE.Vector3(-500, 0,-2000))   ///
panorama_ward_311.link(panorama_ward_312,new THREE.Vector3(-500, 0,-2000))  ///
panorama_ward_312.link(panorama_sf7,new THREE.Vector3(-500, 0,2000)) ///


//go back
//panorama_ward_31.link(panorama_sf7,new THREE.Vector3(-1800, 0,1000)) 
panorama_ward_32.link(panorama_sf7,new THREE.Vector3(500, 0,2000))  // ward 32 to step 17 
panorama_ward_33.link(panorama_ward_32,new THREE.Vector3(500, 0,2000))   ///
panorama_ward_34.link(panorama_ward_33,new THREE.Vector3(500, 0,-2000))   ///
panorama_ward_35.link(panorama_ward_34,new THREE.Vector3(-200, 0,-2000)) ///
panorama_ward_36.link(panorama_ward_35,new THREE.Vector3(2000, 0,500))   ///
panorama_ss7.link(panorama_ward_36,new THREE.Vector3(200, 0,2000)) ///
panorama_ward_37.link(panorama_ss7,new THREE.Vector3(-2000, 0,500))   ///
panorama_ward_38.link(panorama_ward_37,new THREE.Vector3(-500, 0,-2000))   ///
panorama_ward_39.link(panorama_ward_38,new THREE.Vector3(700, 0,-1500))   ///
panorama_ward_310.link(panorama_ward_39,new THREE.Vector3(500, 0,2000))  /// 
panorama_ward_311.link(panorama_ward_310,new THREE.Vector3(500, 0,2000))///
panorama_ward_312.link(panorama_ward_311,new THREE.Vector3(2000, 0,-500))  ///
panorama_sf7.link(panorama_ward_312,new THREE.Vector3(-500, 0,-2500))  //ward 312 to step 17




//dept of nss and scince
//go front
panorama_ward_32.link(nss1,new THREE.Vector3(2500, 0,-800)) /// 
nss1.link(nss2,new THREE.Vector3(2500, 0,800)) 
nss2.link(nss,new THREE.Vector3(3000, 0,-1000)) 
nss2.link(science,new THREE.Vector3(3000, 0,1500)) 

//go back
nss1.link(panorama_ward_32,new THREE.Vector3(-2000,0,-1500)) 
nss2.link(nss1,new THREE.Vector3(-2000, 0,-1000)) 
nss.link(nss2,new THREE.Vector3(-2000, 0,1500)) 
science.link(nss2,new THREE.Vector3(1000, 0,1000)) 



//dept of au and me
//go front
panorama_ward_311.link(aume1,new THREE.Vector3(2500, 0,-800)) /// 
aume1.link(aume2,new THREE.Vector3(-2500, 0,800)) ////
aume2.link(au,new THREE.Vector3(3000, 0,-1000)) ///
aume2.link(me,new THREE.Vector3(3000, 0,1500)) ///

//go back
aume1.link(panorama_ward_311,new THREE.Vector3(2500,0,-800)) ///
aume2.link(aume1,new THREE.Vector3(-2000, 0,1000)) ///
au.link(aume2,new THREE.Vector3(-2000, 0,1500)) ///
me.link(aume2,new THREE.Vector3(-1300, 0,-600)) ///


//go class room left 
panorama_ward_33.link(panorama_classleft12,new THREE.Vector3(1500, 0,-500))   // ward 33 to right class room
panorama_classleft12.link(panorama_ward_33,new THREE.Vector3(-2000, 0,-200))   // class to ward 13
panorama_classleft12.link(panorama_classleft22,new THREE.Vector3(2500, 0,-400)) // class room 12 to 22
panorama_classleft22.link(panorama_classleft12,new THREE.Vector3(-2500, 0,500)) // class room 22 to 12

//go class room right 
panorama_ward_34.link(panorama_classright12,new THREE.Vector3(-3000, 0,-500))    // ward 34 to left class room
panorama_classright12.link(panorama_ward_34,new THREE.Vector3(-2500, 0,1000))    // class to ward 34
panorama_classright12.link(panorama_classright22,new THREE.Vector3(2500, 0,-400)) // class room 12 to 22
panorama_classright22.link(panorama_classright12,new THREE.Vector3(2500, 0,-500)) // class room 22 to 12

//go class room left 
panorama_ward_35.link(panorama_classleft13,new THREE.Vector3(-1500, 0,500))   // ward 35 to right class room
panorama_classleft13.link(panorama_ward_35,new THREE.Vector3(-2000, 0,-200))   // class to ward 35
panorama_classleft13.link(panorama_classleft23,new THREE.Vector3(2500, 0,-400)) // class room 13 to 23
panorama_classleft23.link(panorama_classleft13,new THREE.Vector3(-2500, 0,500)) // class room 23 to 13

//go class room right 
panorama_ward_37.link(panorama_classright13,new THREE.Vector3(3000, 0,500))    // ward 37 to left class room
panorama_classright13.link(panorama_ward_37,new THREE.Vector3(-2500, 0,1000))    // class to ward 37
panorama_classright13.link(panorama_classright23,new THREE.Vector3(2500, 0,-400)) // class room 13 to 23
panorama_classright23.link(panorama_classright13,new THREE.Vector3(2500, 0,-500)) // class room 23 to 13

//go class room right 
panorama_ward_38.link(panorama_classright14,new THREE.Vector3(-3000, 0,-500))    // ward 37 to left class room
panorama_classright14.link(panorama_ward_38,new THREE.Vector3(-2500, 0,1000))    // class to ward 37
panorama_classright14.link(panorama_classright24,new THREE.Vector3(2500, 0,-400)) // class room 13 to 23
panorama_classright24.link(panorama_classright14,new THREE.Vector3(2500, 0,-500)) // class room 23 to 13

//go class room left 
panorama_ward_39.link(panorama_classleft14,new THREE.Vector3(-1500, 0,500))   // ward 38 to right class room
panorama_classleft14.link(panorama_ward_39,new THREE.Vector3(-2000, 0,-200))   // class to ward 38
panorama_classleft14.link(panorama_classleft24,new THREE.Vector3(2500, 0,-400)) // class room 14 to 24
panorama_classleft24.link(panorama_classleft14,new THREE.Vector3(-2500, 0,500)) // class room 24 to 14


//go class room left 
panorama_ward_310.link(panorama_classleft15,new THREE.Vector3(1500, 0,-500))   // ward 310 to right class room
panorama_classleft15.link(panorama_ward_310,new THREE.Vector3(-2000, 0,-200))   // class to ward 310
panorama_classleft15.link(panorama_classleft25,new THREE.Vector3(2500, 0,-400)) // class room 15 to 25
panorama_classleft25.link(panorama_classleft15,new THREE.Vector3(-2500, 0,500)) // class room 25 to 15


// Initializing the viewer
const viewer = new PANOLENS.Viewer({
  container: imageContainer,
    //autoRotate: true,
    //autoRotateSpeed: 0.8,
    ontrolBar: false,
});
viewer.add(panorama_arrow,panorama_outside1,panorama_outside2,panorama_outside3,panorama_outside3r,panorama_outside4,panorama_outside5,panorama_outside6,panorama_outside7,panorama_outside8);
viewer.add(panorama_outside9,panorama_outside9l,panorama_outside9r3,panorama_outside9r4,panorama_outside9r5,panorama_outside9r6,panorama_outside9r7,panorama_outside9r8,panorama_outside9r9);
viewer.add(panorama_ward_g1,panorama_ward_g2,panorama_ward_g3,panorama_ward_g4,panorama_ward_g5,panorama_ward_g6,panorama_ward_g7,panorama_ward_g8,panorama_ward_g9,panorama_ward_g10,panorama_ward_g11);
viewer.add(panorama_lb1,panorama_lb2,panorama_lb3,panorama_lb4,panorama_lb5,panorama_lb6);
viewer.add(panorama_br1,panorama_br2,panorama_br3,panorama_br4);
viewer.add(panorama_sf2,panorama_sf3,panorama_sf4,panorama_sf5,panorama_sf6,panorama_sf7);
viewer.add(panorama_ss2,panorama_ss3,panorama_ss4,panorama_ss5,panorama_ss6,panorama_ss7);
viewer.add(panorama_classars21,panorama_classars22,panorama_classars41,panorama_classars42,panorama_classars61,panorama_classars62);
viewer.add(panorama_classars221,panorama_classars211);
viewer.add(panorama_ch1,panorama_ch2,panorama_ch3,panorama_ch4);
viewer.add(panorama_ward_11,panorama_ward_12,panorama_ward_13,panorama_ward_14,panorama_ward_16,panorama_ward_17,panorama_ward_18,panorama_ward_19);
viewer.add(panorama_classleft1,panorama_classleft2,panorama_classright1,panorama_classright2);
viewer.add(panorama_ward_21,panorama_ward_22,panorama_ward_23,panorama_ward_24,panorama_ward_25,panorama_ward_27,panorama_ward_28,panorama_ward_29,panorama_ward_210,panorama_ward_211);
viewer.add(panorama_ward_32,panorama_ward_33,panorama_ward_34,panorama_ward_35,panorama_ward_36,panorama_ward_37,panorama_ward_38,panorama_ward_39,panorama_ward_310,panorama_ward_311,panorama_ward_312);
viewer.add(panorama_of1,panorama_of2,panorama_of3,panorama_of4,panorama_of5,panorama_of6,priciple);
viewer.add(ctlab1,ctlab2,ctlab3,ctlab4,ctlab5,ctlab6);
viewer.add(cadlab_1,cadlab_2,cadlab_3,cadlab_4);
viewer.add(eeect1,eeect2,ct,eee);
viewer.add(cear1,cear2,ce,ar);
viewer.add(nss,nss1,nss2,science);
viewer.add(au,me,aume1,aume2);
viewer.add(sleft1,sleft2,smartright1,smartright2,smartright11,smartright22,smartright111,smartright222,smartright1111,smartright2222);
viewer.add(dr1,dr2,dr3,dr4);
viewer.add(panorama_classleft12,panorama_classleft22,panorama_classleft13,panorama_classleft23,panorama_classleft14,panorama_classleft24,panorama_classleft15,panorama_classleft25,panorama_classright12,panorama_classright22,panorama_classright13,panorama_classright23,panorama_classright14,panorama_classright24)