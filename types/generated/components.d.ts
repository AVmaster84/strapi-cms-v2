import type { Schema, Struct } from '@strapi/strapi';

export interface ProductAttribute extends Struct.ComponentSchema {
  collectionName: 'components_product_attributes';
  info: {
    displayName: 'Attribute';
  };
  attributes: {
    Key: Schema.Attribute.String;
    Value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.attribute': ProductAttribute;
    }
  }
}
