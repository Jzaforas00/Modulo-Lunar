# Modulo-Lunar 🌕🚀

## Project Description

The goal is to develop a responsive web platform for managing minerals collected on the lunar surface by an astronaut. The application allows users to register, validate, and display information about different types of minerals according to defined scientific criteria.

---

## Main functionality

The application allows the entry of mineral data with the following characteristics:

- Mineral identifier  
- Name with a specific format: **LLDDDDLL**  
- Group / Origin:
  - Igneous
  - Metamorphic
  - Sedimentary  
- Hardness (Mohs scale: 1 to 10)  
- Grain size:
  - Very coarse (> 30 mm)
  - Coarse (5 to 30 mm)
  - Medium (2 to 5 mm)
  - Fine (< 2 mm)
- Classification:
  - Construction rocks
  - Ornamental rocks
  - Tools-use rocks
  - Crushed stones
- Crystal size (0 to 10)  
- Formation temperature (-100 to 100 K)  
- Structure (free text)  
- Grain shape (free text)  
- Texture:
  - Glassy
  - Aphanitic
  - Phaneritic  

---

## Data entry systems

The application provides two input modes:

- **Extended mode**: with labels and visible text fields  
- **Reduced mode**: using placeholders in inputs  

---

## Mineral validation

Three criteria are used to determine whether a mineral is valid:

### Igneous
- Group: Igneous  
- Grain: very coarse  

### Metamorphic
- Group: Metamorphic  
- Grain: medium or fine  
- Texture: glassy  

### Sedimentary
- Group: Sedimentary  
- Texture: phaneritic  

---

## Validation result

- ✅ If the mineral meets the criteria → a happy face is displayed 🙂  
- ❌ If it does not meet the criteria → an angry face is displayed ☹️  

---

## Output formats

Mineral information can be displayed in two formats:

### 🇺🇸 American format
- Text in English  
- Temperature in Fahrenheit  

### 🇪🇺 European format
- Text in Spanish  
- Temperature in Celsius  

---

## Technologies used

- Angular  
- TypeScript  
- HTML5  
- CSS3  
- Responsive design  

---

## Execution

In the terminal:

```bash
ng serve
