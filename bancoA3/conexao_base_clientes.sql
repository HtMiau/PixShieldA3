-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: conexao_base
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `data_nascimento` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `senha` varchar(50) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `telefone` (`telefone`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Ana Clara Moreira','301.293.417-02','1992-03-11','anac.moreira@gmail.com','(11) 99822-1344','C1ara!2024'),(2,'Bruno Henrique Silva','487.320.005-44','1989-07-09','bhsilva@yahoo.com','(21) 98561-2210','BrH2024*'),(3,'Camila dos Santos Rocha','654.882.139-65','1995-10-22','camila.rocha@outlook.com','(31) 98472-1209','Santos@95'),(4,'Daniel Oliveira Fernandes','371.003.411-90','1990-12-15','dfernandes@gmail.com','(51) 99618-0908','Dofe1234!'),(5,'Érica Lima Castro','176.903.228-11','1985-01-30','erica.lcastro@live.com','(61) 99128-7711','Lima2024#'),(6,'Felipe Matos Almeida','892.117.499-06','1993-06-17','felipe.almeida@hotmail.com','(71) 98234-1212','Fma@1706'),(7,'Gabriela Torres Nunes','126.555.384-25','1996-09-19','gt.nunes@gmail.com','(41) 99312-7713','G@bTor96'),(8,'Henrique Barros Lima','309.881.613-07','1991-02-25','henrique.lima@uol.com.br','(62) 99881-6678','HenL!912'),(9,'Ingrid Martins Souza','847.116.309-48','1998-11-11','ingrid.souza@hotmail.com','(91) 98400-3344','IMS_1998'),(10,'João Pedro Ferreira','421.891.718-93','1987-08-05','jpf@gmail.com','(81) 98733-8899','Joao#8705'),(11,'Karina Oliveira Duarte','209.000.134-76','1994-05-30','karina.duarte@gmail.com','(85) 99772-0098','KaDu@1994'),(12,'Lucas Vinícius Costa','671.998.441-15','1992-04-08','lucascosta@live.com','(82) 98762-3488','LVC@Apr92'),(13,'Mariana Ribeiro Vasconcelos','223.998.776-38','1990-10-12','mariana.rv@hotmail.com','(67) 99644-6677','Mri@10-90'),(14,'Nicolas Cardoso Almeida','531.102.901-80','1997-03-14','ncalmeida@gmail.com','(27) 99901-1221','Ncal!314'),(15,'Olivia Batista Souza','338.009.832-23','1988-12-02','olivia.souza@outlook.com','(95) 98122-5432','O_Bat88'),(16,'Pedro Henrique Lima','102.994.744-59','1996-01-18','pedrolima@yahoo.com','(84) 98700-0001','PeHL@9601'),(17,'Queila Santos Braga','991.318.624-07','1995-07-25','queila.b@gmail.com','(31) 99888-6666','QS@jul25'),(18,'Rafael Cunha Menezes','762.117.882-41','1991-06-30','rafaelmenezes@live.com','(63) 98541-3299','RCM@91!'),(19,'Sara Nogueira Leal','489.006.005-09','1989-09-01','sara.leal@uol.com.br','(98) 98333-1233','Sara*1989'),(20,'Tiago Henrique Barbosa','804.229.110-93','1993-02-14','thi.barbosa@gmail.com','(75) 99221-9988','TBar14@93'),(21,'Ursula Mendes Brito','318.440.600-08','1987-11-09','ursula.brito@hotmail.com','(96) 98121-3388','Umb@8709'),(22,'Vitor Emanuel Ribeiro','557.008.118-22','1994-08-16','vitor.ribeiro@gmail.com','(83) 98499-2200','VER*94Ag'),(23,'Wagner Rocha Pires','682.331.445-99','1990-03-03','wagner.pires@outlook.com','(79) 98671-3322','WRP_0303'),(24,'Xênia Dias Moreira','909.772.110-17','1986-04-19','xenia.moreira@gmail.com','(11) 98110-7722','XDmo@8619'),(25,'Yasmim Lacerda Tavares','437.118.390-46','1997-12-30','yasmim.lacerda@yahoo.com.br','(19) 99781-6699','YLT@1230'),(26,'Zeca Fonseca de Moura','663.223.100-78','1992-06-06','zeca.moura@gmail.com','(13) 98234-3301','Zec@Jun92'),(27,'Amanda Teixeira Carvalho','778.198.325-10','1993-07-21','amanda.carvalho@gmail.com','(17) 98455-8899','ATC!2107'),(28,'Breno Martins Oliveira','391.102.449-32','1988-09-11','breno.oliveira@outlook.com','(22) 98877-1011','Bmo_1988'),(29,'Carla Regina Souza','511.204.887-61','1990-01-29','carla.souza@yahoo.com','(43) 99122-4477','CRegina@90'),(30,'Diego Alves Santana','668.901.322-44','1986-05-16','diego.santana@hotmail.com','(34) 98790-6655','DAlves#0516'),(31,'Elisa Gonçalves Prado','254.110.773-90','1995-02-07','elisa.gprado@gmail.com','(27) 99982-5588','EGP@07Fev'),(32,'Fábio Rocha Martins','743.559.008-01','1989-08-04','fabio.rmartins@uol.com.br','(46) 98333-2112','FrmAug#89'),(33,'Giovana Ribeiro Campos','310.701.661-19','1994-10-01','giovana.campos@gmail.com','(86) 99450-7788','GRC!01Out'),(34,'Hugo Daniel Costa','135.882.998-62','1987-03-12','hugodc@hotmail.com','(92) 98844-9901','HDC_Mar87'),(35,'Isabella Lopes Almeida','924.303.116-04','1992-06-25','isalmeida@gmail.com','(41) 98771-2355','Isa*2506'),(36,'Jorge Luiz Ferreira','841.122.508-27','1985-12-19','jorge.ferreira@live.com','(12) 99880-5566','JLF#1985'),(37,'Kelly Moura Andrade','231.907.774-30','1991-11-14','kelly.andrade@hotmail.com','(75) 99934-6611','KAnd_1114'),(38,'Leandro Pires Matos','660.443.213-55','1990-03-28','leandro.matos@gmail.com','(31) 98455-9912','LPM@0328'),(39,'Marcela Duarte Lopes','572.331.114-06','1996-09-07','marcela.lopes@yahoo.com','(51) 99780-3344','MDL_Sep96'),(40,'Nelson Carvalho Junior','388.902.710-80','1988-04-04','nelson.junior@outlook.com','(19) 99661-7788','NCJ0404!'),(41,'Otávio Bastos Rezende','117.409.233-92','1993-12-20','otavio.rezende@gmail.com','(47) 98312-4432','OBRez@93'),(42,'Priscila da Luz Ferreira','790.221.544-10','1991-01-17','priscila.luz@gmail.com','(21) 99571-8822','PLF_0117'),(43,'Rafael Tavares Brito','213.993.617-74','1992-02-22','rafaeltbrito@hotmail.com','(44) 98661-5522','RTB_2222'),(44,'Sílvia Machado Costa','330.883.128-03','1990-08-13','silvia.costa@gmail.com','(16) 99880-1123','SMC_Ago90'),(45,'Tomás Vieira Barreto','580.119.906-58','1987-06-29','tomas.barreto@uol.com.br','(32) 99212-6670','TVB@Jun87'),(46,'Úrsula Carvalho Mendes','901.772.044-41','1989-05-01','ursula.mendes@outlook.com','(61) 98533-7090','UCM_0105'),(47,'Vinícius Lopes da Rocha','110.881.776-09','1995-10-10','vinicius.rocha@gmail.com','(91) 98880-3300','VLR_Oct95'),(48,'William Fernandes Souza','787.004.223-35','1986-12-03','william.souza@hotmail.com','(65) 99441-2200','WFS#03Dez'),(49,'Xisto Gomes de Andrade','334.117.788-52','1984-07-27','xisto.andrade@gmail.com','(93) 98191-1233','XGA_2707'),(50,'Yara Souza Queiroz','129.228.905-67','1997-11-05','yara.queiroz@yahoo.com','(83) 99661-8820','YSQ@1105'),(51,'Zuleica Martins Vasques','700.102.944-89','1993-09-18','zuleica.vasques@gmail.com','(14) 99977-4411','ZMV_1809');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-04 17:08:25
