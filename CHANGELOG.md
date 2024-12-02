
# Changelog

## [1.1.0] - 2024-11-30
### Feat
- Added `.gitignore` file to ignore unnecessary files during development.
- Added `LICENSE.md` file to define the project's terms of use.

### Chore
- Applied end-of-line normalization and added `.gitattributes` to improve file consistency.

### Docs
- Updated `README.md` with new information.

---

## [1.0.3] - 2024-10-23
### Fix
- Removed redundancies and unnecessary text from the code and documentation.

---

## [1.0.2] - 2024-10-10
### Feat
- Renamed `sixpack.html` to `homepage.html` for better clarity.
- Added the main project structure (`gymapp_master`).

---

## [1.0.1] - 2024-10-06
### Feat
- Added new Flask routes:
  - `register`
  - `profile`
  - `logout`
  - `homepage`
  - `yourtrainingsessions`
  - Days of the week (e.g., `Monday`, `Tuesday`, etc.).
- Improved file management:
  - Moved files to better-organized folders.
  - Added a disclaimer to the project.

---

## [1.0.0] - 2024-09-30
### Feat
- Implemented dynamic exercise table management, including duplication, session saving, and reset functionality.
- Added user authentication:
  - Automatic validation using `user_id` from `localStorage`.
- UI improvements:
  - New navigation bar.
  - Enhanced footer section.
  - Updated global styles for better readability.

### Fix
- Improved page responsiveness.

---

## [0.9.5] - 2024-09-29
### Feat
- Updated workout pages (`Monday`, `Tuesday`, etc.):
  - Improved table structure.
  - Fixed button IDs.
  - Enhanced links and added a hidden template for duplication.

---

## [0.9.0] - 2024-09-28
### Feat
- Added support for user registration via the `register.html` page.
- Added `profile.html` for user profiles.
- Improved static link management:
  - Replaced static links with `Flask url_for`.
  - Changed `User ID` to `Email` and added a `Password` field.
- Added error message display using Flask variables.

---

## [0.1.0] - 2024-09-12
### Initial Commit
- Uploaded the base project.

---

## Versioning
This project follows **Semantic Versioning (SemVer)**:
- **MAJOR**: Incompatible changes that break backward compatibility.
- **MINOR**: New backward-compatible features.
- **PATCH**: Backward-compatible bug fixes.

---
