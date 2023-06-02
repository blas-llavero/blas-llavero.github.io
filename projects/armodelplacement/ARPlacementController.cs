using System.Collections.Generic;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

public class ARPlacementController : MonoBehaviour
{
    // Objecte que es col·locarà
    [SerializeField]
    private GameObject objectToPlace;

    private ARRaycastManager arRaycastManager;
    private List<ARRaycastHit> arRaycastHits = new List<ARRaycastHit>();
    private bool isObjectPlaced = false;

    void Start()
    {
        // Obté la referència a l'ARRaycastManager
        arRaycastManager = GetComponent<ARRaycastManager>();
    }

    void Update()
    {
        // Comprova si hi ha un toque en la pantalla
        if (!isObjectPlaced && Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
        {
            Vector2 touchPosition = Input.GetTouch(0).position;

            // Realitza un raig AR per detectar un pla
            if (arRaycastManager.Raycast(touchPosition, arRaycastHits, TrackableType.PlaneWithinPolygon))
            {
                Pose hitPose = arRaycastHits[0].pose;

                // Col·loca l'objecte en la posició i orientació de la detecció del pla
                PlaceObject(hitPose.position, hitPose.rotation);
            }
        }
    }

    private void PlaceObject(Vector3 position, Quaternion rotation)
    {
        // Activa l'objecte que es col·locarà
        objectToPlace.SetActive(true);

        // Assigna la posició i orientació de l'objecte
        objectToPlace.transform.position = position;
        objectToPlace.transform.rotation = rotation;

        // Marca l'objecte com a col·locat
        isObjectPlaced = true;
    }
}
