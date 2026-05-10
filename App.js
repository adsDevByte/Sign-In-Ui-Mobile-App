import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

/* ── Palette ──────────────────────────────── */
const C = {
  bg: '#F5F5F5',
  white: '#FFFFFF',
  green: '#6DD400',
  greenText: '#6DD400',
  darkText: '#1A1A1A',
  grayText: '#888888',
  label: '#1A1A1A',
  inputBg: '#FFFFFF',
  inputBorder: '#E0E0E0',
  inputFocusBorder: '#6DD400',
  inputErrorBorder: '#E57373',
  errorBg: '#FFEBEE',
  errorText: '#D32F2F',
  placeholder: '#AAAAAA',
  socialBorder: '#DDDDDD',
  socialBg: '#FFFFFF',
};

/* ── Cross / Plus Logo ────────────────────── */
function CrossLogo({ size = 70 }) {
  const pillW = size * 0.28;
  const pillH = size * 0.45;
  const br = size * 0.14;
  const gap = size * 0.06;
  const pillStyle = {
    width: pillW,
    height: pillH,
    borderRadius: br,
    backgroundColor: C.green,
  };
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      {/* Top */}
      <View style={[pillStyle, { position: 'absolute', top: size / 2 - pillH - gap, left: size / 2 - pillW / 2 }]} />
      {/* Bottom */}
      <View style={[pillStyle, { position: 'absolute', top: size / 2 + gap, left: size / 2 - pillW / 2 }]} />
      {/* Left */}
      <View style={[pillStyle, { position: 'absolute', left: size / 2 - pillH - gap, top: size / 2 - pillW / 2, width: pillH, height: pillW }]} />
      {/* Right */}
      <View style={[pillStyle, { position: 'absolute', left: size / 2 + gap, top: size / 2 - pillW / 2, width: pillH, height: pillW }]} />
    </View>
  );
}

/* ── Email Icon ───────────────────────────── */
function EmailIcon() {
  return (
    <View style={styles.iconBox}>
      <View style={styles.emailBody}>
        <View style={styles.emailChevronLeft} />
        <View style={styles.emailChevronRight} />
      </View>
    </View>
  );
}

/* ── Lock Icon ────────────────────────────── */
function LockIcon() {
  return (
    <View style={styles.iconBox}>
      <View style={styles.lockShackle} />
      <View style={styles.lockBody}>
        <View style={styles.lockDot} />
      </View>
    </View>
  );
}

/* ── Eye Icon ─────────────────────────────── */
function EyeIcon({ visible }) {
  return (
    <View style={styles.eyeBox}>
      <View style={styles.eyeShape}>
        <View style={styles.eyePupil} />
      </View>
      {!visible && <View style={styles.eyeStrike} />}
    </View>
  );
}

/* ── Social Icons ─────────────────────────── */
function FbIcon() {
  return <FontAwesome name="facebook" size={24} color="#1877F2" />;
}
function GIcon() {
  return <AntDesign name="google" size={24} color="#EA4335" />;
}
function IgIcon() {
  return <FontAwesome name="instagram" size={24} color="#C13584" />;
}

/* ── Reusable Input Field ─────────────────── */
function InputField({ label, placeholder, value, onChangeText, secureTextEntry, keyboardType, error, showToggle, onToggleSecure }) {
  const [focused, setFocused] = useState(false);
  const isEmail = label.toLowerCase().includes('email');
  return (
    <View style={styles.fieldWrap}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={[styles.inputRow, focused && styles.inputFocused, error && styles.inputError]}>
        {isEmail ? <EmailIcon /> : <LockIcon />}
        <TextInput
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor={C.placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType || 'default'}
          autoCapitalize="none"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          selectionColor={C.green}
        />
        {showToggle && (
          <TouchableOpacity onPress={onToggleSecure} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <EyeIcon visible={!secureTextEntry} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

/* ── Sign In Screen ───────────────────────── */
function SignInScreen({ onGoSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.screen} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>

      {/* ── Logo ── */}
      <View style={styles.logoSection}>
        <CrossLogo size={70} />
      </View>

      {/* ── Heading ── */}
      <Text style={styles.heading}>Sign In</Text>
      <Text style={styles.subheading}>Let's experience the joy of telecare AI.</Text>

      {/* ── Email ── */}
      <InputField
        label="Email Address"
        placeholder="elementary221b@gmail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* ── Password ── */}
      <InputField
        label="Password"
        placeholder="Enter your password..."
        value={password}
        onChangeText={setPassword}
        secureTextEntry={hidePass}
        showToggle
        onToggleSecure={() => setHidePass(!hidePass)}
      />

      {/* ── Sign In Button ── */}
      <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85}>
        <Text style={styles.primaryBtnText}>Sign In</Text>
        <Text style={styles.primaryBtnArrow}>  →</Text>
      </TouchableOpacity>

      {/* ── Social Buttons ── */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}><FbIcon /></TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}><GIcon /></TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}><IgIcon /></TouchableOpacity>
      </View>

      {/* ── Sign Up ── */}
      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Don't have an account? </Text>
        <TouchableOpacity onPress={onGoSignUp}>
          <Text style={styles.bottomLink}>Sign Up.</Text>
        </TouchableOpacity>
      </View>

      {/* ── Forgot Password ── */}
      <TouchableOpacity style={{ marginTop: 12 }}>
        <Text style={styles.bottomLink}>Forgot your password?</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

/* ── Sign Up Screen ───────────────────────── */
function SignUpScreen({ onGoSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [hideConfirm, setHideConfirm] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const passwordMismatch = submitted && confirm.length > 0 && password !== confirm;

  return (
    <ScrollView contentContainerStyle={styles.screen} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>

      {/* ── Logo ── */}
      <View style={styles.logoSection}>
        <CrossLogo size={70} />
      </View>

      {/* ── Heading ── */}
      <Text style={styles.heading}>Sign Up For Free</Text>
      <Text style={styles.subheading}>Sign up in 1 minute for free!</Text>

      {/* ── Email ── */}
      <InputField
        label="Email Address"
        placeholder="Enter your email..."
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* ── Password ── */}
      <InputField
        label="Password"
        placeholder="••••••••••••••••••••••"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={hidePass}
        showToggle
        onToggleSecure={() => setHidePass(!hidePass)}
        error={passwordMismatch}
      />

      {/* ── Confirm Password ── */}
      <InputField
        label="Password Confirmation"
        placeholder="••••••••••••••••••••••"
        value={confirm}
        onChangeText={setConfirm}
        secureTextEntry={hideConfirm}
        showToggle
        onToggleSecure={() => setHideConfirm(!hideConfirm)}
        error={passwordMismatch}
      />

      {/* ── Error Message ── */}
      {passwordMismatch && (
        <View style={styles.errorBox}>
          <Text style={styles.errorIcon}>⚠</Text>
          <Text style={styles.errorMsg}>ERROR: Password do not match!</Text>
        </View>
      )}

      {/* ── Sign Up Button ── */}
      <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85} onPress={() => setSubmitted(true)}>
        <Text style={styles.primaryBtnText}>Sign Up</Text>
        <Text style={styles.primaryBtnArrow}>  →</Text>
      </TouchableOpacity>

      {/* ── Sign In link ── */}
      <View style={[styles.bottomRow, { marginTop: 20 }]}>
        <Text style={styles.bottomText}>Already have an account? </Text>
        <TouchableOpacity onPress={onGoSignIn}>
          <Text style={styles.bottomLink}>Sign In.</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

/* ── Root App ─────────────────────────────── */
export default function App() {
  const [screen, setScreen] = useState('signin');
  return (
    <SafeAreaView style={styles.root}>
      <ExpoStatusBar style="dark" />
      {screen === 'signin'
        ? <SignInScreen onGoSignUp={() => setScreen('signup')} />
        : <SignUpScreen onGoSignIn={() => setScreen('signin')} />
      }
    </SafeAreaView>
  );
}

/* ── Styles ───────────────────────────────── */
const styles = StyleSheet.create({

  root: { flex: 1, backgroundColor: C.bg },

  screen: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'android' ? 40 : 20,
    paddingBottom: 40,
    alignItems: 'center',
  },

  /* ── Logo ── */
  logoSection: { marginBottom: 20, marginTop: 10 },

  /* ── Headings ── */
  heading: { fontSize: 30, fontWeight: '800', color: C.darkText, textAlign: 'center', marginBottom: 8 },
  subheading: { fontSize: 14, color: C.grayText, textAlign: 'center', marginBottom: 28 },

  /* ── Field ── */
  fieldWrap: { width: '100%', marginBottom: 16 },
  fieldLabel: { fontSize: 13, fontWeight: '700', color: C.label, marginBottom: 8 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.inputBg,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: C.inputBorder,
    paddingHorizontal: 14,
    height: 54,
    width: '100%',
  },
  inputFocused: { borderColor: C.inputFocusBorder },
  inputError: { borderColor: C.inputErrorBorder },
  inputText: { flex: 1, fontSize: 15, color: C.darkText, marginLeft: 10, paddingVertical: 0 },

  /* ── Email icon ── */
  iconBox: { width: 22, height: 22, alignItems: 'center', justifyContent: 'center' },
  emailBody: {
    width: 20, height: 14, borderRadius: 3,
    borderWidth: 1.5, borderColor: C.grayText,
    alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
  },
  emailChevronLeft: {
    position: 'absolute',
    top: 0, left: -1,
    width: 12, height: 12,
    borderRightWidth: 1.5, borderBottomWidth: 1.5,
    borderColor: C.grayText,
    transform: [{ rotate: '45deg' }],
    backgroundColor: 'transparent',
  },
  emailChevronRight: {
    position: 'absolute',
    top: 0, right: -1,
    width: 12, height: 12,
    borderLeftWidth: 1.5, borderBottomWidth: 1.5,
    borderColor: C.grayText,
    transform: [{ rotate: '-45deg' }],
    backgroundColor: 'transparent',
  },

  /* ── Lock icon ── */
  lockShackle: {
    width: 10, height: 6,
    borderTopLeftRadius: 5, borderTopRightRadius: 5,
    borderWidth: 2, borderBottomWidth: 0,
    borderColor: C.grayText, marginBottom: -1,
  },
  lockBody: { width: 16, height: 11, borderRadius: 3, backgroundColor: C.grayText, alignItems: 'center', justifyContent: 'center' },
  lockDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: C.white },

  /* ── Eye icon ── */
  eyeBox: { width: 22, height: 22, alignItems: 'center', justifyContent: 'center', padding: 2 },
  eyeShape: { width: 18, height: 12, borderRadius: 6, borderWidth: 1.5, borderColor: C.grayText, alignItems: 'center', justifyContent: 'center' },
  eyePupil: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: C.grayText },
  eyeStrike: { position: 'absolute', width: 22, height: 1.5, backgroundColor: C.grayText, transform: [{ rotate: '-35deg' }] },

  /* ── Primary Button ── */
  primaryBtn: {
    width: '100%', height: 54,
    backgroundColor: C.green, borderRadius: 14,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    marginTop: 8,
    shadowColor: C.green, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.35, shadowRadius: 10, elevation: 6,
  },
  primaryBtnText: { fontSize: 16, fontWeight: '700', color: C.white, letterSpacing: 0.3 },
  primaryBtnArrow: { fontSize: 18, color: C.white, fontWeight: '700' },

  /* ── Social ── */
  socialRow: { flexDirection: 'row', justifyContent: 'center', gap: 16, marginTop: 28, marginBottom: 8 },
  socialBtn: {
    width: 58, height: 58, borderRadius: 29,
    backgroundColor: C.socialBg, borderWidth: 1, borderColor: C.socialBorder,
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.07, shadowRadius: 4, elevation: 2,
  },

  /* ── Bottom links ── */
  bottomRow: { flexDirection: 'row', alignItems: 'center', marginTop: 16 },
  bottomText: { fontSize: 14, color: C.grayText },
  bottomLink: { fontSize: 14, color: C.greenText, fontWeight: '700' },

  /* ── Error box ── */
  errorBox: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: C.errorBg, borderRadius: 12,
    paddingHorizontal: 16, paddingVertical: 12,
    width: '100%', marginBottom: 8, gap: 8,
  },
  errorIcon: { fontSize: 16, color: C.errorText },
  errorMsg: { fontSize: 13, fontWeight: '600', color: C.errorText },
});
