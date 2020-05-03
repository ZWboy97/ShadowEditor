import BaseLoader from './BaseLoader';

/**
 * DRACOLoader
 * @author tengge / https://github.com/tengge1
 */
function DRACOLoader() {
    BaseLoader.call(this);
}

DRACOLoader.prototype = Object.create(BaseLoader.prototype);
DRACOLoader.prototype.constructor = DRACOLoader;

DRACOLoader.prototype.load = function (url) {
    return new Promise(resolve => {
        this.require('DRACOLoader').then(() => {
            var loader = new THREE.DRACOLoader();
            loader.setDecoderPath('assets/js/libs/draco/');

            loader.load(url, geometry => {
                geometry.computeVertexNormals();

                var material = new THREE.MeshStandardMaterial();
                var mesh = new THREE.Mesh(geometry, material);

                // TODO: 取消注释不能加载模型，不知道为什么。
                // loader.releaseDecoderModule();

                resolve(mesh);
            }, undefined, () => {
                resolve(null);
            });
        });
    });
};

export default DRACOLoader;