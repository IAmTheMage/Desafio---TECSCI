
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Plant
 * 
 */
export type Plant = $Result.DefaultSelection<Prisma.$PlantPayload>
/**
 * Model Inverter
 * 
 */
export type Inverter = $Result.DefaultSelection<Prisma.$InverterPayload>
/**
 * Model Metric
 * 
 */
export type Metric = $Result.DefaultSelection<Prisma.$MetricPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Plants
 * const plants = await prisma.plant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Plants
   * const plants = await prisma.plant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.plant`: Exposes CRUD operations for the **Plant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plants
    * const plants = await prisma.plant.findMany()
    * ```
    */
  get plant(): Prisma.PlantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inverter`: Exposes CRUD operations for the **Inverter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inverters
    * const inverters = await prisma.inverter.findMany()
    * ```
    */
  get inverter(): Prisma.InverterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metric`: Exposes CRUD operations for the **Metric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metric.findMany()
    * ```
    */
  get metric(): Prisma.MetricDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Plant: 'Plant',
    Inverter: 'Inverter',
    Metric: 'Metric'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "plant" | "inverter" | "metric"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Plant: {
        payload: Prisma.$PlantPayload<ExtArgs>
        fields: Prisma.PlantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          findFirst: {
            args: Prisma.PlantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          findMany: {
            args: Prisma.PlantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>[]
          }
          create: {
            args: Prisma.PlantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          createMany: {
            args: Prisma.PlantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>[]
          }
          delete: {
            args: Prisma.PlantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          update: {
            args: Prisma.PlantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          deleteMany: {
            args: Prisma.PlantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>[]
          }
          upsert: {
            args: Prisma.PlantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          aggregate: {
            args: Prisma.PlantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlant>
          }
          groupBy: {
            args: Prisma.PlantGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantCountArgs<ExtArgs>
            result: $Utils.Optional<PlantCountAggregateOutputType> | number
          }
        }
      }
      Inverter: {
        payload: Prisma.$InverterPayload<ExtArgs>
        fields: Prisma.InverterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InverterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InverterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InverterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InverterPayload>
          }
          findFirst: {
            args: Prisma.InverterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InverterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InverterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InverterPayload>
          }
          findMany: {
            args: Prisma.InverterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InverterPayload>[]
          }
          create: {
            args: Prisma.InverterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InverterPayload>
          }
          createMany: {
            args: Prisma.InverterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InverterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InverterPayload>[]
          }
          delete: {
            args: Prisma.InverterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InverterPayload>
          }
          update: {
            args: Prisma.InverterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InverterPayload>
          }
          deleteMany: {
            args: Prisma.InverterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InverterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InverterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InverterPayload>[]
          }
          upsert: {
            args: Prisma.InverterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InverterPayload>
          }
          aggregate: {
            args: Prisma.InverterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInverter>
          }
          groupBy: {
            args: Prisma.InverterGroupByArgs<ExtArgs>
            result: $Utils.Optional<InverterGroupByOutputType>[]
          }
          count: {
            args: Prisma.InverterCountArgs<ExtArgs>
            result: $Utils.Optional<InverterCountAggregateOutputType> | number
          }
        }
      }
      Metric: {
        payload: Prisma.$MetricPayload<ExtArgs>
        fields: Prisma.MetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findFirst: {
            args: Prisma.MetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findMany: {
            args: Prisma.MetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          create: {
            args: Prisma.MetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          createMany: {
            args: Prisma.MetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          delete: {
            args: Prisma.MetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          update: {
            args: Prisma.MetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          deleteMany: {
            args: Prisma.MetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          upsert: {
            args: Prisma.MetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          aggregate: {
            args: Prisma.MetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetric>
          }
          groupBy: {
            args: Prisma.MetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricCountArgs<ExtArgs>
            result: $Utils.Optional<MetricCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    plant?: PlantOmit
    inverter?: InverterOmit
    metric?: MetricOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlantCountOutputType
   */

  export type PlantCountOutputType = {
    inverters: number
  }

  export type PlantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inverters?: boolean | PlantCountOutputTypeCountInvertersArgs
  }

  // Custom InputTypes
  /**
   * PlantCountOutputType without action
   */
  export type PlantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantCountOutputType
     */
    select?: PlantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantCountOutputType without action
   */
  export type PlantCountOutputTypeCountInvertersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InverterWhereInput
  }


  /**
   * Count Type InverterCountOutputType
   */

  export type InverterCountOutputType = {
    metrics: number
  }

  export type InverterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | InverterCountOutputTypeCountMetricsArgs
  }

  // Custom InputTypes
  /**
   * InverterCountOutputType without action
   */
  export type InverterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InverterCountOutputType
     */
    select?: InverterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InverterCountOutputType without action
   */
  export type InverterCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Plant
   */

  export type AggregatePlant = {
    _count: PlantCountAggregateOutputType | null
    _avg: PlantAvgAggregateOutputType | null
    _sum: PlantSumAggregateOutputType | null
    _min: PlantMinAggregateOutputType | null
    _max: PlantMaxAggregateOutputType | null
  }

  export type PlantAvgAggregateOutputType = {
    id: number | null
  }

  export type PlantSumAggregateOutputType = {
    id: number | null
  }

  export type PlantMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    createdAt: Date | null
  }

  export type PlantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    createdAt: Date | null
  }

  export type PlantCountAggregateOutputType = {
    id: number
    name: number
    location: number
    createdAt: number
    _all: number
  }


  export type PlantAvgAggregateInputType = {
    id?: true
  }

  export type PlantSumAggregateInputType = {
    id?: true
  }

  export type PlantMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
  }

  export type PlantMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
  }

  export type PlantCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
    _all?: true
  }

  export type PlantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plant to aggregate.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plants
    **/
    _count?: true | PlantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantMaxAggregateInputType
  }

  export type GetPlantAggregateType<T extends PlantAggregateArgs> = {
        [P in keyof T & keyof AggregatePlant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlant[P]>
      : GetScalarType<T[P], AggregatePlant[P]>
  }




  export type PlantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantWhereInput
    orderBy?: PlantOrderByWithAggregationInput | PlantOrderByWithAggregationInput[]
    by: PlantScalarFieldEnum[] | PlantScalarFieldEnum
    having?: PlantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantCountAggregateInputType | true
    _avg?: PlantAvgAggregateInputType
    _sum?: PlantSumAggregateInputType
    _min?: PlantMinAggregateInputType
    _max?: PlantMaxAggregateInputType
  }

  export type PlantGroupByOutputType = {
    id: number
    name: string
    location: string
    createdAt: Date
    _count: PlantCountAggregateOutputType | null
    _avg: PlantAvgAggregateOutputType | null
    _sum: PlantSumAggregateOutputType | null
    _min: PlantMinAggregateOutputType | null
    _max: PlantMaxAggregateOutputType | null
  }

  type GetPlantGroupByPayload<T extends PlantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantGroupByOutputType[P]>
            : GetScalarType<T[P], PlantGroupByOutputType[P]>
        }
      >
    >


  export type PlantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
    inverters?: boolean | Plant$invertersArgs<ExtArgs>
    _count?: boolean | PlantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plant"]>

  export type PlantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["plant"]>

  export type PlantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["plant"]>

  export type PlantSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
  }

  export type PlantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "createdAt", ExtArgs["result"]["plant"]>
  export type PlantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inverters?: boolean | Plant$invertersArgs<ExtArgs>
    _count?: boolean | PlantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plant"
    objects: {
      inverters: Prisma.$InverterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string
      createdAt: Date
    }, ExtArgs["result"]["plant"]>
    composites: {}
  }

  type PlantGetPayload<S extends boolean | null | undefined | PlantDefaultArgs> = $Result.GetResult<Prisma.$PlantPayload, S>

  type PlantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantCountAggregateInputType | true
    }

  export interface PlantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plant'], meta: { name: 'Plant' } }
    /**
     * Find zero or one Plant that matches the filter.
     * @param {PlantFindUniqueArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantFindUniqueArgs>(args: SelectSubset<T, PlantFindUniqueArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantFindUniqueOrThrowArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindFirstArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantFindFirstArgs>(args?: SelectSubset<T, PlantFindFirstArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindFirstOrThrowArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plants
     * const plants = await prisma.plant.findMany()
     * 
     * // Get first 10 Plants
     * const plants = await prisma.plant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantWithIdOnly = await prisma.plant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantFindManyArgs>(args?: SelectSubset<T, PlantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plant.
     * @param {PlantCreateArgs} args - Arguments to create a Plant.
     * @example
     * // Create one Plant
     * const Plant = await prisma.plant.create({
     *   data: {
     *     // ... data to create a Plant
     *   }
     * })
     * 
     */
    create<T extends PlantCreateArgs>(args: SelectSubset<T, PlantCreateArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plants.
     * @param {PlantCreateManyArgs} args - Arguments to create many Plants.
     * @example
     * // Create many Plants
     * const plant = await prisma.plant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantCreateManyArgs>(args?: SelectSubset<T, PlantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plants and returns the data saved in the database.
     * @param {PlantCreateManyAndReturnArgs} args - Arguments to create many Plants.
     * @example
     * // Create many Plants
     * const plant = await prisma.plant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plants and only return the `id`
     * const plantWithIdOnly = await prisma.plant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plant.
     * @param {PlantDeleteArgs} args - Arguments to delete one Plant.
     * @example
     * // Delete one Plant
     * const Plant = await prisma.plant.delete({
     *   where: {
     *     // ... filter to delete one Plant
     *   }
     * })
     * 
     */
    delete<T extends PlantDeleteArgs>(args: SelectSubset<T, PlantDeleteArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plant.
     * @param {PlantUpdateArgs} args - Arguments to update one Plant.
     * @example
     * // Update one Plant
     * const plant = await prisma.plant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantUpdateArgs>(args: SelectSubset<T, PlantUpdateArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plants.
     * @param {PlantDeleteManyArgs} args - Arguments to filter Plants to delete.
     * @example
     * // Delete a few Plants
     * const { count } = await prisma.plant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantDeleteManyArgs>(args?: SelectSubset<T, PlantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plants
     * const plant = await prisma.plant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantUpdateManyArgs>(args: SelectSubset<T, PlantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plants and returns the data updated in the database.
     * @param {PlantUpdateManyAndReturnArgs} args - Arguments to update many Plants.
     * @example
     * // Update many Plants
     * const plant = await prisma.plant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plants and only return the `id`
     * const plantWithIdOnly = await prisma.plant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlantUpdateManyAndReturnArgs>(args: SelectSubset<T, PlantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plant.
     * @param {PlantUpsertArgs} args - Arguments to update or create a Plant.
     * @example
     * // Update or create a Plant
     * const plant = await prisma.plant.upsert({
     *   create: {
     *     // ... data to create a Plant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plant we want to update
     *   }
     * })
     */
    upsert<T extends PlantUpsertArgs>(args: SelectSubset<T, PlantUpsertArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantCountArgs} args - Arguments to filter Plants to count.
     * @example
     * // Count the number of Plants
     * const count = await prisma.plant.count({
     *   where: {
     *     // ... the filter for the Plants we want to count
     *   }
     * })
    **/
    count<T extends PlantCountArgs>(
      args?: Subset<T, PlantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlantAggregateArgs>(args: Subset<T, PlantAggregateArgs>): Prisma.PrismaPromise<GetPlantAggregateType<T>>

    /**
     * Group by Plant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantGroupByArgs['orderBy'] }
        : { orderBy?: PlantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plant model
   */
  readonly fields: PlantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inverters<T extends Plant$invertersArgs<ExtArgs> = {}>(args?: Subset<T, Plant$invertersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plant model
   */
  interface PlantFieldRefs {
    readonly id: FieldRef<"Plant", 'Int'>
    readonly name: FieldRef<"Plant", 'String'>
    readonly location: FieldRef<"Plant", 'String'>
    readonly createdAt: FieldRef<"Plant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plant findUnique
   */
  export type PlantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where: PlantWhereUniqueInput
  }

  /**
   * Plant findUniqueOrThrow
   */
  export type PlantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where: PlantWhereUniqueInput
  }

  /**
   * Plant findFirst
   */
  export type PlantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plants.
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plants.
     */
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }

  /**
   * Plant findFirstOrThrow
   */
  export type PlantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plants.
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plants.
     */
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }

  /**
   * Plant findMany
   */
  export type PlantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plants to fetch.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plants.
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }

  /**
   * Plant create
   */
  export type PlantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * The data needed to create a Plant.
     */
    data: XOR<PlantCreateInput, PlantUncheckedCreateInput>
  }

  /**
   * Plant createMany
   */
  export type PlantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plants.
     */
    data: PlantCreateManyInput | PlantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plant createManyAndReturn
   */
  export type PlantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * The data used to create many Plants.
     */
    data: PlantCreateManyInput | PlantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plant update
   */
  export type PlantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * The data needed to update a Plant.
     */
    data: XOR<PlantUpdateInput, PlantUncheckedUpdateInput>
    /**
     * Choose, which Plant to update.
     */
    where: PlantWhereUniqueInput
  }

  /**
   * Plant updateMany
   */
  export type PlantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plants.
     */
    data: XOR<PlantUpdateManyMutationInput, PlantUncheckedUpdateManyInput>
    /**
     * Filter which Plants to update
     */
    where?: PlantWhereInput
    /**
     * Limit how many Plants to update.
     */
    limit?: number
  }

  /**
   * Plant updateManyAndReturn
   */
  export type PlantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * The data used to update Plants.
     */
    data: XOR<PlantUpdateManyMutationInput, PlantUncheckedUpdateManyInput>
    /**
     * Filter which Plants to update
     */
    where?: PlantWhereInput
    /**
     * Limit how many Plants to update.
     */
    limit?: number
  }

  /**
   * Plant upsert
   */
  export type PlantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * The filter to search for the Plant to update in case it exists.
     */
    where: PlantWhereUniqueInput
    /**
     * In case the Plant found by the `where` argument doesn't exist, create a new Plant with this data.
     */
    create: XOR<PlantCreateInput, PlantUncheckedCreateInput>
    /**
     * In case the Plant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantUpdateInput, PlantUncheckedUpdateInput>
  }

  /**
   * Plant delete
   */
  export type PlantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter which Plant to delete.
     */
    where: PlantWhereUniqueInput
  }

  /**
   * Plant deleteMany
   */
  export type PlantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plants to delete
     */
    where?: PlantWhereInput
    /**
     * Limit how many Plants to delete.
     */
    limit?: number
  }

  /**
   * Plant.inverters
   */
  export type Plant$invertersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterInclude<ExtArgs> | null
    where?: InverterWhereInput
    orderBy?: InverterOrderByWithRelationInput | InverterOrderByWithRelationInput[]
    cursor?: InverterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InverterScalarFieldEnum | InverterScalarFieldEnum[]
  }

  /**
   * Plant without action
   */
  export type PlantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
  }


  /**
   * Model Inverter
   */

  export type AggregateInverter = {
    _count: InverterCountAggregateOutputType | null
    _avg: InverterAvgAggregateOutputType | null
    _sum: InverterSumAggregateOutputType | null
    _min: InverterMinAggregateOutputType | null
    _max: InverterMaxAggregateOutputType | null
  }

  export type InverterAvgAggregateOutputType = {
    id: number | null
    capacityKW: number | null
    plantId: number | null
  }

  export type InverterSumAggregateOutputType = {
    id: number | null
    capacityKW: number | null
    plantId: number | null
  }

  export type InverterMinAggregateOutputType = {
    id: number | null
    model: string | null
    capacityKW: number | null
    installedAt: Date | null
    plantId: number | null
  }

  export type InverterMaxAggregateOutputType = {
    id: number | null
    model: string | null
    capacityKW: number | null
    installedAt: Date | null
    plantId: number | null
  }

  export type InverterCountAggregateOutputType = {
    id: number
    model: number
    capacityKW: number
    installedAt: number
    plantId: number
    _all: number
  }


  export type InverterAvgAggregateInputType = {
    id?: true
    capacityKW?: true
    plantId?: true
  }

  export type InverterSumAggregateInputType = {
    id?: true
    capacityKW?: true
    plantId?: true
  }

  export type InverterMinAggregateInputType = {
    id?: true
    model?: true
    capacityKW?: true
    installedAt?: true
    plantId?: true
  }

  export type InverterMaxAggregateInputType = {
    id?: true
    model?: true
    capacityKW?: true
    installedAt?: true
    plantId?: true
  }

  export type InverterCountAggregateInputType = {
    id?: true
    model?: true
    capacityKW?: true
    installedAt?: true
    plantId?: true
    _all?: true
  }

  export type InverterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inverter to aggregate.
     */
    where?: InverterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inverters to fetch.
     */
    orderBy?: InverterOrderByWithRelationInput | InverterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InverterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inverters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inverters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inverters
    **/
    _count?: true | InverterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InverterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InverterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InverterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InverterMaxAggregateInputType
  }

  export type GetInverterAggregateType<T extends InverterAggregateArgs> = {
        [P in keyof T & keyof AggregateInverter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInverter[P]>
      : GetScalarType<T[P], AggregateInverter[P]>
  }




  export type InverterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InverterWhereInput
    orderBy?: InverterOrderByWithAggregationInput | InverterOrderByWithAggregationInput[]
    by: InverterScalarFieldEnum[] | InverterScalarFieldEnum
    having?: InverterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InverterCountAggregateInputType | true
    _avg?: InverterAvgAggregateInputType
    _sum?: InverterSumAggregateInputType
    _min?: InverterMinAggregateInputType
    _max?: InverterMaxAggregateInputType
  }

  export type InverterGroupByOutputType = {
    id: number
    model: string
    capacityKW: number
    installedAt: Date
    plantId: number
    _count: InverterCountAggregateOutputType | null
    _avg: InverterAvgAggregateOutputType | null
    _sum: InverterSumAggregateOutputType | null
    _min: InverterMinAggregateOutputType | null
    _max: InverterMaxAggregateOutputType | null
  }

  type GetInverterGroupByPayload<T extends InverterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InverterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InverterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InverterGroupByOutputType[P]>
            : GetScalarType<T[P], InverterGroupByOutputType[P]>
        }
      >
    >


  export type InverterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    capacityKW?: boolean
    installedAt?: boolean
    plantId?: boolean
    plant?: boolean | PlantDefaultArgs<ExtArgs>
    metrics?: boolean | Inverter$metricsArgs<ExtArgs>
    _count?: boolean | InverterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inverter"]>

  export type InverterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    capacityKW?: boolean
    installedAt?: boolean
    plantId?: boolean
    plant?: boolean | PlantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inverter"]>

  export type InverterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    capacityKW?: boolean
    installedAt?: boolean
    plantId?: boolean
    plant?: boolean | PlantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inverter"]>

  export type InverterSelectScalar = {
    id?: boolean
    model?: boolean
    capacityKW?: boolean
    installedAt?: boolean
    plantId?: boolean
  }

  export type InverterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "capacityKW" | "installedAt" | "plantId", ExtArgs["result"]["inverter"]>
  export type InverterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantDefaultArgs<ExtArgs>
    metrics?: boolean | Inverter$metricsArgs<ExtArgs>
    _count?: boolean | InverterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InverterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantDefaultArgs<ExtArgs>
  }
  export type InverterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantDefaultArgs<ExtArgs>
  }

  export type $InverterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inverter"
    objects: {
      plant: Prisma.$PlantPayload<ExtArgs>
      metrics: Prisma.$MetricPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model: string
      capacityKW: number
      installedAt: Date
      plantId: number
    }, ExtArgs["result"]["inverter"]>
    composites: {}
  }

  type InverterGetPayload<S extends boolean | null | undefined | InverterDefaultArgs> = $Result.GetResult<Prisma.$InverterPayload, S>

  type InverterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InverterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InverterCountAggregateInputType | true
    }

  export interface InverterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inverter'], meta: { name: 'Inverter' } }
    /**
     * Find zero or one Inverter that matches the filter.
     * @param {InverterFindUniqueArgs} args - Arguments to find a Inverter
     * @example
     * // Get one Inverter
     * const inverter = await prisma.inverter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InverterFindUniqueArgs>(args: SelectSubset<T, InverterFindUniqueArgs<ExtArgs>>): Prisma__InverterClient<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inverter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InverterFindUniqueOrThrowArgs} args - Arguments to find a Inverter
     * @example
     * // Get one Inverter
     * const inverter = await prisma.inverter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InverterFindUniqueOrThrowArgs>(args: SelectSubset<T, InverterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InverterClient<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inverter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InverterFindFirstArgs} args - Arguments to find a Inverter
     * @example
     * // Get one Inverter
     * const inverter = await prisma.inverter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InverterFindFirstArgs>(args?: SelectSubset<T, InverterFindFirstArgs<ExtArgs>>): Prisma__InverterClient<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inverter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InverterFindFirstOrThrowArgs} args - Arguments to find a Inverter
     * @example
     * // Get one Inverter
     * const inverter = await prisma.inverter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InverterFindFirstOrThrowArgs>(args?: SelectSubset<T, InverterFindFirstOrThrowArgs<ExtArgs>>): Prisma__InverterClient<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inverters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InverterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inverters
     * const inverters = await prisma.inverter.findMany()
     * 
     * // Get first 10 Inverters
     * const inverters = await prisma.inverter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inverterWithIdOnly = await prisma.inverter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InverterFindManyArgs>(args?: SelectSubset<T, InverterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inverter.
     * @param {InverterCreateArgs} args - Arguments to create a Inverter.
     * @example
     * // Create one Inverter
     * const Inverter = await prisma.inverter.create({
     *   data: {
     *     // ... data to create a Inverter
     *   }
     * })
     * 
     */
    create<T extends InverterCreateArgs>(args: SelectSubset<T, InverterCreateArgs<ExtArgs>>): Prisma__InverterClient<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inverters.
     * @param {InverterCreateManyArgs} args - Arguments to create many Inverters.
     * @example
     * // Create many Inverters
     * const inverter = await prisma.inverter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InverterCreateManyArgs>(args?: SelectSubset<T, InverterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inverters and returns the data saved in the database.
     * @param {InverterCreateManyAndReturnArgs} args - Arguments to create many Inverters.
     * @example
     * // Create many Inverters
     * const inverter = await prisma.inverter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inverters and only return the `id`
     * const inverterWithIdOnly = await prisma.inverter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InverterCreateManyAndReturnArgs>(args?: SelectSubset<T, InverterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inverter.
     * @param {InverterDeleteArgs} args - Arguments to delete one Inverter.
     * @example
     * // Delete one Inverter
     * const Inverter = await prisma.inverter.delete({
     *   where: {
     *     // ... filter to delete one Inverter
     *   }
     * })
     * 
     */
    delete<T extends InverterDeleteArgs>(args: SelectSubset<T, InverterDeleteArgs<ExtArgs>>): Prisma__InverterClient<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inverter.
     * @param {InverterUpdateArgs} args - Arguments to update one Inverter.
     * @example
     * // Update one Inverter
     * const inverter = await prisma.inverter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InverterUpdateArgs>(args: SelectSubset<T, InverterUpdateArgs<ExtArgs>>): Prisma__InverterClient<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inverters.
     * @param {InverterDeleteManyArgs} args - Arguments to filter Inverters to delete.
     * @example
     * // Delete a few Inverters
     * const { count } = await prisma.inverter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InverterDeleteManyArgs>(args?: SelectSubset<T, InverterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inverters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InverterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inverters
     * const inverter = await prisma.inverter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InverterUpdateManyArgs>(args: SelectSubset<T, InverterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inverters and returns the data updated in the database.
     * @param {InverterUpdateManyAndReturnArgs} args - Arguments to update many Inverters.
     * @example
     * // Update many Inverters
     * const inverter = await prisma.inverter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inverters and only return the `id`
     * const inverterWithIdOnly = await prisma.inverter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InverterUpdateManyAndReturnArgs>(args: SelectSubset<T, InverterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inverter.
     * @param {InverterUpsertArgs} args - Arguments to update or create a Inverter.
     * @example
     * // Update or create a Inverter
     * const inverter = await prisma.inverter.upsert({
     *   create: {
     *     // ... data to create a Inverter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inverter we want to update
     *   }
     * })
     */
    upsert<T extends InverterUpsertArgs>(args: SelectSubset<T, InverterUpsertArgs<ExtArgs>>): Prisma__InverterClient<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inverters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InverterCountArgs} args - Arguments to filter Inverters to count.
     * @example
     * // Count the number of Inverters
     * const count = await prisma.inverter.count({
     *   where: {
     *     // ... the filter for the Inverters we want to count
     *   }
     * })
    **/
    count<T extends InverterCountArgs>(
      args?: Subset<T, InverterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InverterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inverter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InverterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InverterAggregateArgs>(args: Subset<T, InverterAggregateArgs>): Prisma.PrismaPromise<GetInverterAggregateType<T>>

    /**
     * Group by Inverter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InverterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InverterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InverterGroupByArgs['orderBy'] }
        : { orderBy?: InverterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InverterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInverterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inverter model
   */
  readonly fields: InverterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inverter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InverterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plant<T extends PlantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantDefaultArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metrics<T extends Inverter$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Inverter$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inverter model
   */
  interface InverterFieldRefs {
    readonly id: FieldRef<"Inverter", 'Int'>
    readonly model: FieldRef<"Inverter", 'String'>
    readonly capacityKW: FieldRef<"Inverter", 'Float'>
    readonly installedAt: FieldRef<"Inverter", 'DateTime'>
    readonly plantId: FieldRef<"Inverter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inverter findUnique
   */
  export type InverterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterInclude<ExtArgs> | null
    /**
     * Filter, which Inverter to fetch.
     */
    where: InverterWhereUniqueInput
  }

  /**
   * Inverter findUniqueOrThrow
   */
  export type InverterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterInclude<ExtArgs> | null
    /**
     * Filter, which Inverter to fetch.
     */
    where: InverterWhereUniqueInput
  }

  /**
   * Inverter findFirst
   */
  export type InverterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterInclude<ExtArgs> | null
    /**
     * Filter, which Inverter to fetch.
     */
    where?: InverterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inverters to fetch.
     */
    orderBy?: InverterOrderByWithRelationInput | InverterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inverters.
     */
    cursor?: InverterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inverters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inverters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inverters.
     */
    distinct?: InverterScalarFieldEnum | InverterScalarFieldEnum[]
  }

  /**
   * Inverter findFirstOrThrow
   */
  export type InverterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterInclude<ExtArgs> | null
    /**
     * Filter, which Inverter to fetch.
     */
    where?: InverterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inverters to fetch.
     */
    orderBy?: InverterOrderByWithRelationInput | InverterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inverters.
     */
    cursor?: InverterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inverters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inverters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inverters.
     */
    distinct?: InverterScalarFieldEnum | InverterScalarFieldEnum[]
  }

  /**
   * Inverter findMany
   */
  export type InverterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterInclude<ExtArgs> | null
    /**
     * Filter, which Inverters to fetch.
     */
    where?: InverterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inverters to fetch.
     */
    orderBy?: InverterOrderByWithRelationInput | InverterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inverters.
     */
    cursor?: InverterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inverters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inverters.
     */
    skip?: number
    distinct?: InverterScalarFieldEnum | InverterScalarFieldEnum[]
  }

  /**
   * Inverter create
   */
  export type InverterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterInclude<ExtArgs> | null
    /**
     * The data needed to create a Inverter.
     */
    data: XOR<InverterCreateInput, InverterUncheckedCreateInput>
  }

  /**
   * Inverter createMany
   */
  export type InverterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inverters.
     */
    data: InverterCreateManyInput | InverterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inverter createManyAndReturn
   */
  export type InverterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * The data used to create many Inverters.
     */
    data: InverterCreateManyInput | InverterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inverter update
   */
  export type InverterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterInclude<ExtArgs> | null
    /**
     * The data needed to update a Inverter.
     */
    data: XOR<InverterUpdateInput, InverterUncheckedUpdateInput>
    /**
     * Choose, which Inverter to update.
     */
    where: InverterWhereUniqueInput
  }

  /**
   * Inverter updateMany
   */
  export type InverterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inverters.
     */
    data: XOR<InverterUpdateManyMutationInput, InverterUncheckedUpdateManyInput>
    /**
     * Filter which Inverters to update
     */
    where?: InverterWhereInput
    /**
     * Limit how many Inverters to update.
     */
    limit?: number
  }

  /**
   * Inverter updateManyAndReturn
   */
  export type InverterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * The data used to update Inverters.
     */
    data: XOR<InverterUpdateManyMutationInput, InverterUncheckedUpdateManyInput>
    /**
     * Filter which Inverters to update
     */
    where?: InverterWhereInput
    /**
     * Limit how many Inverters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inverter upsert
   */
  export type InverterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterInclude<ExtArgs> | null
    /**
     * The filter to search for the Inverter to update in case it exists.
     */
    where: InverterWhereUniqueInput
    /**
     * In case the Inverter found by the `where` argument doesn't exist, create a new Inverter with this data.
     */
    create: XOR<InverterCreateInput, InverterUncheckedCreateInput>
    /**
     * In case the Inverter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InverterUpdateInput, InverterUncheckedUpdateInput>
  }

  /**
   * Inverter delete
   */
  export type InverterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterInclude<ExtArgs> | null
    /**
     * Filter which Inverter to delete.
     */
    where: InverterWhereUniqueInput
  }

  /**
   * Inverter deleteMany
   */
  export type InverterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inverters to delete
     */
    where?: InverterWhereInput
    /**
     * Limit how many Inverters to delete.
     */
    limit?: number
  }

  /**
   * Inverter.metrics
   */
  export type Inverter$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    cursor?: MetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Inverter without action
   */
  export type InverterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inverter
     */
    select?: InverterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inverter
     */
    omit?: InverterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InverterInclude<ExtArgs> | null
  }


  /**
   * Model Metric
   */

  export type AggregateMetric = {
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  export type MetricAvgAggregateOutputType = {
    id: number | null
    activePowerW: number | null
    temperatureC: number | null
    inverterId: number | null
  }

  export type MetricSumAggregateOutputType = {
    id: number | null
    activePowerW: number | null
    temperatureC: number | null
    inverterId: number | null
  }

  export type MetricMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    activePowerW: number | null
    temperatureC: number | null
    inverterId: number | null
  }

  export type MetricMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    activePowerW: number | null
    temperatureC: number | null
    inverterId: number | null
  }

  export type MetricCountAggregateOutputType = {
    id: number
    timestamp: number
    activePowerW: number
    temperatureC: number
    inverterId: number
    _all: number
  }


  export type MetricAvgAggregateInputType = {
    id?: true
    activePowerW?: true
    temperatureC?: true
    inverterId?: true
  }

  export type MetricSumAggregateInputType = {
    id?: true
    activePowerW?: true
    temperatureC?: true
    inverterId?: true
  }

  export type MetricMinAggregateInputType = {
    id?: true
    timestamp?: true
    activePowerW?: true
    temperatureC?: true
    inverterId?: true
  }

  export type MetricMaxAggregateInputType = {
    id?: true
    timestamp?: true
    activePowerW?: true
    temperatureC?: true
    inverterId?: true
  }

  export type MetricCountAggregateInputType = {
    id?: true
    timestamp?: true
    activePowerW?: true
    temperatureC?: true
    inverterId?: true
    _all?: true
  }

  export type MetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metric to aggregate.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricMaxAggregateInputType
  }

  export type GetMetricAggregateType<T extends MetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetric[P]>
      : GetScalarType<T[P], AggregateMetric[P]>
  }




  export type MetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithAggregationInput | MetricOrderByWithAggregationInput[]
    by: MetricScalarFieldEnum[] | MetricScalarFieldEnum
    having?: MetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricCountAggregateInputType | true
    _avg?: MetricAvgAggregateInputType
    _sum?: MetricSumAggregateInputType
    _min?: MetricMinAggregateInputType
    _max?: MetricMaxAggregateInputType
  }

  export type MetricGroupByOutputType = {
    id: number
    timestamp: Date
    activePowerW: number
    temperatureC: number
    inverterId: number
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  type GetMetricGroupByPayload<T extends MetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricGroupByOutputType[P]>
            : GetScalarType<T[P], MetricGroupByOutputType[P]>
        }
      >
    >


  export type MetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    activePowerW?: boolean
    temperatureC?: boolean
    inverterId?: boolean
    inverter?: boolean | InverterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    activePowerW?: boolean
    temperatureC?: boolean
    inverterId?: boolean
    inverter?: boolean | InverterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    activePowerW?: boolean
    temperatureC?: boolean
    inverterId?: boolean
    inverter?: boolean | InverterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectScalar = {
    id?: boolean
    timestamp?: boolean
    activePowerW?: boolean
    temperatureC?: boolean
    inverterId?: boolean
  }

  export type MetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "activePowerW" | "temperatureC" | "inverterId", ExtArgs["result"]["metric"]>
  export type MetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inverter?: boolean | InverterDefaultArgs<ExtArgs>
  }
  export type MetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inverter?: boolean | InverterDefaultArgs<ExtArgs>
  }
  export type MetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inverter?: boolean | InverterDefaultArgs<ExtArgs>
  }

  export type $MetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metric"
    objects: {
      inverter: Prisma.$InverterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: Date
      activePowerW: number
      temperatureC: number
      inverterId: number
    }, ExtArgs["result"]["metric"]>
    composites: {}
  }

  type MetricGetPayload<S extends boolean | null | undefined | MetricDefaultArgs> = $Result.GetResult<Prisma.$MetricPayload, S>

  type MetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricCountAggregateInputType | true
    }

  export interface MetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metric'], meta: { name: 'Metric' } }
    /**
     * Find zero or one Metric that matches the filter.
     * @param {MetricFindUniqueArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricFindUniqueArgs>(args: SelectSubset<T, MetricFindUniqueArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricFindUniqueOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricFindFirstArgs>(args?: SelectSubset<T, MetricFindFirstArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metric.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricWithIdOnly = await prisma.metric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricFindManyArgs>(args?: SelectSubset<T, MetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metric.
     * @param {MetricCreateArgs} args - Arguments to create a Metric.
     * @example
     * // Create one Metric
     * const Metric = await prisma.metric.create({
     *   data: {
     *     // ... data to create a Metric
     *   }
     * })
     * 
     */
    create<T extends MetricCreateArgs>(args: SelectSubset<T, MetricCreateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metrics.
     * @param {MetricCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricCreateManyArgs>(args?: SelectSubset<T, MetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrics and returns the data saved in the database.
     * @param {MetricCreateManyAndReturnArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metric.
     * @param {MetricDeleteArgs} args - Arguments to delete one Metric.
     * @example
     * // Delete one Metric
     * const Metric = await prisma.metric.delete({
     *   where: {
     *     // ... filter to delete one Metric
     *   }
     * })
     * 
     */
    delete<T extends MetricDeleteArgs>(args: SelectSubset<T, MetricDeleteArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metric.
     * @param {MetricUpdateArgs} args - Arguments to update one Metric.
     * @example
     * // Update one Metric
     * const metric = await prisma.metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricUpdateArgs>(args: SelectSubset<T, MetricUpdateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metrics.
     * @param {MetricDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricDeleteManyArgs>(args?: SelectSubset<T, MetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricUpdateManyArgs>(args: SelectSubset<T, MetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics and returns the data updated in the database.
     * @param {MetricUpdateManyAndReturnArgs} args - Arguments to update many Metrics.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetricUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metric.
     * @param {MetricUpsertArgs} args - Arguments to update or create a Metric.
     * @example
     * // Update or create a Metric
     * const metric = await prisma.metric.upsert({
     *   create: {
     *     // ... data to create a Metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metric we want to update
     *   }
     * })
     */
    upsert<T extends MetricUpsertArgs>(args: SelectSubset<T, MetricUpsertArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metric.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricCountArgs>(
      args?: Subset<T, MetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricAggregateArgs>(args: Subset<T, MetricAggregateArgs>): Prisma.PrismaPromise<GetMetricAggregateType<T>>

    /**
     * Group by Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricGroupByArgs['orderBy'] }
        : { orderBy?: MetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metric model
   */
  readonly fields: MetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inverter<T extends InverterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InverterDefaultArgs<ExtArgs>>): Prisma__InverterClient<$Result.GetResult<Prisma.$InverterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Metric model
   */
  interface MetricFieldRefs {
    readonly id: FieldRef<"Metric", 'Int'>
    readonly timestamp: FieldRef<"Metric", 'DateTime'>
    readonly activePowerW: FieldRef<"Metric", 'Float'>
    readonly temperatureC: FieldRef<"Metric", 'Float'>
    readonly inverterId: FieldRef<"Metric", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Metric findUnique
   */
  export type MetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findUniqueOrThrow
   */
  export type MetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findFirst
   */
  export type MetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findFirstOrThrow
   */
  export type MetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findMany
   */
  export type MetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric create
   */
  export type MetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to create a Metric.
     */
    data: XOR<MetricCreateInput, MetricUncheckedCreateInput>
  }

  /**
   * Metric createMany
   */
  export type MetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metric createManyAndReturn
   */
  export type MetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metric update
   */
  export type MetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to update a Metric.
     */
    data: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
    /**
     * Choose, which Metric to update.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric updateMany
   */
  export type MetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metric updateManyAndReturn
   */
  export type MetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metric upsert
   */
  export type MetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The filter to search for the Metric to update in case it exists.
     */
    where: MetricWhereUniqueInput
    /**
     * In case the Metric found by the `where` argument doesn't exist, create a new Metric with this data.
     */
    create: XOR<MetricCreateInput, MetricUncheckedCreateInput>
    /**
     * In case the Metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
  }

  /**
   * Metric delete
   */
  export type MetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter which Metric to delete.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric deleteMany
   */
  export type MetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to delete.
     */
    limit?: number
  }

  /**
   * Metric without action
   */
  export type MetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    createdAt: 'createdAt'
  };

  export type PlantScalarFieldEnum = (typeof PlantScalarFieldEnum)[keyof typeof PlantScalarFieldEnum]


  export const InverterScalarFieldEnum: {
    id: 'id',
    model: 'model',
    capacityKW: 'capacityKW',
    installedAt: 'installedAt',
    plantId: 'plantId'
  };

  export type InverterScalarFieldEnum = (typeof InverterScalarFieldEnum)[keyof typeof InverterScalarFieldEnum]


  export const MetricScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    activePowerW: 'activePowerW',
    temperatureC: 'temperatureC',
    inverterId: 'inverterId'
  };

  export type MetricScalarFieldEnum = (typeof MetricScalarFieldEnum)[keyof typeof MetricScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PlantWhereInput = {
    AND?: PlantWhereInput | PlantWhereInput[]
    OR?: PlantWhereInput[]
    NOT?: PlantWhereInput | PlantWhereInput[]
    id?: IntFilter<"Plant"> | number
    name?: StringFilter<"Plant"> | string
    location?: StringFilter<"Plant"> | string
    createdAt?: DateTimeFilter<"Plant"> | Date | string
    inverters?: InverterListRelationFilter
  }

  export type PlantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    inverters?: InverterOrderByRelationAggregateInput
  }

  export type PlantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlantWhereInput | PlantWhereInput[]
    OR?: PlantWhereInput[]
    NOT?: PlantWhereInput | PlantWhereInput[]
    name?: StringFilter<"Plant"> | string
    location?: StringFilter<"Plant"> | string
    createdAt?: DateTimeFilter<"Plant"> | Date | string
    inverters?: InverterListRelationFilter
  }, "id">

  export type PlantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    _count?: PlantCountOrderByAggregateInput
    _avg?: PlantAvgOrderByAggregateInput
    _max?: PlantMaxOrderByAggregateInput
    _min?: PlantMinOrderByAggregateInput
    _sum?: PlantSumOrderByAggregateInput
  }

  export type PlantScalarWhereWithAggregatesInput = {
    AND?: PlantScalarWhereWithAggregatesInput | PlantScalarWhereWithAggregatesInput[]
    OR?: PlantScalarWhereWithAggregatesInput[]
    NOT?: PlantScalarWhereWithAggregatesInput | PlantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plant"> | number
    name?: StringWithAggregatesFilter<"Plant"> | string
    location?: StringWithAggregatesFilter<"Plant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Plant"> | Date | string
  }

  export type InverterWhereInput = {
    AND?: InverterWhereInput | InverterWhereInput[]
    OR?: InverterWhereInput[]
    NOT?: InverterWhereInput | InverterWhereInput[]
    id?: IntFilter<"Inverter"> | number
    model?: StringFilter<"Inverter"> | string
    capacityKW?: FloatFilter<"Inverter"> | number
    installedAt?: DateTimeFilter<"Inverter"> | Date | string
    plantId?: IntFilter<"Inverter"> | number
    plant?: XOR<PlantScalarRelationFilter, PlantWhereInput>
    metrics?: MetricListRelationFilter
  }

  export type InverterOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    capacityKW?: SortOrder
    installedAt?: SortOrder
    plantId?: SortOrder
    plant?: PlantOrderByWithRelationInput
    metrics?: MetricOrderByRelationAggregateInput
  }

  export type InverterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InverterWhereInput | InverterWhereInput[]
    OR?: InverterWhereInput[]
    NOT?: InverterWhereInput | InverterWhereInput[]
    model?: StringFilter<"Inverter"> | string
    capacityKW?: FloatFilter<"Inverter"> | number
    installedAt?: DateTimeFilter<"Inverter"> | Date | string
    plantId?: IntFilter<"Inverter"> | number
    plant?: XOR<PlantScalarRelationFilter, PlantWhereInput>
    metrics?: MetricListRelationFilter
  }, "id">

  export type InverterOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    capacityKW?: SortOrder
    installedAt?: SortOrder
    plantId?: SortOrder
    _count?: InverterCountOrderByAggregateInput
    _avg?: InverterAvgOrderByAggregateInput
    _max?: InverterMaxOrderByAggregateInput
    _min?: InverterMinOrderByAggregateInput
    _sum?: InverterSumOrderByAggregateInput
  }

  export type InverterScalarWhereWithAggregatesInput = {
    AND?: InverterScalarWhereWithAggregatesInput | InverterScalarWhereWithAggregatesInput[]
    OR?: InverterScalarWhereWithAggregatesInput[]
    NOT?: InverterScalarWhereWithAggregatesInput | InverterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inverter"> | number
    model?: StringWithAggregatesFilter<"Inverter"> | string
    capacityKW?: FloatWithAggregatesFilter<"Inverter"> | number
    installedAt?: DateTimeWithAggregatesFilter<"Inverter"> | Date | string
    plantId?: IntWithAggregatesFilter<"Inverter"> | number
  }

  export type MetricWhereInput = {
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    id?: IntFilter<"Metric"> | number
    timestamp?: DateTimeFilter<"Metric"> | Date | string
    activePowerW?: FloatFilter<"Metric"> | number
    temperatureC?: FloatFilter<"Metric"> | number
    inverterId?: IntFilter<"Metric"> | number
    inverter?: XOR<InverterScalarRelationFilter, InverterWhereInput>
  }

  export type MetricOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    activePowerW?: SortOrder
    temperatureC?: SortOrder
    inverterId?: SortOrder
    inverter?: InverterOrderByWithRelationInput
  }

  export type MetricWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    timestamp?: DateTimeFilter<"Metric"> | Date | string
    activePowerW?: FloatFilter<"Metric"> | number
    temperatureC?: FloatFilter<"Metric"> | number
    inverterId?: IntFilter<"Metric"> | number
    inverter?: XOR<InverterScalarRelationFilter, InverterWhereInput>
  }, "id">

  export type MetricOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    activePowerW?: SortOrder
    temperatureC?: SortOrder
    inverterId?: SortOrder
    _count?: MetricCountOrderByAggregateInput
    _avg?: MetricAvgOrderByAggregateInput
    _max?: MetricMaxOrderByAggregateInput
    _min?: MetricMinOrderByAggregateInput
    _sum?: MetricSumOrderByAggregateInput
  }

  export type MetricScalarWhereWithAggregatesInput = {
    AND?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    OR?: MetricScalarWhereWithAggregatesInput[]
    NOT?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Metric"> | number
    timestamp?: DateTimeWithAggregatesFilter<"Metric"> | Date | string
    activePowerW?: FloatWithAggregatesFilter<"Metric"> | number
    temperatureC?: FloatWithAggregatesFilter<"Metric"> | number
    inverterId?: IntWithAggregatesFilter<"Metric"> | number
  }

  export type PlantCreateInput = {
    name: string
    location: string
    createdAt?: Date | string
    inverters?: InverterCreateNestedManyWithoutPlantInput
  }

  export type PlantUncheckedCreateInput = {
    id?: number
    name: string
    location: string
    createdAt?: Date | string
    inverters?: InverterUncheckedCreateNestedManyWithoutPlantInput
  }

  export type PlantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inverters?: InverterUpdateManyWithoutPlantNestedInput
  }

  export type PlantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inverters?: InverterUncheckedUpdateManyWithoutPlantNestedInput
  }

  export type PlantCreateManyInput = {
    id?: number
    name: string
    location: string
    createdAt?: Date | string
  }

  export type PlantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InverterCreateInput = {
    model: string
    capacityKW: number
    installedAt?: Date | string
    plant: PlantCreateNestedOneWithoutInvertersInput
    metrics?: MetricCreateNestedManyWithoutInverterInput
  }

  export type InverterUncheckedCreateInput = {
    id?: number
    model: string
    capacityKW: number
    installedAt?: Date | string
    plantId: number
    metrics?: MetricUncheckedCreateNestedManyWithoutInverterInput
  }

  export type InverterUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    capacityKW?: FloatFieldUpdateOperationsInput | number
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plant?: PlantUpdateOneRequiredWithoutInvertersNestedInput
    metrics?: MetricUpdateManyWithoutInverterNestedInput
  }

  export type InverterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    capacityKW?: FloatFieldUpdateOperationsInput | number
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plantId?: IntFieldUpdateOperationsInput | number
    metrics?: MetricUncheckedUpdateManyWithoutInverterNestedInput
  }

  export type InverterCreateManyInput = {
    id?: number
    model: string
    capacityKW: number
    installedAt?: Date | string
    plantId: number
  }

  export type InverterUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    capacityKW?: FloatFieldUpdateOperationsInput | number
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InverterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    capacityKW?: FloatFieldUpdateOperationsInput | number
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plantId?: IntFieldUpdateOperationsInput | number
  }

  export type MetricCreateInput = {
    timestamp: Date | string
    activePowerW: number
    temperatureC: number
    inverter: InverterCreateNestedOneWithoutMetricsInput
  }

  export type MetricUncheckedCreateInput = {
    id?: number
    timestamp: Date | string
    activePowerW: number
    temperatureC: number
    inverterId: number
  }

  export type MetricUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    activePowerW?: FloatFieldUpdateOperationsInput | number
    temperatureC?: FloatFieldUpdateOperationsInput | number
    inverter?: InverterUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type MetricUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    activePowerW?: FloatFieldUpdateOperationsInput | number
    temperatureC?: FloatFieldUpdateOperationsInput | number
    inverterId?: IntFieldUpdateOperationsInput | number
  }

  export type MetricCreateManyInput = {
    id?: number
    timestamp: Date | string
    activePowerW: number
    temperatureC: number
    inverterId: number
  }

  export type MetricUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    activePowerW?: FloatFieldUpdateOperationsInput | number
    temperatureC?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    activePowerW?: FloatFieldUpdateOperationsInput | number
    temperatureC?: FloatFieldUpdateOperationsInput | number
    inverterId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InverterListRelationFilter = {
    every?: InverterWhereInput
    some?: InverterWhereInput
    none?: InverterWhereInput
  }

  export type InverterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type PlantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type PlantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type PlantSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PlantScalarRelationFilter = {
    is?: PlantWhereInput
    isNot?: PlantWhereInput
  }

  export type MetricListRelationFilter = {
    every?: MetricWhereInput
    some?: MetricWhereInput
    none?: MetricWhereInput
  }

  export type MetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InverterCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    capacityKW?: SortOrder
    installedAt?: SortOrder
    plantId?: SortOrder
  }

  export type InverterAvgOrderByAggregateInput = {
    id?: SortOrder
    capacityKW?: SortOrder
    plantId?: SortOrder
  }

  export type InverterMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    capacityKW?: SortOrder
    installedAt?: SortOrder
    plantId?: SortOrder
  }

  export type InverterMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    capacityKW?: SortOrder
    installedAt?: SortOrder
    plantId?: SortOrder
  }

  export type InverterSumOrderByAggregateInput = {
    id?: SortOrder
    capacityKW?: SortOrder
    plantId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type InverterScalarRelationFilter = {
    is?: InverterWhereInput
    isNot?: InverterWhereInput
  }

  export type MetricCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    activePowerW?: SortOrder
    temperatureC?: SortOrder
    inverterId?: SortOrder
  }

  export type MetricAvgOrderByAggregateInput = {
    id?: SortOrder
    activePowerW?: SortOrder
    temperatureC?: SortOrder
    inverterId?: SortOrder
  }

  export type MetricMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    activePowerW?: SortOrder
    temperatureC?: SortOrder
    inverterId?: SortOrder
  }

  export type MetricMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    activePowerW?: SortOrder
    temperatureC?: SortOrder
    inverterId?: SortOrder
  }

  export type MetricSumOrderByAggregateInput = {
    id?: SortOrder
    activePowerW?: SortOrder
    temperatureC?: SortOrder
    inverterId?: SortOrder
  }

  export type InverterCreateNestedManyWithoutPlantInput = {
    create?: XOR<InverterCreateWithoutPlantInput, InverterUncheckedCreateWithoutPlantInput> | InverterCreateWithoutPlantInput[] | InverterUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: InverterCreateOrConnectWithoutPlantInput | InverterCreateOrConnectWithoutPlantInput[]
    createMany?: InverterCreateManyPlantInputEnvelope
    connect?: InverterWhereUniqueInput | InverterWhereUniqueInput[]
  }

  export type InverterUncheckedCreateNestedManyWithoutPlantInput = {
    create?: XOR<InverterCreateWithoutPlantInput, InverterUncheckedCreateWithoutPlantInput> | InverterCreateWithoutPlantInput[] | InverterUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: InverterCreateOrConnectWithoutPlantInput | InverterCreateOrConnectWithoutPlantInput[]
    createMany?: InverterCreateManyPlantInputEnvelope
    connect?: InverterWhereUniqueInput | InverterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InverterUpdateManyWithoutPlantNestedInput = {
    create?: XOR<InverterCreateWithoutPlantInput, InverterUncheckedCreateWithoutPlantInput> | InverterCreateWithoutPlantInput[] | InverterUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: InverterCreateOrConnectWithoutPlantInput | InverterCreateOrConnectWithoutPlantInput[]
    upsert?: InverterUpsertWithWhereUniqueWithoutPlantInput | InverterUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: InverterCreateManyPlantInputEnvelope
    set?: InverterWhereUniqueInput | InverterWhereUniqueInput[]
    disconnect?: InverterWhereUniqueInput | InverterWhereUniqueInput[]
    delete?: InverterWhereUniqueInput | InverterWhereUniqueInput[]
    connect?: InverterWhereUniqueInput | InverterWhereUniqueInput[]
    update?: InverterUpdateWithWhereUniqueWithoutPlantInput | InverterUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: InverterUpdateManyWithWhereWithoutPlantInput | InverterUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: InverterScalarWhereInput | InverterScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InverterUncheckedUpdateManyWithoutPlantNestedInput = {
    create?: XOR<InverterCreateWithoutPlantInput, InverterUncheckedCreateWithoutPlantInput> | InverterCreateWithoutPlantInput[] | InverterUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: InverterCreateOrConnectWithoutPlantInput | InverterCreateOrConnectWithoutPlantInput[]
    upsert?: InverterUpsertWithWhereUniqueWithoutPlantInput | InverterUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: InverterCreateManyPlantInputEnvelope
    set?: InverterWhereUniqueInput | InverterWhereUniqueInput[]
    disconnect?: InverterWhereUniqueInput | InverterWhereUniqueInput[]
    delete?: InverterWhereUniqueInput | InverterWhereUniqueInput[]
    connect?: InverterWhereUniqueInput | InverterWhereUniqueInput[]
    update?: InverterUpdateWithWhereUniqueWithoutPlantInput | InverterUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: InverterUpdateManyWithWhereWithoutPlantInput | InverterUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: InverterScalarWhereInput | InverterScalarWhereInput[]
  }

  export type PlantCreateNestedOneWithoutInvertersInput = {
    create?: XOR<PlantCreateWithoutInvertersInput, PlantUncheckedCreateWithoutInvertersInput>
    connectOrCreate?: PlantCreateOrConnectWithoutInvertersInput
    connect?: PlantWhereUniqueInput
  }

  export type MetricCreateNestedManyWithoutInverterInput = {
    create?: XOR<MetricCreateWithoutInverterInput, MetricUncheckedCreateWithoutInverterInput> | MetricCreateWithoutInverterInput[] | MetricUncheckedCreateWithoutInverterInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutInverterInput | MetricCreateOrConnectWithoutInverterInput[]
    createMany?: MetricCreateManyInverterInputEnvelope
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
  }

  export type MetricUncheckedCreateNestedManyWithoutInverterInput = {
    create?: XOR<MetricCreateWithoutInverterInput, MetricUncheckedCreateWithoutInverterInput> | MetricCreateWithoutInverterInput[] | MetricUncheckedCreateWithoutInverterInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutInverterInput | MetricCreateOrConnectWithoutInverterInput[]
    createMany?: MetricCreateManyInverterInputEnvelope
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlantUpdateOneRequiredWithoutInvertersNestedInput = {
    create?: XOR<PlantCreateWithoutInvertersInput, PlantUncheckedCreateWithoutInvertersInput>
    connectOrCreate?: PlantCreateOrConnectWithoutInvertersInput
    upsert?: PlantUpsertWithoutInvertersInput
    connect?: PlantWhereUniqueInput
    update?: XOR<XOR<PlantUpdateToOneWithWhereWithoutInvertersInput, PlantUpdateWithoutInvertersInput>, PlantUncheckedUpdateWithoutInvertersInput>
  }

  export type MetricUpdateManyWithoutInverterNestedInput = {
    create?: XOR<MetricCreateWithoutInverterInput, MetricUncheckedCreateWithoutInverterInput> | MetricCreateWithoutInverterInput[] | MetricUncheckedCreateWithoutInverterInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutInverterInput | MetricCreateOrConnectWithoutInverterInput[]
    upsert?: MetricUpsertWithWhereUniqueWithoutInverterInput | MetricUpsertWithWhereUniqueWithoutInverterInput[]
    createMany?: MetricCreateManyInverterInputEnvelope
    set?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    disconnect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    delete?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    update?: MetricUpdateWithWhereUniqueWithoutInverterInput | MetricUpdateWithWhereUniqueWithoutInverterInput[]
    updateMany?: MetricUpdateManyWithWhereWithoutInverterInput | MetricUpdateManyWithWhereWithoutInverterInput[]
    deleteMany?: MetricScalarWhereInput | MetricScalarWhereInput[]
  }

  export type MetricUncheckedUpdateManyWithoutInverterNestedInput = {
    create?: XOR<MetricCreateWithoutInverterInput, MetricUncheckedCreateWithoutInverterInput> | MetricCreateWithoutInverterInput[] | MetricUncheckedCreateWithoutInverterInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutInverterInput | MetricCreateOrConnectWithoutInverterInput[]
    upsert?: MetricUpsertWithWhereUniqueWithoutInverterInput | MetricUpsertWithWhereUniqueWithoutInverterInput[]
    createMany?: MetricCreateManyInverterInputEnvelope
    set?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    disconnect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    delete?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    update?: MetricUpdateWithWhereUniqueWithoutInverterInput | MetricUpdateWithWhereUniqueWithoutInverterInput[]
    updateMany?: MetricUpdateManyWithWhereWithoutInverterInput | MetricUpdateManyWithWhereWithoutInverterInput[]
    deleteMany?: MetricScalarWhereInput | MetricScalarWhereInput[]
  }

  export type InverterCreateNestedOneWithoutMetricsInput = {
    create?: XOR<InverterCreateWithoutMetricsInput, InverterUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: InverterCreateOrConnectWithoutMetricsInput
    connect?: InverterWhereUniqueInput
  }

  export type InverterUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<InverterCreateWithoutMetricsInput, InverterUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: InverterCreateOrConnectWithoutMetricsInput
    upsert?: InverterUpsertWithoutMetricsInput
    connect?: InverterWhereUniqueInput
    update?: XOR<XOR<InverterUpdateToOneWithWhereWithoutMetricsInput, InverterUpdateWithoutMetricsInput>, InverterUncheckedUpdateWithoutMetricsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type InverterCreateWithoutPlantInput = {
    model: string
    capacityKW: number
    installedAt?: Date | string
    metrics?: MetricCreateNestedManyWithoutInverterInput
  }

  export type InverterUncheckedCreateWithoutPlantInput = {
    id?: number
    model: string
    capacityKW: number
    installedAt?: Date | string
    metrics?: MetricUncheckedCreateNestedManyWithoutInverterInput
  }

  export type InverterCreateOrConnectWithoutPlantInput = {
    where: InverterWhereUniqueInput
    create: XOR<InverterCreateWithoutPlantInput, InverterUncheckedCreateWithoutPlantInput>
  }

  export type InverterCreateManyPlantInputEnvelope = {
    data: InverterCreateManyPlantInput | InverterCreateManyPlantInput[]
    skipDuplicates?: boolean
  }

  export type InverterUpsertWithWhereUniqueWithoutPlantInput = {
    where: InverterWhereUniqueInput
    update: XOR<InverterUpdateWithoutPlantInput, InverterUncheckedUpdateWithoutPlantInput>
    create: XOR<InverterCreateWithoutPlantInput, InverterUncheckedCreateWithoutPlantInput>
  }

  export type InverterUpdateWithWhereUniqueWithoutPlantInput = {
    where: InverterWhereUniqueInput
    data: XOR<InverterUpdateWithoutPlantInput, InverterUncheckedUpdateWithoutPlantInput>
  }

  export type InverterUpdateManyWithWhereWithoutPlantInput = {
    where: InverterScalarWhereInput
    data: XOR<InverterUpdateManyMutationInput, InverterUncheckedUpdateManyWithoutPlantInput>
  }

  export type InverterScalarWhereInput = {
    AND?: InverterScalarWhereInput | InverterScalarWhereInput[]
    OR?: InverterScalarWhereInput[]
    NOT?: InverterScalarWhereInput | InverterScalarWhereInput[]
    id?: IntFilter<"Inverter"> | number
    model?: StringFilter<"Inverter"> | string
    capacityKW?: FloatFilter<"Inverter"> | number
    installedAt?: DateTimeFilter<"Inverter"> | Date | string
    plantId?: IntFilter<"Inverter"> | number
  }

  export type PlantCreateWithoutInvertersInput = {
    name: string
    location: string
    createdAt?: Date | string
  }

  export type PlantUncheckedCreateWithoutInvertersInput = {
    id?: number
    name: string
    location: string
    createdAt?: Date | string
  }

  export type PlantCreateOrConnectWithoutInvertersInput = {
    where: PlantWhereUniqueInput
    create: XOR<PlantCreateWithoutInvertersInput, PlantUncheckedCreateWithoutInvertersInput>
  }

  export type MetricCreateWithoutInverterInput = {
    timestamp: Date | string
    activePowerW: number
    temperatureC: number
  }

  export type MetricUncheckedCreateWithoutInverterInput = {
    id?: number
    timestamp: Date | string
    activePowerW: number
    temperatureC: number
  }

  export type MetricCreateOrConnectWithoutInverterInput = {
    where: MetricWhereUniqueInput
    create: XOR<MetricCreateWithoutInverterInput, MetricUncheckedCreateWithoutInverterInput>
  }

  export type MetricCreateManyInverterInputEnvelope = {
    data: MetricCreateManyInverterInput | MetricCreateManyInverterInput[]
    skipDuplicates?: boolean
  }

  export type PlantUpsertWithoutInvertersInput = {
    update: XOR<PlantUpdateWithoutInvertersInput, PlantUncheckedUpdateWithoutInvertersInput>
    create: XOR<PlantCreateWithoutInvertersInput, PlantUncheckedCreateWithoutInvertersInput>
    where?: PlantWhereInput
  }

  export type PlantUpdateToOneWithWhereWithoutInvertersInput = {
    where?: PlantWhereInput
    data: XOR<PlantUpdateWithoutInvertersInput, PlantUncheckedUpdateWithoutInvertersInput>
  }

  export type PlantUpdateWithoutInvertersInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantUncheckedUpdateWithoutInvertersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricUpsertWithWhereUniqueWithoutInverterInput = {
    where: MetricWhereUniqueInput
    update: XOR<MetricUpdateWithoutInverterInput, MetricUncheckedUpdateWithoutInverterInput>
    create: XOR<MetricCreateWithoutInverterInput, MetricUncheckedCreateWithoutInverterInput>
  }

  export type MetricUpdateWithWhereUniqueWithoutInverterInput = {
    where: MetricWhereUniqueInput
    data: XOR<MetricUpdateWithoutInverterInput, MetricUncheckedUpdateWithoutInverterInput>
  }

  export type MetricUpdateManyWithWhereWithoutInverterInput = {
    where: MetricScalarWhereInput
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyWithoutInverterInput>
  }

  export type MetricScalarWhereInput = {
    AND?: MetricScalarWhereInput | MetricScalarWhereInput[]
    OR?: MetricScalarWhereInput[]
    NOT?: MetricScalarWhereInput | MetricScalarWhereInput[]
    id?: IntFilter<"Metric"> | number
    timestamp?: DateTimeFilter<"Metric"> | Date | string
    activePowerW?: FloatFilter<"Metric"> | number
    temperatureC?: FloatFilter<"Metric"> | number
    inverterId?: IntFilter<"Metric"> | number
  }

  export type InverterCreateWithoutMetricsInput = {
    model: string
    capacityKW: number
    installedAt?: Date | string
    plant: PlantCreateNestedOneWithoutInvertersInput
  }

  export type InverterUncheckedCreateWithoutMetricsInput = {
    id?: number
    model: string
    capacityKW: number
    installedAt?: Date | string
    plantId: number
  }

  export type InverterCreateOrConnectWithoutMetricsInput = {
    where: InverterWhereUniqueInput
    create: XOR<InverterCreateWithoutMetricsInput, InverterUncheckedCreateWithoutMetricsInput>
  }

  export type InverterUpsertWithoutMetricsInput = {
    update: XOR<InverterUpdateWithoutMetricsInput, InverterUncheckedUpdateWithoutMetricsInput>
    create: XOR<InverterCreateWithoutMetricsInput, InverterUncheckedCreateWithoutMetricsInput>
    where?: InverterWhereInput
  }

  export type InverterUpdateToOneWithWhereWithoutMetricsInput = {
    where?: InverterWhereInput
    data: XOR<InverterUpdateWithoutMetricsInput, InverterUncheckedUpdateWithoutMetricsInput>
  }

  export type InverterUpdateWithoutMetricsInput = {
    model?: StringFieldUpdateOperationsInput | string
    capacityKW?: FloatFieldUpdateOperationsInput | number
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plant?: PlantUpdateOneRequiredWithoutInvertersNestedInput
  }

  export type InverterUncheckedUpdateWithoutMetricsInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    capacityKW?: FloatFieldUpdateOperationsInput | number
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plantId?: IntFieldUpdateOperationsInput | number
  }

  export type InverterCreateManyPlantInput = {
    id?: number
    model: string
    capacityKW: number
    installedAt?: Date | string
  }

  export type InverterUpdateWithoutPlantInput = {
    model?: StringFieldUpdateOperationsInput | string
    capacityKW?: FloatFieldUpdateOperationsInput | number
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: MetricUpdateManyWithoutInverterNestedInput
  }

  export type InverterUncheckedUpdateWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    capacityKW?: FloatFieldUpdateOperationsInput | number
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: MetricUncheckedUpdateManyWithoutInverterNestedInput
  }

  export type InverterUncheckedUpdateManyWithoutPlantInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    capacityKW?: FloatFieldUpdateOperationsInput | number
    installedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricCreateManyInverterInput = {
    id?: number
    timestamp: Date | string
    activePowerW: number
    temperatureC: number
  }

  export type MetricUpdateWithoutInverterInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    activePowerW?: FloatFieldUpdateOperationsInput | number
    temperatureC?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricUncheckedUpdateWithoutInverterInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    activePowerW?: FloatFieldUpdateOperationsInput | number
    temperatureC?: FloatFieldUpdateOperationsInput | number
  }

  export type MetricUncheckedUpdateManyWithoutInverterInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    activePowerW?: FloatFieldUpdateOperationsInput | number
    temperatureC?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}