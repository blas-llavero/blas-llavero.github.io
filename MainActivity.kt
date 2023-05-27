// Importa les classes necessàries.
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity

// Defineix la classe MainActivity que hereta de AppCompatActivity, que és una implementació de l'activitat base que suporta la biblioteca de compatibilitat d'Android.
class MainActivity : AppCompatActivity() {

    // Declara variables per a l'EditText i el botó.
        private lateinit var editText: EditText
            private lateinit var submitButton: Button

                // Aquesta funció s'executa quan es crea l'activitat.
                    override fun onCreate(savedInstanceState: Bundle?) {
                            super.onCreate(savedInstanceState)
                                    // Estableix el layout de l'activitat.
                                            setContentView(R.layout.activity_main)

                                                    // Troba i assigna el EditText i el botó segons les seves ID en el layout.
                                                            editText = findViewById(R.id.editText)
                                                                    submitButton = findViewById(R.id.submitButton)

                                                                            // Estableix un escoltador d'esdeveniments de clic per al botó.
                                                                                    submitButton.setOnClickListener(object : View.OnClickListener {
                                                                                                override fun onClick(v: View?) {
                                                                                                                // Quan es fa clic al botó, es recull el text de l'EditText.
                                                                                                                                val idea = editText.text.toString()
                                                                                                                                                // Aquí és on s'haurien de fer les crides a les APIs de ChatGPT i Wikimedia.
                                                                                                                                                            }
                                                                                                                                                                    })
                                                                                                                                                                        }
                                                                                                                                                                        }
                                                                                                                                                                        