# VIT Notes Hub

A student-led resource hub for VIT Bhopal students, bringing
subject-wise notes and useful academic links together in one place.

> **All your notes. One place.**

## About the Project

VIT Notes Hub helps students find study resources without having to
search through multiple places. Subjects are organised into a simple
library, with available resources linked from each subject card.

The project currently includes **14 subjects**. More subjects and
resources can be added as students contribute.

## Features

-   **Subject library:** Browse available subjects and open their linked
    study resources.
-   **Search:** Find subjects by subject name or course code.
-   **Important links:** Quick access to useful student tools and
    academic resources.
-   **Contributors page:** Recognises the website developer and student
    contributors, organised by branch.
-   **Dark mode:** Switch between light and dark themes; the selected
    theme is saved in the browser.
-   **Responsive layout:** Designed to work on desktop and mobile
    screens.

## Tech Stack

-   HTML
-   CSS
-   JavaScript

## Project Structure

``` text
VIT-Notes-Hub/
├── index.html
├── contributors.html
├── css/
│   └── style.css
└── js/
    ├── main.js
    └── subjects.js
```

## Run Locally

1.  Clone or download this repository.
2.  Keep the folder structure shown above.
3.  Open the project folder in Visual Studio Code.
4.  Run `index.html` using the **Live Server** extension, or open it
    directly in a browser.

The JavaScript files must remain in the `js` folder and the stylesheet
must remain in the `css` folder, matching the paths referenced by
`index.html`.

## Adding a Subject

Open `js/subjects.js` and add another object to the `subjects` array:

``` javascript
{
  name: "Subject Name",
  codes: ["COURSE_CODE"],
  icon: "＋",
  tone: "tone-blue",
  link: "https://your-study-resource-link"
}
```

Use an existing tone class such as `tone-blue`, `tone-green`,
`tone-sand`, or `tone-rose`. Replace the example name, course code, and
resource URL with the correct details.

## Adding a Contributor

Open `contributors.html`, find the relevant branch section, and add a
card inside that section's `.people-grid`:

``` html
<article class="person-card">
  <div class="person-avatar" aria-hidden="true">AS</div>

  <div class="person-info">
    <h3>Student Name</h3>
    <p>VIT Bhopal · Branch</p>
    <span class="contributor-role">Notes Contributor</span>

    <div class="person-links">
      <a href="mailto:student@example.com">✉ Email</a>
      <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  </div>
</article>
```

Replace the sample initials, name, branch, email, and profile link with
the contributor's details. Add contributors only with their permission
before publishing contact information.

## Important Links

The Important Links dropdown is in `index.html`. Update its `href`
values to the correct destinations. Replace any placeholder `href="#"`
values before publishing.

## Developer

**Vibhor Srivastava**\
Founder and Developer --- VIT Notes Hub

## Contributing

Students can help the project grow by sharing useful, relevant subject
notes and academic resources.

Before adding a resource:

1.  Confirm that it belongs to the correct subject and course code.
2.  Check that the link works and that students can access it.
3.  Make sure you have permission to share the material.
4.  Keep contributor details accurate and publish personal contact
    information only with consent.

## Notes

-   The number of subjects and available resources may change as the
    project grows.
-   Resource availability depends on the links provided for each
    subject.
-   This is a student-led resource project and is not an official VIT
    Bhopal website.

------------------------------------------------------------------------

Made for VIT Bhopal students ♥
