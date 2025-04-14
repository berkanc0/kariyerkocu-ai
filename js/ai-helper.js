// Tüm sayfalarda çalışması için DOM yüklendiğinde tetiklenir
document.addEventListener("DOMContentLoaded", function () {
    // Meslek önerisi formu
    const careerForm = document.getElementById("careerForm");

    if (careerForm) {
        careerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const age = document.getElementById("age").value;
            const education = document.getElementById("education").value;
            const interests = document.getElementById("interests").value;

            const suggestion = `
                <h3>Yapay Zeka Önerisi:</h3>
                <p><strong>Yaş:</strong> ${age} | <strong>Eğitim:</strong> ${education}</p>
                <p><strong>İlgi Alanlarınız:</strong> ${interests}</p>
                <p><strong>Önerilen Meslekler:</strong> Veri Analisti, Grafik Tasarımcı, UX Uzmanı</p>
            `;

            document.getElementById("suggestionResult").innerHTML = suggestion;
        });
    }

    // CV değerlendirme formu
    const cvForm = document.getElementById("cvForm");

    if (cvForm) {
        cvForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const cvText = document.getElementById("cvText").value;

            const feedback = `
                <h3>Yapay Zeka CV Geri Bildirimi:</h3>
                <ul>
                    <li>Giriş kısmınız etkili, ama daha fazla hedef bilgisi eklenmeli.</li>
                    <li>Yetenekler kısmınız sade; örneklerle güçlendirin.</li>
                    <li>Projeleriniz varsa, mutlaka ekleyin.</li>
                    <li>İletişim bilgileriniz eksiksiz olmalı.</li>
                </ul>
            `;

            document.getElementById("cvResult").innerHTML = feedback;
        });
    }

    // Kariyer haritası formu
    const mapForm = document.getElementById("mapForm");

    if (mapForm) {
        mapForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const goal = document.getElementById("goal").value;
            const strengths = document.getElementById("strengths").value;
            const weaknesses = document.getElementById("weaknesses").value;

            const map = `
                <h3>Kariyer Haritan</h3>
                <div class="timeline">
                    <div class="step"><strong>Hedef:</strong> ${goal}</div>
                    <div class="step">1. Aşama: Güçlü yönlerini kullan – ${strengths}</div>
                    <div class="step">2. Aşama: Zayıf yönlerini geliştir – ${weaknesses}</div>
                    <div class="step">3. Aşama: Online kurslarla bilgi artır</div>
                    <div class="step">4. Aşama: Proje ve stajlarla deneyim kazan</div>
                    <div class="step">5. Aşama: CV güncelle, iş başvurularına başla</div>
                </div>
            `;

            document.getElementById("mapResult").innerHTML = map;
        });
    }
});
