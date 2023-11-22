-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: capstone_gym
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_exercises`
--

DROP TABLE IF EXISTS `tbl_exercises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_exercises` (
  `exerciseid` int(11) NOT NULL AUTO_INCREMENT,
  `exercisename` varchar(100) DEFAULT NULL,
  `exercisetype` varchar(45) DEFAULT NULL,
  `instructions` varchar(5000) DEFAULT NULL,
  `equipments` varchar(100) DEFAULT NULL,
  `videodemo` varchar(100) DEFAULT NULL,
  `difficulty` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`exerciseid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_exercises`
--

LOCK TABLES `tbl_exercises` WRITE;
/*!40000 ALTER TABLE `tbl_exercises` DISABLE KEYS */;
INSERT INTO `tbl_exercises` VALUES (1,'Mindful Breathing Exercise','Cognitive','Find a quiet place to sit comfortably. Close your eyes and focus your attention on your breath. Inhale deeply through your nose, hold for a moment, and exhale slowly through your mouth. Pay attention to the sensation of your breath and gently redirect your focus if your mind starts to wander','None','None','Beginner'),(2,'Gratitude Journaling','Cognitive','Set aside a few minutes each day to jot down three things you are grateful for. Reflect on the positive aspects of your life, no matter how small. This exercise helps shift focus from challenges to positive experiences.',' Paper and pen or a digital journaling app.','None','Beginner'),(3,'Visualization Meditation','Cognitive','Find a quiet space to sit comfortably. Close your eyes and take a few deep breaths. Visualize a peaceful and calming scene, such as a beach, forest, or meadow. Engage your senses by imagining the sights, sounds, and smells of this place. Focus on the details and immerse yourself in the serene environment. Practice this visualization for 10-15 minutes, gradually extending the duration as you feel more at ease.','None','None','Intermediate'),(4,'Mindful Body Scan Meditation','Cognitive',' Lie down in a comfortable position. Close your eyes and bring your attention to different parts of your body, starting from your toes and moving up to your head. Notice sensations without judgment, allowing any tension or discomfort to dissipate.','None','None','Advanced'),(5,'Mindful Walk','Physical','Begin by finding a peaceful outdoor space. Take slow, deliberate steps, paying attention to each movement. Focus on your breath and the sensations in your body as you walk. Let go of distractions and connect with the present moment.','Comfortable shoes.','None','Beginner'),(9,'Creative Expression Art','Cognitive','Engage in a creative art activity, whether it\'s drawing, painting, or crafting. Express your emotions through colors, shapes, and textures. This allows for a release of emotions and promotes self-expression.','Art supplies like paper, colors, and brushes.','None','Intermediate'),(10,'Positive Affirmations Exercise','Cognitive','Create a list of positive affirmations and repeat them to yourself daily. Affirmations can help reframe negative thoughts and promote a positive mindset.','Notebook or digital device.','None','Beginner'),(11,'Laughter Yoga','Cognitive','Find a comfy, quiet spot and do some light stretches to loosen up. Now, start clapping your hands and say \"Ho Ho Ha Ha Ha\" out loud. It might feel a bit silly, but go with it! Imagine you\'re cheering for your own joy team and let the laughter flow. Embrace the giggles and enjoy the positive vibes! ','None','None','Intermediate'),(12,'Speed Reading Challenge','Cognitive','Select a book or an article and set a timer. Read as much as you can in the given time frame while maintaining comprehension. Over time, challenge yourself with shorter durations.','Reading material, timer','None','Advanced'),(13,'Mindful Coding Session','Cognitive',' Find a quiet space, set up your coding environment, and focus on a coding challenge or project. Practice mindfulness by staying fully present in the coding process, paying attention to each line of code, and solving problems with a clear and focused mind. This exercise not only enhances your coding abilities but also cultivates mindfulness, fostering a harmonious connection between your mind and the task at hand.','Laptop or Computer','None','Advanced'),(14,'Gentle Stretching Routine','Physical',': Find a quiet area, and start with gentle stretches to release tension. Focus on your breathing and move slowly. Stretch your arms, legs, and torso, paying attention to any tight areas. This routine promotes relaxation and flexibility.','Yoga mat','None','Beginner'),(15,'Deep Breathing Exercise','Physical',' Sit or lie down comfortably. Inhale deeply through your nose, allowing your lungs to fill with air. Exhale slowly through your mouth. Focus on each breath, and let go of any stress. This exercise helps calm the nervous system.','None','None','Beginner'),(16,'Nature Meditation','Physical','Find a natural setting. Sit or lie down, close your eyes, and focus on the sounds of nature. Connect with the environment, and let go of thoughts. This meditation promotes a sense of peace and connection.','None','None','Intermediate'),(17,'Dance Therapy','Physical',' Put on your favorite music and dance freely. Allow your body to move without judgment. Express your emotions through dance, focusing on joy and release.','Music Player','None','Intermediate'),(18,'Advanced Breathwork: Box Breathing','Physical','Sit comfortably and practice box breathing – inhale for a count of four, hold for four, exhale for four, and pause for four. Gradually increase the duration. This advanced breathwork enhances concentration and relaxation.','None','None','Advanced'),(19,'Aquatic Meditation - Tranquil Pool Session','Physical','Practice meditation while floating in a calm pool. Allow the water to support you as you focus on deep, rhythmic breathing. This unique workout combines the soothing properties of water with meditation.','Access to a pool','None','Advanced'),(20,'Photography Exploration','Physical','Use your camera or smartphone to capture meaningful moments. Pay attention to details, colors, and textures around you. This exercise encourages a deeper connection with your environment.','Camera or Smartphone','None','Intermediate'),(21,'Indoor Plant Arrangement','Physical',' Create a small indoor plant arrangement using potted plants available at home. Rearrange them in a way that brings joy and a sense of aesthetics to your living space. This activity not only enhances the beauty of your surroundings but also promotes a connection with nature, contributing to emotional well-being.','Potted Plants','None','Advanced');
/*!40000 ALTER TABLE `tbl_exercises` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-13 13:13:36
