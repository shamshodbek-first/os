
/*************************************************************************
 * CHSB.PIIMA.UZ - MUTLOQ HIMOYA (GOD MODE)
 * -----------------------------------------------------------
 * Barcha klaviatura tugmalari va tizim cheklovlari o'chirilgan.
 *************************************************************************/

(function() {
    console.log("%c [!] MUTLOQ HIMOYA ISHGA TUSHMOQDA... ", "background: red; color: white; font-weight: bold; font-size: 16px;");

    // 1. KONSOLNI TOZALASHNI BLOKLASH
    console.clear = () => console.log("[!] Tizim konsolni tozalamoqchi bo'ldi.");

    // 2. OYNADAN CHIQISH VA YASHIRINISHNI MUZLATISH (Global Stop)
    const silentHandler = (e) => {
        e.stopImmediatePropagation();
        return false;
    };

    const events = ['blur', 'focusout', 'visibilitychange', 'mouseleave', 'mouseout', 'beforeunload'];
    events.forEach(evt => window.addEventListener(evt, silentHandler, true));
    events.forEach(evt => document.addEventListener(evt, silentHandler, true));

    // Brauzerni aldash: "Men har doim shu yerdaman va ekran ochiq"
    Object.defineProperty(document, 'visibilityState', { get: () => 'visible', configurable: true });
    Object.defineProperty(document, 'hidden', { get: () => false, configurable: true });

    // 3. FULLSCREEN (TO'LIQ EKRAN) MUTLOQ BLOK
    const p_nop = () => Promise.resolve();
    ['requestFullscreen', 'webkitRequestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen'].forEach(m => {
        if (Element.prototype[m]) Element.prototype[m] = p_nop;
    });
    if (document.exitFullscreen) document.exitFullscreen = p_nop;

    // 4. KLAVIATURADAGI HAMMA TUGMALARNI OCHISH (Absolute Freedom)
    // Tizim sizning birorta tugmani bosganingizni sezmaydi.
    window.addEventListener('keydown', (e) => {
        // Barcha xavfli tugmalar va kombinatsiyalar:
        // Alt, Tab, Win, Meta, F-tugmalar, Ctrl+C/V, PrintScreen va h.k.
        e.stopImmediatePropagation(); 
        console.log("[+] Tugma bosildi (Tizimdan yashirildi): " + e.key);
    }, true);

    window.addEventListener('keyup', (e) => e.stopImmediatePropagation(), true);
    window.addEventListener('keypress', (e) => e.stopImmediatePropagation(), true);

    // 5. NUSXA KO'CHIRISH VA SICHQONCHA ERKINLIGI
    const unlock = (e) => e.stopImmediatePropagation();
    ['contextmenu', 'copy', 'paste', 'cut', 'selectstart', 'dragstart', 'drop'].forEach(evt => {
        document.addEventListener(evt, unlock, true);
    });

    // 6. TAYMERLARNI TO'XTATISHGA URINISH (Ixtiyoriy)
    // Agar tizim vaqtni kuzatsa, bu qismini ehtiyotkorlik bilan ishlating.

    console.log("%c [OK] SIZ ENDI TIZIMDAN TO'LIQ MUSTAQILSIZ! ", "background: green; color: white; font-size: 22px; font-weight: bold;");
    console.log("1. Hamma tugmalar ishlaydi.\n2. Alt+Tab bemalol.\n3. Oyna yopilib qolmaydi.");
})();
