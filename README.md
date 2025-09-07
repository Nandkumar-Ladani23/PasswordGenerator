
# 🔐 Advanced Password Generator




**A modern, secure, and feature-rich password generator with glassmorphism design**

[🚀 Live Demo](https://nandkumar-ladani23.github.io/PasswordGenerator/) • [📖 Documentation](#-features) • [🐛 Report Bug](https://github.com/Nandkumar-Ladani23/PasswordGenerator/issues) • [✨ Request Feature](https://github.com/Nandkumar-Ladani23/PasswordGenerator/issues)


---

## 🌟 Features
### 🎯 **Core Features**
- ✅ **Customizable Length** (4-50 characters)
- ✅ **Multiple Character Types**
  - Uppercase Letters (A-Z)
  - Lowercase Letters (a-z)
  - Numbers (0-9)
  - Special Symbols (!@#$%^&*)
- ✅ **Real-time Password Strength Analysis**
- ✅ **One-Click Copy to Clipboard**
- ✅ **Instant Password Regeneration**



### 🎨 **Design Features**
- ✅ **Modern Glassmorphism UI**
- ✅ **Responsive Design** (Mobile & Desktop)
- ✅ **Smooth Animations & Transitions**
- ✅ **Interactive Hover Effects**
- ✅ **Dark Theme with Accent Colors**
- ✅ **Accessibility Optimized**


---

## 🎯 Password Strength Indicator


| Strength | Color | Width | Description |
|----------|-------|--------|-------------|
| 🔴 **Weak** | `#f44336` | 25% | Basic password with minimal complexity |
| 🟠 **Fair** | `#ff9800` | 50% | Moderate complexity with mixed characters |
| 🟡 **Good** | `#ffeb3b` | 75% | Strong password with good character variety |
| 🟢 **Strong** | `#4caf50` | 100% | Excellent security with all character types |



---

## 🚀 Live Demo 

### 💻 Desktop View
[🚀 Live Demo](https://nandkumar-ladani23.github.io/PasswordGenerator/)



---

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


### 📁 Project Structure
```
PasswordGenerator/
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # Glassmorphism styling & animations
├── ⚡ script.js           # Password generation logic
└── 📖 README.md           # Project documentation
```

---

## 🚀 Quick Start

### 📋 Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### 💾 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nandkumar-Ladani23/PasswordGenerator.git
   ```

2. **Navigate to project directory**
   ```bash
   cd PasswordGenerator
   ```

3. **Open in browser**
   ```bash
   # Option 1: Double-click index.html
   # Option 2: Use live server extension in VS Code
   # Option 3: Python simple server
   python -m http.server 8000
   ```

4. **Start generating secure passwords!** 🎉

---

## 🎮 Usage Guide


### 🔧 **Step-by-Step Instructions**


| Step | Action | Description |
|------|--------|-------------|
| **1** | 📏 **Adjust Length** | Use the slider to set password length (4-50 characters) |
| **2** | ☑️ **Select Character Types** | Check/uncheck boxes for uppercase, lowercase, numbers, symbols |
| **3** | 🎲 **Generate Password** | Click "Generate" button to create a new password |
| **4** | 📊 **Check Strength** | View the colored strength indicator and rating |
| **5** | 📋 **Copy Password** | Click "Copy" to save password to clipboard |
| **6** | 🔄 **Regenerate** | Click "Regenerate" for a new password with same settings |

---

## ⚙️ Customization Options

```css
:root {
    --backgroundColor: #0a0a0a;    /* Main background */
    --primaryColor: #4caf50;       /* Green accent */
    --secondaryColor: #2196f3;     /* Blue accent */
    --warningColor: #ff9800;       /* Orange for warnings */
    --errorColor: #f44336;         /* Red for errors */
}
```

```javascript
// Modify character sets in script.js
const characters = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+[]{}|;:,.<>?/~`-='
};

// Adjust default settings
const options = {
    length: 16,        // Default length
    uppercase: true,   // Include uppercase
    lowercase: true,   // Include lowercase
    numbers: false,    // Include numbers
    symbols: false     // Include symbols
};
```


---

## 🔒 Security Features

### 🛡️ **Security Highlights**


- **🔐 Client-Side Generation**: All passwords generated locally in your browser
- **🚫 No Data Collection**: Zero tracking, no passwords stored or transmitted
- **🎲 Cryptographically Secure**: Uses `Math.random()` with Fisher-Yates shuffle
- **🔄 Real-time Validation**: Instant feedback on password strength
- **⚡ Memory Safe**: Passwords cleared from memory after copying

---

## 🌐 Browser Compatibility


| Browser | Version | Status |
|---------|---------|--------|
| ![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=flat&logo=googlechrome&logoColor=white) | 60+ | ✅ Fully Supported |
| ![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=flat&logo=firefoxbrowser&logoColor=white) | 55+ | ✅ Fully Supported |
| ![Safari](https://img.shields.io/badge/Safari-000000?style=flat&logo=safari&logoColor=white) | 12+ | ✅ Fully Supported |
| ![Edge](https://img.shields.io/badge/Edge-0078D7?style=flat&logo=microsoftedge&logoColor=white) | 79+ | ✅ Fully Supported |


---

## 🤝 Contributing
**We welcome contributions from the community!** 🎉


### 🔄 How to Contribute

1. **🍴 Fork the Project**
2. **🌿 Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **💾 Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **📤 Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **🔀 Open a Pull Request**

### 📝 Contribution Guidelines

- Ensure your code follows the existing style
- Add comments for complex logic
- Test your changes across different browsers
- Update documentation if needed

---

## 📊 Project Stats

![GitHub code size](https://img.shields.io/github/languages/code-size/Nandkumar-Ladani23/PasswordGenerator?style=for-the-badge&color=4caf50)
![GitHub repo size](https://img.shields.io/github/repo-size/Nandkumar-Ladani23/PasswordGenerator?style=for-the-badge&color=2196f3)



## 👨‍💻 Author
### **Nandkumar Ladani**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Nandkumar-Ladani23)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/nandkumar-ladani)

**💌 Get in touch:** [Email](mailto:ladaninand23@gmail.com) 



### ⭐ **If you found this project helpful, please give it a star!** ⭐

[![Star this repo](https://img.shields.io/github/stars/Nandkumar-Ladani23/PasswordGenerator?style=social)](https://github.com/Nandkumar-Ladani23/PasswordGenerator/stargazers)

---

**🔐 Stay Secure, Generate Strong Passwords! 🔐**

*Made with ❤️ by [Nandkumar Ladani](https://github.com/Nandkumar-Ladani23)*

