/*global defineSuite*/
defineSuite([
             'DynamicScene/DynamicModel',
             'DynamicScene/ColorMaterialProperty',
             'DynamicScene/ConstantProperty',
             'Core/Color',
             'Core/Cartesian3'
         ], function(
             DynamicModel,
             ColorMaterialProperty,
             ConstantProperty,
             Color,
             Cartesian3) {
    "use strict";
    /*global jasmine,describe,xdescribe,it,xit,expect,beforeEach,afterEach,beforeAll,afterAll,spyOn,runs,waits,waitsFor*/

    it('merge assigns unassigned properties', function() {
        var source = new DynamicModel();
        source.uri = new ConstantProperty('');
        source.show = new ConstantProperty(true);
        source.scale = new ConstantProperty(1.0);
        source.minimumPixelSize = new ConstantProperty(2.0);

        var target = new DynamicModel();
        target.merge(source);

        expect(target.uri).toBe(source.uri);
        expect(target.show).toBe(source.show);
        expect(target.scale).toBe(source.scale);
        expect(target.minimumPixelSize).toBe(source.minimumPixelSize);
    });

    it('merge does not assign assigned properties', function() {
        var source = new DynamicModel();
        source.uri = new ConstantProperty('');
        source.show = new ConstantProperty(true);
        source.scale = new ConstantProperty(1.0);
        source.minimumPixelSize = new ConstantProperty(2.0);

        var uri = new ConstantProperty('');
        var show = new ConstantProperty(true);
        var scale = new ConstantProperty(1.0);
        var minimumPixelSize = new ConstantProperty(2.0);

        var target = new DynamicModel();
        target.uri = uri;
        target.show = show;
        target.scale = scale;
        target.minimumPixelSize = minimumPixelSize;

        target.merge(source);

        expect(target.uri).toBe(uri);
        expect(target.show).toBe(show);
        expect(target.scale).toBe(scale);
        expect(target.minimumPixelSize).toBe(minimumPixelSize);
    });

    it('clone works', function() {
        var source = new DynamicModel();
        source.uri = new ConstantProperty('');
        source.show = new ConstantProperty(true);
        source.scale = new ConstantProperty(1.0);
        source.minimumPixelSize = new ConstantProperty(2.0);

        var result = source.clone();
        expect(result.uri).toBe(source.uri);
        expect(result.show).toBe(source.show);
        expect(result.scale).toBe(source.scale);
        expect(result.minimumPixelSize).toBe(source.minimumPixelSize);
    });

    it('merge throws if source undefined', function() {
        var target = new DynamicModel();
        expect(function() {
            target.merge(undefined);
        }).toThrow();
    });
});