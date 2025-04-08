document.addEventListener('DOMContentLoaded', function() {
    // Display current date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    document.getElementById('current-date').textContent = today.toLocaleDateString('en-US', options);
    
    // Horoscope data
    const horoscopes = [
        {
            sign: "Aries",
            dateRange: "Mar 21 - Apr 19",
            icon: "images/aries.png",
            prediction: "Today is a day for bold moves, Aries. Your energy is high, and others will notice your confidence. A surprise opportunity may come your way - be ready to seize it!",
            luckyNumber: Math.floor(Math.random() * 10) + 1,
            mood: "Adventurous"
        },
        {
            sign: "Taurus",
            dateRange: "Apr 20 - May 20",
            icon: "images/taurus.png",
            prediction: "Patience is your virtue today, Taurus. Financial matters look promising, but don't rush decisions. A loved one may need your practical advice this evening.",
            luckyNumber: Math.floor(Math.random() * 10) + 1,
            mood: "Grounded"
        },
        {
            sign: "Gemini",
            dateRange: "May 21 - Jun 20",
            icon: "images/gemini.png",
            prediction: "Your communication skills are at their peak today, Gemini. A chance encounter could lead to an interesting conversation. Watch for signs - they're pointing you in the right direction.",
            luckyNumber: Math.floor(Math.random() * 10) + 1,
            mood: "Curious"
        },
        {
            sign: "Cancer",
            dateRange: "Jun 21 - Jul 22",
            icon: "images/cancer.png",
            prediction: "Emotions may run high today, Cancer. Take time for self-care. Your intuition is strong - trust your gut feeling about a situation that's been puzzling you.",
            luckyNumber: Math.floor(Math.random() * 10) + 1,
            mood: "Nurturing"
        },
        {
            sign: "Leo",
            dateRange: "Jul 23 - Aug 22",
            icon: "images/leo.png",
            prediction: "All eyes are on you today, Leo! Your natural charisma is amplified. Creative projects flourish - express yourself! Romance may blossom unexpectedly.",
            luckyNumber: Math.floor(Math.random() * 10) + 1,
            mood: "Dramatic"
        },
        {
            sign: "Virgo",
            dateRange: "Aug 23 - Sep 22",
            icon: "images/virgo.png",
            prediction: "Details matter today, Virgo. Your analytical mind will solve a persistent problem. Health and wellness should be your focus - try that new workout you've been considering.",
            luckyNumber: Math.floor(Math.random() * 10) + 1,
            mood: "Organized"
        },
        {
            sign: "Libra",
            dateRange: "Sep 23 - Oct 22",
            icon: "images/libra.png",
            prediction: "Balance is key today, Libra. A relationship may need your diplomatic touch. Financial gains are possible - but avoid impulsive purchases no matter how tempting.",
            luckyNumber: Math.floor(Math.random() * 10) + 1,
            mood: "Harmonious"
        },
        {
            sign: "Scorpio",
            dateRange: "Oct 23 - Nov 21",
            icon: "images/scorpio.png",
            prediction: "Your intensity attracts attention today, Scorpio. Secrets may come to light - handle them with care. Tonight is perfect for deep conversations with someone special.",
            luckyNumber: Math.floor(Math.random() * 10) + 1,
            mood: "Passionate"
        },
        {
            sign: "Sagittarius",
            dateRange: "Nov 22 - Dec 21",
            icon: "images/sagittarius.png",
            prediction: "Adventure calls, Sagittarius! Consider a short trip or learning something new. Your optimism is contagious - spread some joy to those around you today.",
            luckyNumber: Math.floor(Math.random() * 10) + 1,
            mood: "Optimistic"
        },
        {
            sign: "Capricorn",
            dateRange: "Dec 22 - Jan 19",
            icon: "images/capricorn.png",
            prediction: "Career matters take center stage, Capricorn. Your hard work is about to pay off. Don't forget to make time for family - they need your wisdom right now.",
            luckyNumber: Math.floor(Math.random() * 10) + 1,
            mood: "Ambitious"
        },
        {
            sign: "Aquarius",
            dateRange: "Jan 20 - Feb 18",
            icon: "images/aquarius.png",
            prediction: "Innovative ideas flow today, Aquarius. Share your unique perspective - others will appreciate it. A friendship may deepen in unexpected ways.",
            luckyNumber: Math.floor(Math.random() * 10) + 1,
            mood: "Inventive"
        },
        {
            sign: "Pisces",
            dateRange: "Feb 19 - Mar 20",
            icon: "images/pisces.png",
            prediction: "Your creativity peaks today, Pisces. Artistic pursuits bring joy and possibly profit. Pay attention to dreams - they may contain important messages.",
            luckyNumber: Math.floor(Math.random() * 10) + 1,
            mood: "Dreamy"
        }
    ];

    // Display horoscopes
    const horoscopesContainer = document.getElementById('horoscopes');
    
    horoscopes.forEach(horo => {
        const signCard = document.createElement('div');
        signCard.className = 'sign-card';
        
        signCard.innerHTML = `
            <div class="sign-header">
                <img src="${horo.icon}" alt="${horo.sign}" class="sign-icon">
                <div class="sign-title">
                    <h3>${horo.sign}</h3>
                    <p>${horo.dateRange}</p>
                </div>
            </div>
            <div class="sign-content">
                <p><strong>Prediction:</strong> ${horo.prediction}</p>
                <p><strong>Lucky Number:</strong> ${horo.luckyNumber}</p>
                <p><strong>Mood:</strong> ${horo.mood}</p>
            </div>
        `;
        
        horoscopesContainer.appendChild(signCard);
    });

    // Birthday form handler
    const birthdayForm = document.getElementById('birthday-form');
    const personalResult = document.getElementById('personal-result');
    
    birthdayForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const birthday = new Date(document.getElementById('birthday').value);
        const month = birthday.getMonth() + 1; // JavaScript months are 0-indexed
        const day = birthday.getDate();
        
        let zodiacSign = '';
        
        // Determine zodiac sign based on birthday
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            zodiacSign = 'Aries';
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            zodiacSign = 'Taurus';
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
            zodiacSign = 'Gemini';
        } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
            zodiacSign = 'Cancer';
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            zodiacSign = 'Leo';
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            zodiacSign = 'Virgo';
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
            zodiacSign = 'Libra';
        } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
            zodiacSign = 'Scorpio';
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            zodiacSign = 'Sagittarius';
        } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            zodiacSign = 'Capricorn';
        } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            zodiacSign = 'Aquarius';
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            zodiacSign = 'Pisces';
        }
        
        // Find the matching horoscope
        const personalHoroscope = horoscopes.find(h => h.sign === zodiacSign);
        
        if (personalHoroscope) {
            personalResult.innerHTML = `
                <h3>Your Zodiac Sign: ${zodiacSign}</h3>
                <p><strong>Today's Prediction:</strong> ${personalHoroscope.prediction}</p>
                <p><strong>Lucky Number:</strong> ${personalHoroscope.luckyNumber}</p>
                <p><strong>Suggested Mood:</strong> ${personalHoroscope.mood}</p>
            `;
            personalResult.style.display = 'block';
            personalResult.style.backgroundColor = '#0f3460';
            personalResult.style.border = '1px solid #2a3a5a';
        } else {
            personalResult.innerHTML = `<p>Could not determine your zodiac sign. Please check your birth date.</p>`;
            personalResult.style.display = 'block';
            personalResult.style.backgroundColor = '#3a1a2e';
        }
        
        // Scroll to the result
        personalResult.scrollIntoView({ behavior: 'smooth' });
    });
});
