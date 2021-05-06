/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Title = string;
export type TypeDeclaration = string | string[];
export type Description = string;
export type AnyUri = string;
export type Subprotocol = "longpoll" | "websub" | "sse";
export type Security = string[] | string;
export type Scopes = string[] | string;
export type LinkElement = BaseLinkElement & {
  [k: string]: unknown;
} & {
  [k: string]: unknown;
};
export type IconLinkElement = BaseLinkElement & {
  rel?: "icon";
  sizes?: string;
  [k: string]: unknown;
};
export type SecurityScheme =
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme: "nosec";
      [k: string]: unknown;
    }
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme: "combo";
      oneOf?: [string, string, ...string[]];
      [k: string]: unknown;
    }
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme: "combo";
      allOf?: [string, string, ...string[]];
      [k: string]: unknown;
    }
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme: "basic";
      in?: "header" | "query" | "body" | "cookie";
      name?: string;
      [k: string]: unknown;
    }
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme: "digest";
      qop?: "auth" | "auth-int";
      in?: "header" | "query" | "body" | "cookie";
      name?: string;
      [k: string]: unknown;
    }
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme: "apikey";
      in?: "header" | "query" | "body" | "cookie";
      name?: string;
      [k: string]: unknown;
    }
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme: "bearer";
      authorization?: AnyUri;
      alg?: string;
      format?: string;
      in?: "header" | "query" | "body" | "cookie";
      name?: string;
      [k: string]: unknown;
    }
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme: "psk";
      identity?: string;
      [k: string]: unknown;
    }
  | {
      "@type"?: TypeDeclaration;
      description?: Description;
      descriptions?: Descriptions;
      proxy?: AnyUri;
      scheme: "oauth2";
      authorization?: AnyUri;
      token?: AnyUri;
      refresh?: AnyUri;
      scopes?: string[] | string;
      flow?: "code";
      [k: string]: unknown;
    };
export type ThingContext =
  | []
  | [
      ThingContextW3CUri,
      ...(
        | AnyUri
        | {
            [k: string]: unknown;
          }
      )[]
    ]
  | ThingContextW3CUri;
export type ThingContextW3CUri = "https://www.w3.org/2019/wot/td/v1" | "http://www.w3.org/ns/td";

/**
 * JSON Schema for validating TD instances against the TD model. TD instances can be with or without terms that have default values
 */
export interface ThingDescription {
  id?: string;
  title: Title;
  titles?: Titles;
  properties?: {
    [k: string]: PropertyElement;
  };
  actions?: {
    [k: string]: ActionElement;
  };
  events?: {
    [k: string]: EventElement;
  };
  description?: Description;
  descriptions?: Descriptions;
  version?: {
    instance: string;
    [k: string]: unknown;
  };
  links?: (LinkElement | IconLinkElement)[];
  forms?: [FormElementRoot, ...FormElementRoot[]];
  base?: AnyUri;
  securityDefinitions: {
    [k: string]: SecurityScheme;
  };
  support?: AnyUri;
  created?: string;
  modified?: string;
  security: string | [string, ...string[]];
  "@type"?: TypeDeclaration;
  "@context": ThingContext;
  [k: string]: unknown;
}
export interface Titles {
  [k: string]: string;
}
export interface PropertyElement {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  title?: Title;
  titles?: Titles;
  forms: [FormElementProperty, ...FormElementProperty[]];
  uriVariables?: {
    [k: string]: DataSchema;
  };
  observable?: boolean;
  writeOnly?: boolean;
  readOnly?: boolean;
  oneOf?: DataSchema[];
  unit?: string;
  enum?: [unknown, ...unknown[]];
  format?: string;
  const?: unknown;
  type?: "boolean" | "integer" | "number" | "string" | "object" | "array" | "null";
  items?: DataSchema | DataSchema[];
  maxItems?: number;
  minItems?: number;
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  multipleOf?: number;
  properties?: {
    [k: string]: DataSchema;
  };
  required?: string[];
  [k: string]: unknown;
}
export interface Descriptions {
  [k: string]: string;
}
export interface FormElementProperty {
  op?:
    | ("readproperty" | "writeproperty" | "observeproperty" | "unobserveproperty")
    | ("readproperty" | "writeproperty" | "observeproperty" | "unobserveproperty")[];
  href: AnyUri;
  contentType?: string;
  contentCoding?: string;
  subprotocol?: Subprotocol;
  security?: Security;
  scopes?: Scopes;
  response?: {
    contentType?: string;
    [k: string]: unknown;
  };
  additionalResponses?: {
    contentType?: string;
    schema?: {
      [k: string]: DataSchema;
    };
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
export interface DataSchema {
  "@type"?: TypeDeclaration;
  description?: Description;
  title?: Title;
  descriptions?: Descriptions;
  titles?: Titles;
  writeOnly?: boolean;
  readOnly?: boolean;
  oneOf?: DataSchema[];
  unit?: string;
  enum?: [unknown, ...unknown[]];
  format?: string;
  const?: unknown;
  contentEncoding?: string;
  contentMediaType?: string;
  type?: "boolean" | "integer" | "number" | "string" | "object" | "array" | "null";
  items?: DataSchema | DataSchema[];
  maxItems?: number;
  minItems?: number;
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  multipleOf?: number;
  properties?: {
    [k: string]: DataSchema;
  };
  required?: string[];
  [k: string]: unknown;
}
export interface ActionElement {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  title?: Title;
  titles?: Titles;
  forms: [FormElementAction, ...FormElementAction[]];
  uriVariables?: {
    [k: string]: DataSchema;
  };
  input?: DataSchema;
  output?: DataSchema;
  safe?: boolean;
  idempotent?: boolean;
  [k: string]: unknown;
}
export interface FormElementAction {
  op?: "invokeaction" | "invokeaction"[];
  href: AnyUri;
  contentType?: string;
  contentCoding?: string;
  subprotocol?: Subprotocol;
  security?: Security;
  scopes?: Scopes;
  response?: {
    contentType?: string;
    [k: string]: unknown;
  };
  additionalResponses?: {
    contentType?: string;
    schema?: {
      [k: string]: DataSchema;
    };
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
export interface EventElement {
  "@type"?: TypeDeclaration;
  description?: Description;
  descriptions?: Descriptions;
  title?: Title;
  titles?: Titles;
  forms: [FormElementEvent, ...FormElementEvent[]];
  uriVariables?: {
    [k: string]: DataSchema;
  };
  subscription?: DataSchema;
  data?: DataSchema;
  cancellation?: DataSchema;
  [k: string]: unknown;
}
export interface FormElementEvent {
  op?: ("subscribeevent" | "unsubscribeevent") | ("subscribeevent" | "unsubscribeevent")[];
  href: AnyUri;
  contentType?: string;
  contentCoding?: string;
  subprotocol?: Subprotocol;
  security?: Security;
  scopes?: Scopes;
  response?: {
    contentType?: string;
    [k: string]: unknown;
  };
  additionalResponses?: {
    contentType?: string;
    schema?: {
      [k: string]: DataSchema;
    };
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
export interface BaseLinkElement {
  href: AnyUri;
  type?: string;
  rel?: string;
  anchor?: AnyUri;
  [k: string]: unknown;
}
export interface FormElementRoot {
  op?:
    | (
        | "readallproperties"
        | "writeallproperties"
        | "readmultipleproperties"
        | "writemultipleproperties"
        | "observeallproperties"
        | "unobserveallproperties"
      )
    | (
        | "readallproperties"
        | "writeallproperties"
        | "readmultipleproperties"
        | "writemultipleproperties"
        | "observeallproperties"
        | "unobserveallproperties"
      )[];
  href: AnyUri;
  contentType?: string;
  contentCoding?: string;
  subprotocol?: Subprotocol;
  security?: Security;
  scopes?: Scopes;
  response?: {
    contentType?: string;
    [k: string]: unknown;
  };
  additionalResponses?: {
    contentType?: string;
    schema?: {
      [k: string]: DataSchema;
    };
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
