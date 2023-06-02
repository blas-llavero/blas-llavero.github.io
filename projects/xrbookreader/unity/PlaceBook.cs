// Importem les classes de Unity necessàries.
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

// Declarem la classe PlaceBook, que hereta de MonoBehaviour per a poder-se usar com a component en un GameObject.
public class PlaceBook : MonoBehaviour
{
    // Declarem el ARRaycastManager, que ens permet fer "Raycasts" a la realitat augmentada,
    // i el prefabricat del llibre que volem posicionar.
    public ARRaycastManager raycastManager;
    public GameObject bookPrefab;
    private GameObject bookInstance;

    // Unity crida aquesta funció cada frame.
    void Update()
    {
        // Comprovem si l'usuari està tocant la pantalla.
        if (Input.touchCount > 0)
        {
            // Obtenim el primer toc (index 0).
            Touch touch = Input.GetTouch(0);

            // Comprovem si el toc acaba de començar.
            if (touch.phase == TouchPhase.Began)
            {
                // Creem una llista per a emmagatzemar els resultats del Raycast.
                List<ARRaycastHit> hits = new List<ARRaycastHit>();

                // Fem un Raycast des de la posició del toc. Si colpeja un plane, afegim el resultat a la llista de hits.
                if (raycastManager.Raycast(touch.position, hits, TrackableType.PlaneWithinPolygon))
                {
                    // Obtenim la pose del primer hit (index 0), que conté la posició i la rotació.
                    Pose pose = hits[0].pose;

                    // Si encara no hem creat el llibre...
                    if (bookInstance == null)
                    {
                        // ...creem una nova instància del prefabricat del llibre en la posició i rotació de la pose.
                        bookInstance = Instantiate(bookPrefab, pose.position, pose.rotation);
                    }
                    else
                    {
                        // Si ja hem creat el llibre, simplement actualitzem la seva posició i rotació.
                        bookInstance.transform.position = pose.position;
                        bookInstance.transform.rotation = pose.rotation;
                    }
                }
            }
        }
    }
}
