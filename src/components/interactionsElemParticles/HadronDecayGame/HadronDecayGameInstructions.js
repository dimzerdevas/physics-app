import React from 'react';
import HadronDecay from './hadronDecay'

function HadronDecayGameInstructions() {
    return (
        <div className="hadron-instructions-container">
            <div>
                <p>Διαλεξε μια απο τις διασπασεις που σου επιτρεπεται στο δεξι μερος της οθονης
                (...) και της αλληλεπίδρασης των κουάρκ μεταξύ τους.</p>
                <p>Η διάσπαση γίνεται ακολουθώντας τα βήματα</p>
                <ol>
                    <li>Επιλέγεις τα κουαρκ(...)</li>
                    <li>Ενεργοποιείς ένα ή περισσότερα (...)</li>
                    <li>Από έναν κατάλογο πολλαπλής (...)</li>
                    <li>Στρέφεις την κορυφή σύμφωνα (...)</li>
                    <li>Επαναλαμβανεις βήμα 3 και 4 όσες φορές (...)</li>
                    <li>Εαν στα σωματίδια υπάρχουν κουάρκ (...)</li>
                    <li>Αν θελεις βλέπεις όλη την διαδικασία της διάσπασης</li>
                </ol>
            </div>
            <div className="hadron-instructions__decay-list">
                <div>
                    <input type="radio" />
                    <label for="male">n <span>&#8594;</span> p e<sup>-</sup> <span style={{ "text-decoration": "overline" }}>v</span><sub>e</sub></label>
                </div>
                <div>
                    <input type="radio" />
                    <label for="male">Λ <span>&#8594;</span> p π<sup>-</sup></label>
                </div>
                <div>
                    <input type="radio" />
                    <label for="male">Σ<sup>-</sup> <span>&#8594;</span> n π<sup>-</sup></label>
                </div>
                <div>
                    <input type="radio" />
                    <label for="male">Ω <span>&#8594;</span> Λ Κ<sup>-</sup></label>
                </div>
                <div>
                    <input type="radio" />
                    <label for="male">Κ<sup>+</sup> <span>&#8594;</span> μ<sup>+</sup> ν<sub>μ</sub></label>
                </div>
                <div>
                    <input type="radio" />
                    <label for="male"> π<sup>+</sup> <span>&#8594;</span> μ<sup>+</sup> ν<sub>μ</sub></label>
                </div>

            </div>
        </div >)
}

export default HadronDecayGameInstructions;