#script creacion base de datos en un query

DROP DATABASE IF EXISTS database_winestore;

CREATE DATABASE IF NOT EXISTS database_winestore;

#selecciono base de datos
USE database_winestore;

#creo tabla productos

DROP TABLE IF EXISTS productos;

 CREATE TABLE productos(
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NULL,
  color VARCHAR(45) NULL,
  categoria VARCHAR(45) NULL,
  variedad VARCHAR(45) NULL,
  precio MEDIUMINT(255) NULL,
  descuento MEDIUMINT(100) NULL,
  cantidad MEDIUMINT(255) NULL,
  descripcionCorta MEDIUMTEXT NULL,
  crianza MEDIUMTEXT NULL,
  descripcionLarga LONGTEXT NULL,
  caracteristica VARCHAR(45) NULL,
  imagen VARCHAR(100) NULL,
  PRIMARY KEY (id)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8MB4;


LOCK TABLES productos WRITE;
INSERT INTO productos VALUES

 (1,'DV CATENA CABERNET MALBEC','tinto',' ','Blend',896,10,NULL,'Cabernet Sauvignon: La Pirámide (Agrelo, Luján de Cuyo); Malbec: Angélica (Lunlunta, Maipú). Provincia de Mendoza, Argentina. 50% Cabernet Sauvignon | 50% Malbec',' ','DV Catena Cabernet Sauvignon-Malbec es un vino elegante y complejo, de color rojo rubi con reflejos violetas. A la nariz, intenso y concentrado, presenta notas de especias aportadas por el Cabernet Sauvignon del viñedo La Pirámide, y notas de moras maduras y ciruelas, características del Malbec del viñedo Angélica, acompañadas por vainilla, tabaco y licor aportadas por la crianza en roble. En boca, de impacto dulce y gran complejidad, con taninos integrados y redondos, de final largo y persistente.',' ','id-1.jpg')
,(2,'EL ENEMIGO MALBEC','tinto',' ','Malbec',1300,10,NULL,' De Gualtallary. Provincia de Mendoza, Argentina. 89% Malbec | 11% Petit Verdot','14 meses de crianza en barricas de roble francés.','En vista un rojo rubí de alta intensidad y destellos violáceos. En nariz mucha madera. Tardó en abrirse en copa y luego del agite aparece fruta roja madura. En boca, un ataque brutal al paladar. Algo dulce y carnoso de muy buen equilibrio y acidez con taninos muy marcados.',' ','id-2.jpg ')
 ,(3,'NICASIA VINEYARDS RED BLEND CABERNET FRANC','tinto',' ','Cabernet Franc',644,15,NULL,'Fermentación: Max Temp Ferm. 27º, durante 12 días. 18 días maceración pelicular. Fermentación maloláctica completa. 90% Cabernet Franc | 7% Merlot | 3% Petit Verdo','12 meses en roble francés, 30% nuevo.','Se perciben en este vino elegantes notas herbáceas y de anís aportadas por el Cabernet Franc, junto a vivaces frutos negros y especias conferidos por el Merlot y el Petit Verdot. El paso por roble incrementa aún más la complejidad de este vino, otorgando delicados toques ahumados y de tostado.',' ','id-3.jpg ')
 ,(4,'ANTIGAL 1 MALBEC','tinto',' ','Malbec',900,15,NULL,'De provincia de Mendoza, Argentina. 100% Malbec',' ','Color: Color rojo muy intenso con destellos violáceos típicos de la variedad. Nariz: En nariz posee una intensidad de fruta muy importante acompañada de notas de roble dado su paso por barricas nuevas de roble francés (75%) y americano (25%) durante 13 meses. Boca: En boca es suave y concentrado, características típicas de un Malbec Argentino. Equilibrado, madera suave y elegante.',' ','id-4.jpg')
 ,(5,'CABRINI LICOROSO DE MISA','tinto',' ','Blend',329,5,NULL,'De Luján de Cuyo y Tupungato. Provincia de Mendoza, Argentina. Malbec | Tempranillo | Bonarda | Lambrusco ',' ','Vista: Rosado, color rojizo cobrizo con destellos dorados. Se presenta con aspecto untuoso, con lágrima lenta y gruesa. Nariz: Presenta aromas complejos de fondo, notas de frutas maduras como guindas, cerezas y un aroma particular que recuerda al dulce de membrillo. Luego encontramos un dejo de los aromas aportados por la madera. Boca: Suave y delicado, dulce equilibrado con ligera acidez, sabores maduros y persistentes.',' ','id-5.jpg ')
 ,(6,'FAMIGLIA BIANCHI MALBEC ORGÁNICO ','tinto',' ','Malbec',583,15,NULL,'Famiglia Bianchi Malbec Orgánico se encuentra elaborado exclusivamente con uvas orgánicas reflejando el respeto de Bodegas Bianchi por la naturaleza. La línea Famiglia, reconocida internacionalmente, nos acerca una gama de vinos complejos e intensos que logran expresar de manera inigualable, las particularidades propias de los viñedos de San Rafael, Mendoza.','10 meses en barricas de roble francés. ','De color profundo de tintes violáceos. Presenta aromas frutados que se mezclan con toques especiados, resaltando chocolate, café tostado y vainilla debido a su paso por barricas de roble francés y americano, logrando exaltar equilibrio y elegancia. De buena presencia en boca, redondo con taninos dulces y maduros.','Recomendado ','id-6.jpg ')
 ,(7,'Red Blend','tinto',' ','Malbec',780,10,NULL,'Del Valle de Uco, Mendoza, Cosecha manual, 11% Merlot, 4% Cabernet Sauvignon, ','tiempo en barrica 10 meses, tiempo en botella 8 meses','Un blend que se caracteriza por tener un color intenso, profundo, con reflejos violáceos, vivos e impactantes. Sin duda característicos de su terroir. En nariz es un verdadera canasta de frutas entremezcladas con algunas especias, muy bien amalgamadas con las notas de vainilla aportadas por su crianza en roble. Un vino complejo, de gran cuerpo y estructura con un centro de boca exquisito, manifestando su concentración, cuerpo y volumen.','Recomendado ','id-7.jpg ')
 ,(8,'Phebuc Malbec','tinto',' ','Malbec',318,5,NULL,'De Luján de Cuyo. Provincia de Mendoza, Argentina. 100% Malbec',' ','Cosecha: Manual. Mesa de selección de racimos. Fermentación: con levaduras seleccionadas y temperatura controlada a 25 °C. Se realizan cuatro remontajes diarios y maceración de 20 días. Fue estacionado en tanques de acero inoxidable durante 10 meses.',' ','id-8.jpg ')
 ,(9,'EL ENEMIGO CHARDONNAY','blanco',' ','Chardonnay',1100,15,NULL,'DeGualtallary. Provincia de Mendoza, Argentina. Fermentado en barricas de segundo y tercer uso. Trabajo sobre borras para otorgar cremosidad.',' ','Fresco, con aporte del calcáreo y la tiza del suelo de Gualtallary, el resultado es un Chardonnay chispeante, aromático y notablemente aterciopelado en boca.','Recomendado','id-9.jpg ')
 ,(10,'DV CATENA CHARDONNAY CHARDONNAY','blanco',' ','100 % Chardonay',896,10,NULL,'DeDomingo, Villa Bastías, Tupungato; La Pirámide, Agrelo, Luján de Cuyo. Provincia de Mendoza, Argentina. Fermentación: En tanques de acero inoxidable levaduras seleccionadas, máx. temp. ferm. 22° C, durante 23 días, 50% con fermentación maloláctica.','Crianza sobre borras durante 6 meses en barriles de roble francés de 3 usos y en tanque de acero inoxidable, con removido de borras una vez por semana.','D.V. Catena Chardonnay - Chardonnay refleja características propias de las zonas que le dan origen. Con días soleados y cálidos, y noches frescas, las uvas Chardonnay adquieren una madurez plena y bien balanceada. Su color es amarillo oro con reflejos verdosos claros. De gran complejidad y elegancia, en nariz se presenta concentrado e intenso: el viñedo La Pirámide aporta aromas de frutas tropicales maduras, ananá y durazno blanco. El viñedo Domingo confiere aromas cítricos y minerales. En boca, de impacto dulce y untuoso, se perciben sabores a frutas maduras y una acidez vivaz que le brinda un fresco y prolongado final.',' ','id-10.jpg ')
 ,(11,'SAINT FELICIEN CHARDONNAY ROBLE','blanco',' ','Chardonnay',770,10,NULL,'De Agrelo, Luján de Cuyo. Provincia de Mendoza, Argentina. Fermentación: En barricas de roble Francés con levaduras seleccionadas, max temp. ferm. 22° C, durante 23 días. 100% Fermentación Maloláctica. ','Crianza 12 meses en 100% roble Francés 70% nuevo y 30% usado de 2 y 3 usos. ','Saint Felicien refleja características propias de la zona que le da origen. Con días soleados y cálidos, y noches frescas, las uvas de Chardonnay adquieren una madurez plena y bien balanceada. Su color es amarillo intenso con reflejos verdosos claros. De gran complejidad y elegancia, en nariz se presenta concentrado e intenso, con aromas de frutas tropicales maduras, peras, durazno blanco y vainilla. En boca, de impacto dulce y untuoso , muy bien balanceado por la acidez, con sabores a frutas maduras y notas ligeras de vainilla y tostado, que le brindan un excelente y prolongado final.',' ','id-11.jpg ')
 ,(12,'LAGRIMILLA BLEND','blanco',' ','Blend',264,5,NULL,'Maceración fermentativa (tradicional) hasta 4 grados Beaumé. Descube. Fermentación lenta hasta rastros de azúcar. Trasiegos. Edulcoración y alcoholización. Estabilización (frío -4 grados, durante 72hs). 60% Moscatel de Alejandría | 40% Torrontés Riojano',' ','Color amarillo dorado brillante, con tonos ámbar, aroma avainillado, con matices de frutos secos como: pasas de uva, almendras y nueces, sobre un atractivo fondo dulce. Apto para la santa misa.',' ','id-12.jpg ');


UNLOCK TABLES;

DROP TABLE IF EXISTS  usuarios;

CREATE TABLE usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NULL,
  apellido VARCHAR(100) NULL,
  email VARCHAR(100) NULL,
  contrasenia LONGTEXT NULL,
  categoria VARCHAR(45) NULL,
  imagen VARCHAR(100) NULL,
  PRIMARY KEY (`id`)
  )ENGINE=InnoDB DEFAULT CHARSET=utf8MB4;



  LOCK TABLES usuarios WRITE;

INSERT INTO usuarios VALUES (1,'cliente','cliente','cliente@gmail.com','$2b$10$subbpSpfV5JTGjn0ViXG/.umREHpxxle37Z50kFuxb3Oc.vIMauKu','cliente','avatar-1595105999008.jpg');


UNLOCK TABLES;

DROP TABLE IF EXISTS carritos;

CREATE TABLE carritos (
  id INT NOT NULL AUTO_INCREMENT,
   id_usuario INT NULL,
  id_producto INT NULL,
  nombre_vino VARCHAR(100) NULL,
  precio_venta MEDIUMINT(255) NULL,
  PRIMARY KEY (id),
  INDEX id_usuario_idx ( id_usuario ASC) VISIBLE,
  INDEX id_producto_idx (id_producto ASC) VISIBLE,
  CONSTRAINT id_usuario
    FOREIGN KEY ( id_usuario)
    REFERENCES database_winestore.usuarios (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT id_producto 
    FOREIGN KEY (id_producto)
    REFERENCES database_winestore.productos (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
    )ENGINE=InnoDB DEFAULT CHARSET=utf8MB4


