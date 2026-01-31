const { test, expect } = require('@playwright/test');

test.describe('Swift Translator - Full Assignment Suite', () => {

  test.beforeEach(async ({ page }) => {
    await test.step('Navigate to Homepage', async () => {
      await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
    });
  });

  /**
   * HELPER FUNCTION:
   * Simulates real user typing to trigger the transliteration engine.
   */
  async function typeAndConvert(page, text) {
    const input = page.getByPlaceholder('Input Your Singlish Text Here.');
    // Delay of 100ms simulates real typing
    await input.pressSequentially(text, { delay: 100 });
    // Press Space to ensure the final word converts
    await page.keyboard.press('Space'); 
    // Small pause to allow the UI to update
    await page.waitForTimeout(1000); 
  }

  // ==========================================
  // SECTION 1: POSITIVE FUNCTIONAL TESTS (1-24)
  // ==========================================

  test('TC_01: Pos_Fun_0001 - Simple Declarative Sentence', async ({ page }) => {
    await typeAndConvert(page, 'mal vaththata hirueliya vaetenevaa.');
    await expect(page.getByText('මල් වත්තට හිරුඑලිය වැටෙනෙවා.')).toBeVisible();
  });

  test('TC_02: Pos_Fun_0002 - Compound Sentence', async ({ page }) => {
    await typeAndConvert(page, 'magee yaluvaa ballanta kaemathi, namuth mama puusanta kaemathi.');
    await expect(page.getByText('මගේ යලුවා බල්ලන්ට කැමති, නමුත් මම පූසන්ට කැමති.')).toBeVisible();
  });

  test('TC_03: Pos_Fun_0003 - Complex Conditional Sentence', async ({ page }) => {
    await typeAndConvert(page, 'heta vahinavaa nam api gamana avalaQQgu karamu.');
    await expect(page.getByText('හෙට වහිනවා නම් අපි ගමන අවලංගු කරමු.')).toBeVisible();
  });

  test('TC_04: Pos_Fun_0004 - Formal Greeting', async ({ page }) => {
    await typeAndConvert(page, 'obathumaata suBha dhavasak veevaa!');
    await expect(page.getByText('ඔබතුමාට සුභ දවසක් වේවා!')).toBeVisible();
  });

  test('TC_05: Pos_Fun_0005 - Informal Interrogative (Slang)', async ({ page }) => {
    await typeAndConvert(page, 'machan, uba adha vaedadha?');
    await expect(page.getByText('මචන්, උබ අද වැඩද?')).toBeVisible();
  });

  test('TC_06: Pos_Fun_0006 - Imperative Command', async ({ page }) => {
    await typeAndConvert(page, 'parissamen paara paninna.');
    await expect(page.getByText('පරිස්සමෙන් පාර පනින්න.')).toBeVisible();
  });

  test('TC_07: Pos_Fun_0007 - Past Tense Narrative', async ({ page }) => {
    await typeAndConvert(page, 'giya sathiyee api AnuraaDhapuree vadhinna giyaa.');
    await expect(page.getByText('ගිය සතියේ අපි අනුරාධපුරේ වදින්න ගියා.')).toBeVisible();
  });

  test('TC_08: Pos_Fun_0008 - Future Tense Prediction', async ({ page }) => {
    await typeAndConvert(page, 'labana avurudhdhee badu mila adu veevi.');
    await expect(page.getByText('ලබන අවුරුද්දේ බඩු මිල අඩු වේවි.')).toBeVisible();
  });

  test('TC_09: Pos_Fun_0009 - Negative Capability', async ({ page }) => {
    await typeAndConvert(page, 'mata siQQhala liyanna kiyanna baee.');
    await expect(page.getByText('මට සිංහල ලියන්න කියන්න බෑ.')).toBeVisible();
  });

  test('TC_10: Pos_Fun_0010 - Proper Spacing', async ({ page }) => {
    await typeAndConvert(page, 'Lamayi sellam midhule dhuvanavaa.');
    await expect(page.getByText('ළමයි සෙල්ලම් මිදුලෙ දුවනවා.')).toBeVisible();
  });

  test('TC_11: Pos_Fun_0011 - Pronoun Api (We)', async ({ page }) => {
    await typeAndConvert(page, 'api heta gamee yamu!');
    await expect(page.getByText('අපි හෙට ගමේ යමු!')).toBeVisible();
  });

  test('TC_12: Pos_Fun_0012 - Pronoun Eya (He/She)', async ({ page }) => {
    await typeAndConvert(page, 'eyaa dhaen kaaryaalayee vaeda.');
    await expect(page.getByText('එයා දැන් කාර්යාලයේ වැඩ.')).toBeVisible();
  });

  test('TC_13: Pos_Fun_0013 - Polite Request', async ({ page }) => {
    await typeAndConvert(page, 'karuNaakara mata paena eka dhenna puluvandha?');
    await expect(page.getByText('කරුණාකර මට පැන එක දෙන්න පුලුවන්ද?')).toBeVisible();
  });

  test('TC_14: Pos_Fun_0014 - Reduplicated Words', async ({ page }) => {
    await typeAndConvert(page, 'himin himin vaeda karanna.');
    await expect(page.getByText('හිමින් හිමින් වැඩ කරන්න.')).toBeVisible();
  });

  test('TC_15: Pos_Fun_0015 - Normal Sentence (Check)', async ({ page }) => {
    await typeAndConvert(page, 'eyaa godakaalekin aavee naee.');
    await expect(page.getByText('එයා ගොඩකාලෙකින් ආවේ නෑ.')).toBeVisible();
  });

  test('TC_16: Pos_Fun_0016 - Multi-word expressions', async ({ page }) => {
    await typeAndConvert(page, 'kohedha yannee.');
    await expect(page.getByText('කොහෙද යන්නේ.')).toBeVisible();
  });

  test('TC_17: Pos_Fun_0017 - Acronym/Abbreviation Handling', async ({ page }) => {
    await typeAndConvert(page, 'mama ATM eken salli gaththaa.');
    await expect(page.getByText('මම ATM එකෙන් සල්ලි ගත්තා.')).toBeVisible();
  });

  test('TC_18: Pos_Fun_0018 - Dates', async ({ page }) => {
    await typeAndConvert(page, 'sunaamiya 2004.12.26 aavaa');
    await expect(page.getByText('සුනාමිය 2004.12.26 ආවා')).toBeVisible();
  });

  test('TC_19: Pos_Fun_0019 - Currency', async ({ page }) => {
    await typeAndConvert(page, 'adha 1 USD ekak Rs. 306');
    await expect(page.getByText('අද 1 USD එකක් Rs. 306')).toBeVisible();
  });

  test('TC_20: Pos_Fun_0020 - Containing Punctuation', async ({ page }) => {
    await typeAndConvert(page, 'oyaa kohedha giyee? aeyi parakku!?');
    await expect(page.getByText('ඔයා කොහෙද ගියේ? ඇයි පරක්කු!?')).toBeVisible();
  });

  test('TC_21: Pos_Fun_0021 - Long Paragraph', async ({ page }) => {
    const longText = 'shri laQQkaave ithihaasaya bohomayak vaedhagath sidhuviim valin pirilaa thiyenavaa. rajavaru saha janathaava rata ekseesath karanna godak kaepaviim kalaa. vaari karmaantha saha kRUShikarmaya dhiyuNu kiriimata ovun mahansi unaa.';
    const expectedText = 'ශ්‍රි ලංකාවෙ ඉතිහාසය බොහොමයක් වැදගත් සිදුවීම් වලින් පිරිලා තියෙනවා. රජවරු සහ ජනතාව රට එක්සේසත් කරන්න ගොඩක් කැපවීම් කලා. වාරි කර්මාන්ත සහ කෘෂිකර්මය දියුණු කිරීමට ඔවුන් මහන්සි උනා.';
    
    // Using a faster delay for long text to save time, but slow enough to register
    const input = page.getByPlaceholder('Input Your Singlish Text Here.');
    await input.pressSequentially(longText, { delay: 10 }); 
    await page.keyboard.press('Space');
    await page.waitForTimeout(1000);
    
    await expect(page.getByText(expectedText)).toBeVisible();
  });

  test('TC_22: Pos_Fun_0022 - Multiple Spaces', async ({ page }) => {
    await typeAndConvert(page, 'mama  gamee   yanavaa');
    await expect(page.getByText('මම  ගමේ   යනවා')).toBeVisible();
  });

  test('TC_23: Pos_Fun_0023 - Places and English Words', async ({ page }) => {
    await typeAndConvert(page, 'code eka push karaadha');
    await expect(page.getByText('code එක push කරාද')).toBeVisible();
  });

  test('TC_24: Pos_Fun_0024 - Time Formats', async ({ page }) => {
    await typeAndConvert(page, 'dhumriya 8.30 AM pitath vee');
    await expect(page.getByText('දුම්රිය 8.30 AM පිටත් වේ')).toBeVisible();
  });


  // ==========================================
  // SECTION 2: ROBUSTNESS / NEGATIVE TESTS (25-34)
  // These assert the CORRECT Sinhala, so if the tool fails, these turn RED.
  // ==========================================

  test('TC_25: Neg_Fun_01 - Interrogative Phonetic Ambiguity', async ({ page }) => {
    await typeAndConvert(page, 'oyata kohomada?');
    // Expected: Soft 'da' (ද). Actual is likely Hard 'da' (ඩා)
    await expect(page.getByText('ඔයාට කොහොමද?')).toBeVisible(); 
  });

  test('TC_26: Neg_Fun_02 - Simple Sentence Vowel Handling', async ({ page }) => {
    await typeAndConvert(page, 'mama gedara yanawa');
    // Expected: Full ending (නවා)
    await expect(page.getByText('මම ගෙදර යනවා')).toBeVisible();
  });

  test('TC_27: Neg_Fun_03 - Negation Vowel Precision', async ({ page }) => {
    await typeAndConvert(page, 'mama danne na');
    // Expected: Long vowel 'nae' (නෑ)
    await expect(page.getByText('මම දන්නේ නෑ')).toBeVisible();
  });

  test('TC_28: Neg_Fun_04 - Request Diphthong Handling', async ({ page }) => {
    await typeAndConvert(page, 'mata udau karanna');
    // Expected: 'udav' (උදව්)
    await expect(page.getByText('මට උදව් කරන්න')).toBeVisible();
  });

  test('TC_29: Neg_Fun_05 - Response Character Mapping', async ({ page }) => {
    await typeAndConvert(page, 'ow, eka hari');
    // Expected: 'Ow' (ඔව්)
    await expect(page.getByText('ඔව්, ඒක හරි')).toBeVisible();
  });

  test('TC_30: Neg_Fun_06 - Polite Phrasing Grammar', async ({ page }) => {
    await typeAndConvert(page, 'karunakarala');
    // Expected: Retroflex 'N' (ණ)
    await expect(page.getByText('කරුණාකරලා')).toBeVisible();
  });

  test('TC_31: Neg_Fun_07 - Informal Slang Nasal Sound', async ({ page }) => {
    await typeAndConvert(page, 'machang');
    // Expected: Bindu (ං)
    await expect(page.getByText('මචං')).toBeVisible();
  });

  test('TC_32: Neg_Fun_08 - Compound Word Spacing', async ({ page }) => {
    await typeAndConvert(page, 'mata badagini');
    // Expected: One word (බඩගිනි)
    await expect(page.getByText('මට බඩගිනි')).toBeVisible();
  });

  test('TC_33: Neg_Fun_09 - Mixed Language (Brand Names)', async ({ page }) => {
    await typeAndConvert(page, 'mama Facebook yanawa');
    // Expected: "Facebook" stays in English
    await expect(page.getByText('මම Facebook යනවා')).toBeVisible();
  });

  test('TC_34: Neg_Fun_10 - Unit Preservation', async ({ page }) => {
    await typeAndConvert(page, 'mata 5kg denna');
    // Expected: "kg" stays as "kg"
    await expect(page.getByText('මට 5kg දෙන්න')).toBeVisible();
  });

});