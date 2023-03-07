import Feature from "ol/Feature.js";
import Map from "ol/Map.js";
import Point from "ol/geom/Point.js";
import View from "ol/View.js";
import { Style, Fill, Circle } from 'ol/style'
import { OSM, Vector as VectorSource } from "ol/source.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import { fromLonLat } from "ol/proj.js";

// Crar el mapa en la zona deseada
const tileLayer = new TileLayer({
  source: new OSM({
    wrapX: false,
  }),
});

const source = new VectorSource({
  wrapX: false,
});
const vector = new VectorLayer({
  source: source,
});

var x = -101.6899617;
var y = 21.140165;
var center1 = fromLonLat([x, y]);

const map = new Map({
  layers: [tileLayer, vector],
  target: "map",
  view: new View({
    center: center1,
    zoom: 12,
    multiWorld: true,
  }),
});

// Crear estilo para el punto
const markerStyle1 = new Style({
  image: new Circle({
    radius: 6,
    fill: new Fill({
      color: 'blue'
    })
  })
});

// Crear punto en el mapa de la ubicacion actual del dispositivo
agregarMarcadorConLaUbicacionActual();
function agregarMarcadorConLaUbicacionActual() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const x = position.coords.longitude;
      const y = position.coords.latitude;
      const geom = new Point(fromLonLat([x, y]));
      const feature = new Feature(geom);
      feature.setStyle(markerStyle1);
      source.addFeature(feature);
    });
  }
}

// Obtener los parametros de la URL del formulario
const parametros = new URLSearchParams(window.location.search);
const nombre = parametros.get("nombre");
const latitud = parametros.get("latitud");
const longitud = parametros.get("longitud");

document.getElementById("nombre").textContent = nombre;
document.getElementById("latitud").textContent = latitud;
document.getElementById("longitud").textContent = longitud;

// Crear estilo para el punto
const markerStyle2 = new Style({
  image: new Circle({
    radius: 6,
    fill: new Fill({
      color: 'red'
    })
  })
});

// Crear punto en el mapa con los datos del formulario
agregarMarcadorConElFormulario(longitud, latitud);
function agregarMarcadorConElFormulario(longitud, latitud) {
  const x = longitud;
  const y = latitud;
  const geom = new Point(fromLonLat([x, y]));
  const feature = new Feature(geom);
  feature.setStyle(markerStyle2);
  source.addFeature(feature);
}

