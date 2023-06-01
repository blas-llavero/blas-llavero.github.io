// Importem les classes bàsiques de Unity.
using UnityEngine;

// Declarem la classe Book, que hereta de MonoBehaviour per a poder-se usar com a component en un GameObject.
public class Book : MonoBehaviour
{
    // Declarem el prefabricat que usarem per a cada pàgina i el número total de pàgines.
    public GameObject pagePrefab;
    public int numberOfPages;

    // Declarem un array per emmagatzemar els GameObjects de cada pàgina.
    private GameObject[] pages;

    // Unity crida aquesta funció quan el joc comença.
    void Start()
    {
        // Inicialitzem l'array de pàgines amb el número correcte de pàgines.
        pages = new GameObject[numberOfPages];

        // Creem cada pàgina, una per una.
        for (int i = 0; i < numberOfPages; i++)
        {
            // Creem una nova instància del prefabricat de pàgina, i la fem filla de l'objecte llibre.
            GameObject page = Instantiate(pagePrefab, transform);
            
            // Establim la posició local de la pàgina perquè estigui lleugerament a la dreta de la pàgina anterior.
            // Així, si mires el llibre des de dalt, veuràs les pàgines una al costat de l'altra.
            page.transform.localPosition = new Vector3(i * 0.1f, 0, 0);
            
            // Assignem un nom a la pàgina per a facilitar la depuració.
            page.name = "Page " + (i + 1);
            
            // Afegim la pàgina a l'array.
            pages[i] = page;
        }

        // Desactivem totes les pàgines, excepte la primera.
        // Quan un GameObject està desactivat, no es renderitza a la pantalla.
        for (int i = 1; i < pages.Length; i++)
        {
            pages[i].SetActive(false);
        }
    }

    // Aquesta funció ens permet obtenir una referència a una pàgina específica del llibre.
    public GameObject GetPage(int index)
    {
        // Comprovem que l'índex estigui dins dels límits de l'array.
        if (index >= 0 && index < pages.Length)
        {
            // Si l'índex és vàlid, retornem la pàgina corresponent.
            return pages[index];
        }
        else
        {
            // Si l'índex no és vàlid, mostrem un missatge d'error i retornem null.
            Debug.LogError("Invalid page index: " + index);
            return null;
        }
    }
}
