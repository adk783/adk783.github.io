/*
	Language switcher: shows the elements whose lang attribute matches the
	root <html lang>, and remembers the visitor's choice.
*/

(function() {

	var SUPPORTED_LANGS = ['fr', 'en'],
		DEFAULT_LANG = 'fr',
		STORAGE_KEY = 'preferred-lang',
		PAGE_TITLES = {
			fr: 'Antoine Dupuy | Élève ingénieur informatique',
			en: 'Antoine Dupuy | Computer science engineering student'
		};

	function isSupported(lang) {
		return SUPPORTED_LANGS.indexOf(lang) !== -1;
	}

	function readStoredLang() {
		try {
			return window.localStorage.getItem(STORAGE_KEY);
		} catch (error) {
			return null;
		}
	}

	function storeLang(lang) {
		try {
			window.localStorage.setItem(STORAGE_KEY, lang);
		} catch (error) {
			// Storage unavailable (private mode): the choice simply is not remembered.
		}
	}

	function detectInitialLang() {
		var storedLang = readStoredLang(),
			browserLang = (navigator.language || '').slice(0, 2).toLowerCase();

		if (isSupported(storedLang))
			return storedLang;

		return isSupported(browserLang) ? browserLang : DEFAULT_LANG;
	}

	function applyLang(lang) {
		document.documentElement.lang = lang;
		document.title = PAGE_TITLES[lang];

		document.querySelectorAll('[data-set-lang]').forEach(function(button) {
			button.setAttribute('aria-pressed', String(button.dataset.setLang === lang));
		});
	}

	applyLang(detectInitialLang());

	document.querySelectorAll('[data-set-lang]').forEach(function(button) {
		button.addEventListener('click', function() {
			applyLang(button.dataset.setLang);
			storeLang(button.dataset.setLang);
		});
	});

})();
