<img width="1920" height="975" alt="image" src="https://github.com/user-attachments/assets/aaed8916-796e-46f6-9567-916c4d51cea4" /># Nested Question Form Builder

A modern dynamic nested questionnaire builder developed using React.js.

This project was built as part of the Infollion Software Developer Intern Assessment. The application allows users to dynamically create parent and child questions recursively with drag-and-drop support, hierarchical numbering, live preview, and local storage persistence.

---

# Features

## Dynamic Question Creation

- Add unlimited parent questions dynamically
- Add nested child questions recursively
- Infinite recursive nesting support

---

## Question Types

Each question supports:

- Short Answer
- True / False

When a question is set to **True / False**, users can dynamically add child questions.

---

## Hierarchical Auto Numbering

Questions are automatically numbered based on nesting level.

Examples:

```text
Q1
Q1.1
Q1.1.1
Q2
Q2.1
```

---

## Drag and Drop Reordering

Implemented drag-and-drop reordering for parent questions using:

```text
@hello-pangea/dnd
```

Users can:
- reorder parent questions
- visually rearrange form structure
- dynamically update numbering

---

## Delete Functionality

- Delete parent questions
- Delete nested child questions
- Recursive child cleanup support

---

## Live Preview Panel

A real-time preview panel displays:
- nested hierarchy
- numbering structure
- recursive question tree

---

## Local Storage Persistence

The form automatically saves to browser local storage.

Users can:
- refresh the page
- close and reopen browser
- continue without losing progress

---

# Modern UI Features

- Glassmorphism design
- Responsive layout
- Dashboard-style interface
- Drag handles
- Smooth shadows and spacing
- Modern typography
- Sticky preview panel

---

# Tech Stack

| Technology | Usage |
|---|---|
| React.js | Frontend Framework |
| Context API | Global State Management |
| useReducer | Complex State Handling |
| Vite | Build Tool |
| Lucide React | Icons |
| NanoID | Unique IDs |
| @hello-pangea/dnd | Drag and Drop |
| CSS3 | Styling |

---

# Project Structure

```bash
src/
│
├── components/
│   ├── QuestionCard.jsx
│   ├── QuestionCard.css
│   ├── PreviewTree.jsx
│   ├── PreviewTree.css
│
├── context/
│   ├── QuestionContext.jsx
│
├── reducers/
│   ├── questionReducer.js
│
├── utils/
│   ├── reccrussivehelpers.js
│
├── App.jsx
├── App.css
├── index.css
├── main.jsx
```

---

# Screenshots

## Home Page

> Add screenshot here

```text
/screenshots/home.png
```

<img width="1920" height="958" alt="image" src="https://github.com/user-attachments/assets/40856ba4-ebfd-4baa-b770-f7f5fecfe31a" />


---

## Adding Questions

> Add screenshot here

```text
/screenshots/questions.png
```
<img width="1920" height="955" alt="image" src="https://github.com/user-attachments/assets/8a6c6d18-e673-4b2c-9ecf-a3a915b92c71" />


---

## Nested Child Questions

> Add screenshot here

```text
/screenshots/nested.png
```

<img width="1910" height="955" alt="image" src="https://github.com/user-attachments/assets/8fa60a8d-ee4a-49be-8bda-628d71da4d05" />




---

## Drag and Drop Reordering

> Add screenshot here

```text
/screenshots/dragdrop.png
```

<img width="1920" height="963" alt="image" src="https://github.com/user-attachments/assets/123e220a-1002-4209-8b08-150d95f75c98" />


---


# Installation

Clone the repository:

```bash
git clone https://github.com/sarthakgit123/Infillion_task.git
```

Move into project folder:

```bash
cd Infillion_task/nested-form-app
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# Assessment Features Covered

## Core Requirements

- Dynamic parent questions
- Nested child questions
- Recursive rendering
- Auto numbering
- Delete functionality
- Form preview
- Conditional child questions

---

## Bonus Features

- Local storage persistence
- Drag-and-drop reordering
- Modern responsive UI

---

# Future Improvements

Potential future upgrades:

- Dark mode
- Framer Motion animations
- Backend integration
- Export to JSON
- Form validation
- Nested drag-and-drop

---

# GitHub Repository

Repository Link:

https://github.com/sarthakgit123/Infillion_task

---

# Author

Sarthak Kumar Seth
