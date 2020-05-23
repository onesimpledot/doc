If needed, one may use the `<leaflet-map>` component of riba to display a map. It embeds a preconfigured leaflet.js map, which can be altered trough the given template or via its parameters. 

| argument | description | required |
|---|---|---|
| initial-lat | Latitude of the center of the map | :heavy_check_mark: |
| initial-lng | Longitude of the center of the map | :heavy_check_mark: |
| initial-zoom | Initial zoom of the map | no |
| tile-url | Tile url for leaflet to use, can change the looks of the map | no |


Currently there are two different html tags, the template may contain:

### `<icon>`:

The icon element represents a custom icon that can be used by a marker in the map.

Required arguments are:

| argument | description |
|---|---|
| name | Name to go by |
| icon-url | Url of the icon |
| shadow-url | Url of the icon shadow |
| icon-size | Pixel in the form of: `x, y` |
| icon-anchor | Pixel in the form of: `x, y` |
| shadow-size | Pixel in the form of: `x, y` |
| popup-anchor | Pixel in the form of: `x, y` |
| shadow-anchor | Pixel in the form of: `x, y` |


### `<marker>`:

The marker element represents a marker on the map.

Available arguments are:

| argument | description | required |
|---|---|---|
| lat | Latitude of the marker | :heavy_check_mark: |
| lng | Longitude of the marker | :heavy_check_mark: |
| open-by-default | Wether or not the popup should be open when the map is loaded | defaults to `false` |
| icon | Name of the icon to use | if not set, the default icon will be used |

Any given text in the innerHTML of the marker element is displayed in the popup.