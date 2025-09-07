const header = document.querySelector('header');
const up = document.querySelector('.up');
const steps = document.querySelectorAll('section.steps ul.steps li');
const stepImg = document.querySelector('.step-img');
const questions = document.querySelectorAll('section.questions .holder .container');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('header nav');


window.addEventListener('scroll' , () => {
    header.classList.toggle('scrolled' , window.scrollY > 0);

})

up.addEventListener('click' , () => {
    window.scrollTo(0,0);
})


// Sign Up Boxes
const holder = document.querySelector('.login-pop-up');


const signUpHolder = document.querySelector('.sign-up');
const loginHolder = document.querySelector('.login-up');
const toogleBtns = document.querySelectorAll('.login-pop-up .btns .button');


function closeHolder() {
    holder.classList.remove('active');
}

function openHolder() {
    
}



function openSignUpHolder() {
    toogleBtns[0].classList.add('active');
    toogleBtns[1].classList.remove('active');

    holder.classList.contains('active') ? console.log('active') : holder.classList.add('active');
    signUpHolder.classList.add('active');
    loginHolder.classList.remove('active');
}

function openLoginHolder() {
    toogleBtns[1].classList.add('active');
    toogleBtns[0].classList.remove('active');
    holder.classList.contains('active') ? console.log('active') : holder.classList.add('active');

    loginHolder.classList.add('active');
    signUpHolder.classList.remove('active');
}

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}


if (window.innerWidth <= 768) {
    document.querySelector('.hero').classList.add('no-img')
}

const langSwitcher = document.querySelector('.lang-switcher');
const langMenu = document.querySelector('.lang-menu');

if(langSwitcher) {
    langSwitcher.addEventListener('click', () => {
        langMenu.classList.toggle('active');
    });
}

// Language Switcher Functionality
const translations = {
    en: {
        // Navigation
        'Home': 'Home',
        'Playgrounds': 'Playgrounds',
        'User Dashboard': 'User Dashboard',
        'Club Dashboard': 'Club Dashboard',
        'Admin Dashboard': 'Admin Dashboard',
        'Contact Us': 'Contact Us',
        'About Us': 'About Us',
        'Terms of Use': 'Terms of Use',
        'Privacy Policy': 'Privacy Policy',
        'Login': 'Login',
        'Create Account': 'Create Account',
        // Content
        'Play and challenge now!': 'Play and challenge now!',
        'An integrated sports community in your hands': 'An integrated sports community in your hands',
        'Get Started': 'Get Started',
        'Book Now': 'Book Now',
        'View Details': 'View Details',
        'Football': 'Football',
        'Basketball': 'Basketball',
        'Tennis': 'Tennis',
        'Swimming': 'Swimming',
        'Padel': 'Padel',
        'Volleyball': 'Volleyball'
    },
    ar: {
        // Navigation
        'Home': 'الرئيسية',
        'Playgrounds': 'الملاعب',
        'User Dashboard': 'لوحة المستخدم',
        'Club Dashboard': 'لوحة النادي',
        'Admin Dashboard': 'لوحة الإدارة',
        'Contact Us': 'تواصل معنا',
        'About Us': 'من نحن',
        'Terms of Use': 'شروط الاستخدام',
        'Privacy Policy': 'سياسة الخصوصية',
        'Login': 'تسجيل الدخول',
        'Create Account': 'إنشاء حساب',
        // Content
        'Play and challenge now!': 'العب وتحدى الآن!',
        'An integrated sports community in your hands': 'مجتمع رياضي متكامل بين يديك',
        'Get Started': 'ابدأ الآن',
        'Book Now': 'احجز الآن',
        'View Details': 'عرض التفاصيل',
        'Football': 'كرة القدم',
        'Basketball': 'كرة السلة',
        'Tennis': 'التنس',
        'Swimming': 'السباحة',
        'Padel': 'البادل',
        'Volleyball': 'الكرة الطائرة'
    }
};

let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update document direction and language
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update language switcher display
    const selectedLang = document.querySelector('.selected-lang span');
    if (selectedLang) {
        selectedLang.textContent = lang === 'ar' ? 'العربية' : 'English';
    }
    
    // Close language menu
    if (langMenu) {
        langMenu.classList.remove('active');
    }
    
    // Translate all elements with data-translate attribute
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Show demo alert for language change
    alert(`Demo: Language switched to ${lang === 'ar' ? 'Arabic' : 'English'}`);
}

// Load saved language preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    if (savedLang !== currentLang) {
        switchLanguage(savedLang);
    }
});