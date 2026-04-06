enum MenuSection {
  home,
  about,
  skills,
  projects,
  experience,
  resume,
  contact,
}

class _Strings {
  _Strings._();

  static const home = 'Home';
  static const about = 'About';
  static const skills = 'Skills';
  static const experience = 'Experience';
  static const projects = 'Projects';
  static const resume = 'Resume';
  static const contact = 'Contact';
}

extension MenuSectionExtension on MenuSection {
  String get title => switch (this) {
        MenuSection.home => _Strings.home,
        MenuSection.about => _Strings.about,
        MenuSection.experience => _Strings.experience,
        MenuSection.skills => _Strings.skills,
        MenuSection.projects => _Strings.projects,
        MenuSection.resume => _Strings.resume,
        MenuSection.contact => _Strings.contact,
      };
}
