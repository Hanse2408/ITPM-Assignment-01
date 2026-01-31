const { test, expect } = require('@playwright/test');

test.describe('Swift Translator - Full Assignment Suite (IT23821490)', () => {

  test.beforeEach(async ({ page }) => {
    await test.step('Navigate to Homepage', async () => {
      await page.goto('https://www.swifttranslator.com/', {
        waitUntil: 'networkidle'
      });
    });
  });


  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_01: Pos_Fun_0001 - Simple Declarative Sentence (Nature)', async ({ page }) => {

    await test.step('Enter Multiple Singlish words', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('mal vaththata hirueliya vaetenevaa.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('මල් වත්තට හිරුඑලිය වැටෙනෙවා.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_02: Pos_Fun_0002 - Compound Sentence with Adversative Conjunction', async ({ page }) => {

    await test.step('Enter Singlish text with special characters', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('magee yaluvaa ballanta kaemathi, namuth mama puusanta kaemathi.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('මගේ යලුවා බල්ලන්ට කැමති, නමුත් මම පූසන්ට කැමති.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_03: Pos_Fun_0003 - Complex Conditional Sentence (If/Then)', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('heta vahinavaa nam api gamana avalaQQgu karamu.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('හෙට වහිනවා නම් අපි ගමන අවලංගු කරමු.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_04: Pos_Fun_0004 - Formal Greeting to Superior', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('obathumaata suBha dhavasak veevaa!');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('ඔබතුමාට සුභ දවසක් වේවා!')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_05: Pos_Fun_0005 - Informal Interrogative (Slang)', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('machan, uba adha vaedadha?');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('මචන්, උබ අද වැඩද?')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_06: Pos_Fun_0006 - Imperative Command (Safety)', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('parissamen paara paninna.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('පරිස්සමෙන් පාර පනින්න.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_07: Pos_Fun_0007 - Past Tense Narrative (Historical)', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('giya sathiyee api AnuraaDhapuree vadhinna giyaa.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('ගිය සතියේ අපි අනුරාධපුරේ වදින්න ගියා.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_08: Pos_Fun_0008 - Future Tense Prediction', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('labana avurudhdhee badu mila adu veevi.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('ලබන අවුරුද්දේ බඩු මිල අඩු වේවි.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_09: Pos_Fun_0009 - Negative Capability Statement', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('mata siQQhala liyanna kiyanna baee.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('මට සිංහල ලියන්න කියන්න බෑ.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_10: Pos_Fun_0010 - Plural Subject Agreement', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('Lamayi sellam midhule dhuvanavaa.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('ළමයි සෙල්ලම් මිදුලෙ දුවනවා.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_11: Pos_Fun_0011 - Pronoun Api (We) in Future Context', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('api heta cinema yamu.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('අපි හෙට cinema යමු.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_12: Pos_Fun_0012 - Pronoun Eya (He/She) in Present Context', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('eyaa dhaen office ekea vaeda.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('එයා දැන් office එකේ වැඩ.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_13: Pos_Fun_0013 - Polite Request with English Mix', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('karuNaakara mata pen eka pass karanna puluvandha?');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('කරුණාකර මට pen එක pass කරන්න පුලුවන්ද?')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_14: Pos_Fun_0014 - Reduplicated Words for Emphasis', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('himin himin vaeda karanna.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('හිමින් හිමින් වැඩ කරන්න.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_15: Pos_Fun_0015 - Joined Words (Missing Spaces)', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('eyaa godakkalekin aavee naee.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('එයා ගොඩක්කලෙකින් ආවේ නෑ.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_16: Pos_Fun_0016 - Technical Jargon Preservation', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('apee padhDhathiyee dhaththa gabadaava bidhavaetuNaa.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('අපේ පද්ධතියේ දත්ත ගබඩාව බිදවැටුණා.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_17: Pos_Fun_0017 - Acronym/Abbreviation Handling', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('mama telar yanthrayen salli gaththaa.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('මම ටෙලර් යන්ත්‍රයෙන් සල්ලි ගත්තා.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_18: Pos_Fun_0018 - Date and Time Formatting', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('hamuva 2025-05-10 dhina 10.30 AM ta.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('හමුව 2025-05-10 දින 10.30 AM ට.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_19: Pos_Fun_0019 - Currency and Measurement Units', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('meeke bara 5kg saha mila Rs. 2000 yi.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('මේකෙ බර 5kg සහ මිල Rs. 2000 යි.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_20: Pos_Fun_0020 - Complex Punctuation', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('oyaa kohedha giyee? aeyi parakku!?');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('ඔයා කොහෙද ගියේ? ඇයි පරක්කු!?')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_21: Pos_Fun_0021 - Long Paragraph Transliteration', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('shri laQQkaave ithihaasaya bohomayak vaedhagath sidhuviim valin pirilaa thiyenavaa. rajavaru saha janathaava rata ekseesath karanna godak kaepaviim kalaa. vaari karmaantha saha kRUShikarmaya dhiyuNu kiriimata ovun mahansi unaa.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('ශ්‍රි ලංකාවෙ ඉතිහාසය බොහොමයක් වැදගත් සිදුවීම් වලින් පිරිලා තියෙනවා. රජවරු සහ ජනතාව රට එක්සේසත් කරන්න ගොඩක් කැපවීම් කලා. වාරි කර්මාන්ත සහ කෘෂිකර්මය දියුණු කිරීමට ඔවුන් මහන්සි උනා.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_22: Pos_Fun_0022 - Segmented Syllables (Spaced Out)', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('ma ma ge dha ra ya na vaa.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('ම ම ගෙ ද ර ය න වා.')).toBeVisible();
    });

  });

  // --- POSITIVE FUNCTIONAL TESTS ---
  test('TC_23: Pos_Fun_0023 - Brand Name Recognition', async ({ page }) => {

    await test.step('Enter Multiple Singlish Sentences with Special Characters and Punctuation', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      await input.fill('mama Facebook ekee pinthuura udugatha kalaa.');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output', async () => {
      await expect(page.getByText('මම Facebook එකේ පින්තූර උඩුගත කලා.')).toBeVisible();
    });

  });




  // --- NEGATIVE/ROBUSTNESS FUNCTIONAL TESTS ---
  // This test uses the 'Joined words' stress test from Appendix 1 
  // It is expected to FAIL if the system cannot automatically insert spaces.
  test('TC_02: Neg_Fun_0001 - Stress Test Joined Words', async ({ page }) => {

    // We mark this test as "fixme" or "fail" if you want the report to stay green 
    // while acknowledging the bug. If you want it to actually fail (turn red), remove the next line.
    // test.fail(); 

    await test.step('Enter Joined Singlish text (Missing Spaces)', async () => {
      const input = page.getByPlaceholder('Input Your Singlish Text Here.');
      // Input from Appendix 1, Section 8B: "mamagedharayanavaa" 
      await input.fill('mamagedharayanavaa');
      await page.keyboard.press('Space');
    });

    await test.step('Verify Sinhala Output contains spaces', async () => {
      // The system SHOULD ideally output: "මම ගෙදර යනවා"
      // If the system outputs "මමගෙදරයනවා" (no spaces), this assertion will fail.
      await expect(page.getByText('මම ගෙදර යනවා')).toBeVisible();
    });

  });

});