# 🌶️ Osler — AI Telehealth Sign In Screen
### React Native + Expo • Mobile Authentication UI

---

## 📱 Preview

A polished dark-themed mobile authentication screen inspired by the Osler AI Telehealth Dribbble design, featuring:

- App logo with glowing teal cross icon
- "Welcome back" heading & subheading
- Email & Password input fields with custom icons
- Teal Sign In button with glow shadow
- Google & Apple social login buttons
- Forgot password & Sign up links
- Background decorative blobs for depth

---

## 🚀 How to Run

### Prerequisites

Make sure you have these installed:

- **Node.js** (v18 or higher): https://nodejs.org
- **Expo CLI**: `npm install -g expo-cli`
- **Expo Go app** on your phone (iOS App Store / Google Play Store)

---

### Step 1 — Install Dependencies

```bash
cd osler-signin
npm install
```

---

### Step 2 — Start the Development Server

```bash
npx expo start
```

This opens the **Expo Dev Tools** in your browser and shows a QR code in the terminal.

---

### Step 3 — Run on Device or Simulator

#### 📱 Physical Device (Easiest)
1. Open **Expo Go** app on your phone
2. Scan the QR code shown in the terminal
3. The app loads instantly on your device

#### 🤖 Android Emulator
- Press **`a`** in the terminal after running `npx expo start`
- Requires Android Studio with an AVD set up

#### 🍎 iOS Simulator (Mac only)
- Press **`i`** in the terminal after running `npx expo start`
- Requires Xcode installed

#### 🌐 Web Browser
- Press **`w`** in the terminal
- Opens in your default browser (layout may differ slightly from mobile)

---

## 📁 Project Structure

```
osler-signin/
├── App.js            # Main screen — all UI components & styles
├── app.json          # Expo configuration
├── package.json      # Dependencies
├── babel.config.js   # Babel preset
└── assets/           # App icon & splash (optional)
```

---

## 🎨 Design Notes

| Element         | Detail                                      |
|----------------|---------------------------------------------|
| Background      | Deep navy `#0A1628` with soft blob overlays |
| Accent color    | Teal `#00C2A8` (inputs, button, badge)      |
| Card            | `#111E35` with subtle border                |
| Typography      | System default; bold headings               |
| Button          | Teal with glow shadow + arrow circle        |
| Social buttons  | Neutral dark with border                    |

---

## 🛠️ Tech Stack

- **React Native** 0.74
- **Expo** SDK 51
- **Zero UI libraries** — 100% core React Native components

---

## 📝 Notes

- All icons are built from core `View` components (no icon libraries needed)
- Fully responsive for all mobile screen sizes
- Keyboard-aware scroll via `ScrollView`
- Focus states on inputs with teal highlight glow
