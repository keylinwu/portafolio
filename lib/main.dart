import 'package:flutter/material.dart';
import 'package:portafolio/screens/about/about_page.dart';
import 'package:portafolio/screens/building_apps/building_apps_page.dart';
import 'package:portafolio/screens/home/home_page.dart';
import 'package:portafolio/screens/menu/menu_app_bar.dart';
import 'package:portafolio/screens/projects/projects_page.dart';
import 'package:portafolio/ui/theme/theme.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Keylin Wu\'s Portfolio',
      theme: PortfolioTheme.lightTheme,
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final pages = [
    const HomePage(),
    const AboutPage(),
    const BuildingAppsPage(),
    const ProjectsPage(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const MenuAppBar(),
      body: ListView(
        padding: EdgeInsets.zero,
        children: pages,
      ),
    );
  }
}
