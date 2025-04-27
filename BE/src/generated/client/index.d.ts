
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Tours
 * 
 */
export type Tours = $Result.DefaultSelection<Prisma.$ToursPayload>
/**
 * Model Admin_Logs
 * 
 */
export type Admin_Logs = $Result.DefaultSelection<Prisma.$Admin_LogsPayload>
/**
 * Model Tours_Location
 * 
 */
export type Tours_Location = $Result.DefaultSelection<Prisma.$Tours_LocationPayload>
/**
 * Model Bookings
 * 
 */
export type Bookings = $Result.DefaultSelection<Prisma.$BookingsPayload>
/**
 * Model ReviewImage
 * 
 */
export type ReviewImage = $Result.DefaultSelection<Prisma.$ReviewImagePayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>
/**
 * Model Hotels
 * 
 */
export type Hotels = $Result.DefaultSelection<Prisma.$HotelsPayload>
/**
 * Model Tour_Images
 * 
 */
export type Tour_Images = $Result.DefaultSelection<Prisma.$Tour_ImagesPayload>
/**
 * Model Tour_Logs
 * 
 */
export type Tour_Logs = $Result.DefaultSelection<Prisma.$Tour_LogsPayload>
/**
 * Model Tour_Itinerarys
 * 
 */
export type Tour_Itinerarys = $Result.DefaultSelection<Prisma.$Tour_ItinerarysPayload>
/**
 * Model Chatbot_History
 * 
 */
export type Chatbot_History = $Result.DefaultSelection<Prisma.$Chatbot_HistoryPayload>
/**
 * Model AI_Recommendations
 * 
 */
export type AI_Recommendations = $Result.DefaultSelection<Prisma.$AI_RecommendationsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tours`: Exposes CRUD operations for the **Tours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tours
    * const tours = await prisma.tours.findMany()
    * ```
    */
  get tours(): Prisma.ToursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin_Logs`: Exposes CRUD operations for the **Admin_Logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admin_Logs
    * const admin_Logs = await prisma.admin_Logs.findMany()
    * ```
    */
  get admin_Logs(): Prisma.Admin_LogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tours_Location`: Exposes CRUD operations for the **Tours_Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tours_Locations
    * const tours_Locations = await prisma.tours_Location.findMany()
    * ```
    */
  get tours_Location(): Prisma.Tours_LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **Bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.BookingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewImage`: Exposes CRUD operations for the **ReviewImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewImages
    * const reviewImages = await prisma.reviewImage.findMany()
    * ```
    */
  get reviewImage(): Prisma.ReviewImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotels`: Exposes CRUD operations for the **Hotels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotels.findMany()
    * ```
    */
  get hotels(): Prisma.HotelsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tour_Images`: Exposes CRUD operations for the **Tour_Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tour_Images
    * const tour_Images = await prisma.tour_Images.findMany()
    * ```
    */
  get tour_Images(): Prisma.Tour_ImagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tour_Logs`: Exposes CRUD operations for the **Tour_Logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tour_Logs
    * const tour_Logs = await prisma.tour_Logs.findMany()
    * ```
    */
  get tour_Logs(): Prisma.Tour_LogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tour_Itinerarys`: Exposes CRUD operations for the **Tour_Itinerarys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tour_Itinerarys
    * const tour_Itinerarys = await prisma.tour_Itinerarys.findMany()
    * ```
    */
  get tour_Itinerarys(): Prisma.Tour_ItinerarysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatbot_History`: Exposes CRUD operations for the **Chatbot_History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatbot_Histories
    * const chatbot_Histories = await prisma.chatbot_History.findMany()
    * ```
    */
  get chatbot_History(): Prisma.Chatbot_HistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aI_Recommendations`: Exposes CRUD operations for the **AI_Recommendations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AI_Recommendations
    * const aI_Recommendations = await prisma.aI_Recommendations.findMany()
    * ```
    */
  get aI_Recommendations(): Prisma.AI_RecommendationsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    Users: 'Users',
    Tours: 'Tours',
    Admin_Logs: 'Admin_Logs',
    Tours_Location: 'Tours_Location',
    Bookings: 'Bookings',
    ReviewImage: 'ReviewImage',
    Reviews: 'Reviews',
    Notifications: 'Notifications',
    Payments: 'Payments',
    Hotels: 'Hotels',
    Tour_Images: 'Tour_Images',
    Tour_Logs: 'Tour_Logs',
    Tour_Itinerarys: 'Tour_Itinerarys',
    Chatbot_History: 'Chatbot_History',
    AI_Recommendations: 'AI_Recommendations'
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
      modelProps: "users" | "tours" | "admin_Logs" | "tours_Location" | "bookings" | "reviewImage" | "reviews" | "notifications" | "payments" | "hotels" | "tour_Images" | "tour_Logs" | "tour_Itinerarys" | "chatbot_History" | "aI_Recommendations"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Tours: {
        payload: Prisma.$ToursPayload<ExtArgs>
        fields: Prisma.ToursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToursPayload>
          }
          findFirst: {
            args: Prisma.ToursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToursPayload>
          }
          findMany: {
            args: Prisma.ToursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToursPayload>[]
          }
          create: {
            args: Prisma.ToursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToursPayload>
          }
          createMany: {
            args: Prisma.ToursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ToursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToursPayload>
          }
          update: {
            args: Prisma.ToursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToursPayload>
          }
          deleteMany: {
            args: Prisma.ToursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ToursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToursPayload>
          }
          aggregate: {
            args: Prisma.ToursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTours>
          }
          groupBy: {
            args: Prisma.ToursGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToursGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToursCountArgs<ExtArgs>
            result: $Utils.Optional<ToursCountAggregateOutputType> | number
          }
        }
      }
      Admin_Logs: {
        payload: Prisma.$Admin_LogsPayload<ExtArgs>
        fields: Prisma.Admin_LogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Admin_LogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Admin_LogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Admin_LogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Admin_LogsPayload>
          }
          findFirst: {
            args: Prisma.Admin_LogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Admin_LogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Admin_LogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Admin_LogsPayload>
          }
          findMany: {
            args: Prisma.Admin_LogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Admin_LogsPayload>[]
          }
          create: {
            args: Prisma.Admin_LogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Admin_LogsPayload>
          }
          createMany: {
            args: Prisma.Admin_LogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Admin_LogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Admin_LogsPayload>
          }
          update: {
            args: Prisma.Admin_LogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Admin_LogsPayload>
          }
          deleteMany: {
            args: Prisma.Admin_LogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Admin_LogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Admin_LogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Admin_LogsPayload>
          }
          aggregate: {
            args: Prisma.Admin_LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin_Logs>
          }
          groupBy: {
            args: Prisma.Admin_LogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Admin_LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Admin_LogsCountArgs<ExtArgs>
            result: $Utils.Optional<Admin_LogsCountAggregateOutputType> | number
          }
        }
      }
      Tours_Location: {
        payload: Prisma.$Tours_LocationPayload<ExtArgs>
        fields: Prisma.Tours_LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tours_LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tours_LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tours_LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tours_LocationPayload>
          }
          findFirst: {
            args: Prisma.Tours_LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tours_LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tours_LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tours_LocationPayload>
          }
          findMany: {
            args: Prisma.Tours_LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tours_LocationPayload>[]
          }
          create: {
            args: Prisma.Tours_LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tours_LocationPayload>
          }
          createMany: {
            args: Prisma.Tours_LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Tours_LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tours_LocationPayload>
          }
          update: {
            args: Prisma.Tours_LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tours_LocationPayload>
          }
          deleteMany: {
            args: Prisma.Tours_LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tours_LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Tours_LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tours_LocationPayload>
          }
          aggregate: {
            args: Prisma.Tours_LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTours_Location>
          }
          groupBy: {
            args: Prisma.Tours_LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tours_LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.Tours_LocationCountArgs<ExtArgs>
            result: $Utils.Optional<Tours_LocationCountAggregateOutputType> | number
          }
        }
      }
      Bookings: {
        payload: Prisma.$BookingsPayload<ExtArgs>
        fields: Prisma.BookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findFirst: {
            args: Prisma.BookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findMany: {
            args: Prisma.BookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          create: {
            args: Prisma.BookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          createMany: {
            args: Prisma.BookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          update: {
            args: Prisma.BookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          deleteMany: {
            args: Prisma.BookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.BookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
          }
        }
      }
      ReviewImage: {
        payload: Prisma.$ReviewImagePayload<ExtArgs>
        fields: Prisma.ReviewImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          findFirst: {
            args: Prisma.ReviewImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          findMany: {
            args: Prisma.ReviewImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>[]
          }
          create: {
            args: Prisma.ReviewImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          createMany: {
            args: Prisma.ReviewImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          update: {
            args: Prisma.ReviewImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          deleteMany: {
            args: Prisma.ReviewImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          aggregate: {
            args: Prisma.ReviewImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewImage>
          }
          groupBy: {
            args: Prisma.ReviewImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewImageCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewImageCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      Hotels: {
        payload: Prisma.$HotelsPayload<ExtArgs>
        fields: Prisma.HotelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          findFirst: {
            args: Prisma.HotelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          findMany: {
            args: Prisma.HotelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>[]
          }
          create: {
            args: Prisma.HotelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          createMany: {
            args: Prisma.HotelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HotelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          update: {
            args: Prisma.HotelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          deleteMany: {
            args: Prisma.HotelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HotelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          aggregate: {
            args: Prisma.HotelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotels>
          }
          groupBy: {
            args: Prisma.HotelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelsCountArgs<ExtArgs>
            result: $Utils.Optional<HotelsCountAggregateOutputType> | number
          }
        }
      }
      Tour_Images: {
        payload: Prisma.$Tour_ImagesPayload<ExtArgs>
        fields: Prisma.Tour_ImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tour_ImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tour_ImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ImagesPayload>
          }
          findFirst: {
            args: Prisma.Tour_ImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tour_ImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ImagesPayload>
          }
          findMany: {
            args: Prisma.Tour_ImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ImagesPayload>[]
          }
          create: {
            args: Prisma.Tour_ImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ImagesPayload>
          }
          createMany: {
            args: Prisma.Tour_ImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Tour_ImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ImagesPayload>
          }
          update: {
            args: Prisma.Tour_ImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ImagesPayload>
          }
          deleteMany: {
            args: Prisma.Tour_ImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tour_ImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Tour_ImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ImagesPayload>
          }
          aggregate: {
            args: Prisma.Tour_ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTour_Images>
          }
          groupBy: {
            args: Prisma.Tour_ImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tour_ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Tour_ImagesCountArgs<ExtArgs>
            result: $Utils.Optional<Tour_ImagesCountAggregateOutputType> | number
          }
        }
      }
      Tour_Logs: {
        payload: Prisma.$Tour_LogsPayload<ExtArgs>
        fields: Prisma.Tour_LogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tour_LogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_LogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tour_LogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_LogsPayload>
          }
          findFirst: {
            args: Prisma.Tour_LogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_LogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tour_LogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_LogsPayload>
          }
          findMany: {
            args: Prisma.Tour_LogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_LogsPayload>[]
          }
          create: {
            args: Prisma.Tour_LogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_LogsPayload>
          }
          createMany: {
            args: Prisma.Tour_LogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Tour_LogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_LogsPayload>
          }
          update: {
            args: Prisma.Tour_LogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_LogsPayload>
          }
          deleteMany: {
            args: Prisma.Tour_LogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tour_LogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Tour_LogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_LogsPayload>
          }
          aggregate: {
            args: Prisma.Tour_LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTour_Logs>
          }
          groupBy: {
            args: Prisma.Tour_LogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tour_LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Tour_LogsCountArgs<ExtArgs>
            result: $Utils.Optional<Tour_LogsCountAggregateOutputType> | number
          }
        }
      }
      Tour_Itinerarys: {
        payload: Prisma.$Tour_ItinerarysPayload<ExtArgs>
        fields: Prisma.Tour_ItinerarysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tour_ItinerarysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ItinerarysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tour_ItinerarysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ItinerarysPayload>
          }
          findFirst: {
            args: Prisma.Tour_ItinerarysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ItinerarysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tour_ItinerarysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ItinerarysPayload>
          }
          findMany: {
            args: Prisma.Tour_ItinerarysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ItinerarysPayload>[]
          }
          create: {
            args: Prisma.Tour_ItinerarysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ItinerarysPayload>
          }
          createMany: {
            args: Prisma.Tour_ItinerarysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Tour_ItinerarysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ItinerarysPayload>
          }
          update: {
            args: Prisma.Tour_ItinerarysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ItinerarysPayload>
          }
          deleteMany: {
            args: Prisma.Tour_ItinerarysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tour_ItinerarysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Tour_ItinerarysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tour_ItinerarysPayload>
          }
          aggregate: {
            args: Prisma.Tour_ItinerarysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTour_Itinerarys>
          }
          groupBy: {
            args: Prisma.Tour_ItinerarysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tour_ItinerarysGroupByOutputType>[]
          }
          count: {
            args: Prisma.Tour_ItinerarysCountArgs<ExtArgs>
            result: $Utils.Optional<Tour_ItinerarysCountAggregateOutputType> | number
          }
        }
      }
      Chatbot_History: {
        payload: Prisma.$Chatbot_HistoryPayload<ExtArgs>
        fields: Prisma.Chatbot_HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Chatbot_HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Chatbot_HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Chatbot_HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Chatbot_HistoryPayload>
          }
          findFirst: {
            args: Prisma.Chatbot_HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Chatbot_HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Chatbot_HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Chatbot_HistoryPayload>
          }
          findMany: {
            args: Prisma.Chatbot_HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Chatbot_HistoryPayload>[]
          }
          create: {
            args: Prisma.Chatbot_HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Chatbot_HistoryPayload>
          }
          createMany: {
            args: Prisma.Chatbot_HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Chatbot_HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Chatbot_HistoryPayload>
          }
          update: {
            args: Prisma.Chatbot_HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Chatbot_HistoryPayload>
          }
          deleteMany: {
            args: Prisma.Chatbot_HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Chatbot_HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Chatbot_HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Chatbot_HistoryPayload>
          }
          aggregate: {
            args: Prisma.Chatbot_HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatbot_History>
          }
          groupBy: {
            args: Prisma.Chatbot_HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chatbot_HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.Chatbot_HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<Chatbot_HistoryCountAggregateOutputType> | number
          }
        }
      }
      AI_Recommendations: {
        payload: Prisma.$AI_RecommendationsPayload<ExtArgs>
        fields: Prisma.AI_RecommendationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AI_RecommendationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_RecommendationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AI_RecommendationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_RecommendationsPayload>
          }
          findFirst: {
            args: Prisma.AI_RecommendationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_RecommendationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AI_RecommendationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_RecommendationsPayload>
          }
          findMany: {
            args: Prisma.AI_RecommendationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_RecommendationsPayload>[]
          }
          create: {
            args: Prisma.AI_RecommendationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_RecommendationsPayload>
          }
          createMany: {
            args: Prisma.AI_RecommendationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AI_RecommendationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_RecommendationsPayload>
          }
          update: {
            args: Prisma.AI_RecommendationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_RecommendationsPayload>
          }
          deleteMany: {
            args: Prisma.AI_RecommendationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AI_RecommendationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AI_RecommendationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AI_RecommendationsPayload>
          }
          aggregate: {
            args: Prisma.AI_RecommendationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAI_Recommendations>
          }
          groupBy: {
            args: Prisma.AI_RecommendationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AI_RecommendationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AI_RecommendationsCountArgs<ExtArgs>
            result: $Utils.Optional<AI_RecommendationsCountAggregateOutputType> | number
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
    users?: UsersOmit
    tours?: ToursOmit
    admin_Logs?: Admin_LogsOmit
    tours_Location?: Tours_LocationOmit
    bookings?: BookingsOmit
    reviewImage?: ReviewImageOmit
    reviews?: ReviewsOmit
    notifications?: NotificationsOmit
    payments?: PaymentsOmit
    hotels?: HotelsOmit
    tour_Images?: Tour_ImagesOmit
    tour_Logs?: Tour_LogsOmit
    tour_Itinerarys?: Tour_ItinerarysOmit
    chatbot_History?: Chatbot_HistoryOmit
    aI_Recommendations?: AI_RecommendationsOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Bookings: number
    Reviews: number
    Notifications: number
    Admin_Logs: number
    AI_Recommendations: number
    Chatbot_History: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bookings?: boolean | UsersCountOutputTypeCountBookingsArgs
    Reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
    Notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
    Admin_Logs?: boolean | UsersCountOutputTypeCountAdmin_LogsArgs
    AI_Recommendations?: boolean | UsersCountOutputTypeCountAI_RecommendationsArgs
    Chatbot_History?: boolean | UsersCountOutputTypeCountChatbot_HistoryArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAdmin_LogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Admin_LogsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAI_RecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AI_RecommendationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountChatbot_HistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Chatbot_HistoryWhereInput
  }


  /**
   * Count Type ToursCountOutputType
   */

  export type ToursCountOutputType = {
    locations: number
    Bookings: number
    Reviews: number
    Tour_Images: number
    Tour_Logs: number
    Tour_Itinerarys: number
  }

  export type ToursCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | ToursCountOutputTypeCountLocationsArgs
    Bookings?: boolean | ToursCountOutputTypeCountBookingsArgs
    Reviews?: boolean | ToursCountOutputTypeCountReviewsArgs
    Tour_Images?: boolean | ToursCountOutputTypeCountTour_ImagesArgs
    Tour_Logs?: boolean | ToursCountOutputTypeCountTour_LogsArgs
    Tour_Itinerarys?: boolean | ToursCountOutputTypeCountTour_ItinerarysArgs
  }

  // Custom InputTypes
  /**
   * ToursCountOutputType without action
   */
  export type ToursCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToursCountOutputType
     */
    select?: ToursCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ToursCountOutputType without action
   */
  export type ToursCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tours_LocationWhereInput
  }

  /**
   * ToursCountOutputType without action
   */
  export type ToursCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }

  /**
   * ToursCountOutputType without action
   */
  export type ToursCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * ToursCountOutputType without action
   */
  export type ToursCountOutputTypeCountTour_ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tour_ImagesWhereInput
  }

  /**
   * ToursCountOutputType without action
   */
  export type ToursCountOutputTypeCountTour_LogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tour_LogsWhereInput
  }

  /**
   * ToursCountOutputType without action
   */
  export type ToursCountOutputTypeCountTour_ItinerarysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tour_ItinerarysWhereInput
  }


  /**
   * Count Type BookingsCountOutputType
   */

  export type BookingsCountOutputType = {
    Payments: number
  }

  export type BookingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payments?: boolean | BookingsCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingsCountOutputType
     */
    select?: BookingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingsCountOutputType without action
   */
  export type BookingsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }


  /**
   * Count Type ReviewsCountOutputType
   */

  export type ReviewsCountOutputType = {
    ReviewImages: number
  }

  export type ReviewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReviewImages?: boolean | ReviewsCountOutputTypeCountReviewImagesArgs
  }

  // Custom InputTypes
  /**
   * ReviewsCountOutputType without action
   */
  export type ReviewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewsCountOutputType
     */
    select?: ReviewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewsCountOutputType without action
   */
  export type ReviewsCountOutputTypeCountReviewImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: string | null
    isBlocked: boolean | null
    preferences: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: string | null
    isBlocked: boolean | null
    preferences: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    password: number
    phone: number
    role: number
    isBlocked: number
    preferences: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    isBlocked?: true
    preferences?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    isBlocked?: true
    preferences?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    isBlocked?: true
    preferences?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    name: string
    email: string
    password: string
    phone: string | null
    role: string
    isBlocked: boolean
    preferences: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    isBlocked?: boolean
    preferences?: boolean
    Bookings?: boolean | Users$BookingsArgs<ExtArgs>
    Reviews?: boolean | Users$ReviewsArgs<ExtArgs>
    Notifications?: boolean | Users$NotificationsArgs<ExtArgs>
    Admin_Logs?: boolean | Users$Admin_LogsArgs<ExtArgs>
    AI_Recommendations?: boolean | Users$AI_RecommendationsArgs<ExtArgs>
    Chatbot_History?: boolean | Users$Chatbot_HistoryArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    isBlocked?: boolean
    preferences?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "password" | "phone" | "role" | "isBlocked" | "preferences", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bookings?: boolean | Users$BookingsArgs<ExtArgs>
    Reviews?: boolean | Users$ReviewsArgs<ExtArgs>
    Notifications?: boolean | Users$NotificationsArgs<ExtArgs>
    Admin_Logs?: boolean | Users$Admin_LogsArgs<ExtArgs>
    AI_Recommendations?: boolean | Users$AI_RecommendationsArgs<ExtArgs>
    Chatbot_History?: boolean | Users$Chatbot_HistoryArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Bookings: Prisma.$BookingsPayload<ExtArgs>[]
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      Notifications: Prisma.$NotificationsPayload<ExtArgs>[]
      Admin_Logs: Prisma.$Admin_LogsPayload<ExtArgs>[]
      AI_Recommendations: Prisma.$AI_RecommendationsPayload<ExtArgs>[]
      Chatbot_History: Prisma.$Chatbot_HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string
      email: string
      password: string
      phone: string | null
      role: string
      isBlocked: boolean
      preferences: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bookings<T extends Users$BookingsArgs<ExtArgs> = {}>(args?: Subset<T, Users$BookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reviews<T extends Users$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Users$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Notifications<T extends Users$NotificationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$NotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Admin_Logs<T extends Users$Admin_LogsArgs<ExtArgs> = {}>(args?: Subset<T, Users$Admin_LogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Admin_LogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AI_Recommendations<T extends Users$AI_RecommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$AI_RecommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AI_RecommendationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Chatbot_History<T extends Users$Chatbot_HistoryArgs<ExtArgs> = {}>(args?: Subset<T, Users$Chatbot_HistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Chatbot_HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly isBlocked: FieldRef<"Users", 'Boolean'>
    readonly preferences: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Bookings
   */
  export type Users$BookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Users.Reviews
   */
  export type Users$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Users.Notifications
   */
  export type Users$NotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Users.Admin_Logs
   */
  export type Users$Admin_LogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin_Logs
     */
    select?: Admin_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin_Logs
     */
    omit?: Admin_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Admin_LogsInclude<ExtArgs> | null
    where?: Admin_LogsWhereInput
    orderBy?: Admin_LogsOrderByWithRelationInput | Admin_LogsOrderByWithRelationInput[]
    cursor?: Admin_LogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Admin_LogsScalarFieldEnum | Admin_LogsScalarFieldEnum[]
  }

  /**
   * Users.AI_Recommendations
   */
  export type Users$AI_RecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Recommendations
     */
    select?: AI_RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Recommendations
     */
    omit?: AI_RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_RecommendationsInclude<ExtArgs> | null
    where?: AI_RecommendationsWhereInput
    orderBy?: AI_RecommendationsOrderByWithRelationInput | AI_RecommendationsOrderByWithRelationInput[]
    cursor?: AI_RecommendationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AI_RecommendationsScalarFieldEnum | AI_RecommendationsScalarFieldEnum[]
  }

  /**
   * Users.Chatbot_History
   */
  export type Users$Chatbot_HistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot_History
     */
    select?: Chatbot_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot_History
     */
    omit?: Chatbot_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Chatbot_HistoryInclude<ExtArgs> | null
    where?: Chatbot_HistoryWhereInput
    orderBy?: Chatbot_HistoryOrderByWithRelationInput | Chatbot_HistoryOrderByWithRelationInput[]
    cursor?: Chatbot_HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chatbot_HistoryScalarFieldEnum | Chatbot_HistoryScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Tours
   */

  export type AggregateTours = {
    _count: ToursCountAggregateOutputType | null
    _avg: ToursAvgAggregateOutputType | null
    _sum: ToursSumAggregateOutputType | null
    _min: ToursMinAggregateOutputType | null
    _max: ToursMaxAggregateOutputType | null
  }

  export type ToursAvgAggregateOutputType = {
    tour_id: number | null
    price: Decimal | null
    duration: number | null
    available_seats: number | null
  }

  export type ToursSumAggregateOutputType = {
    tour_id: number | null
    price: Decimal | null
    duration: number | null
    available_seats: number | null
  }

  export type ToursMinAggregateOutputType = {
    tour_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    duration: number | null
    location: string | null
    image_url: string | null
    available_seats: number | null
  }

  export type ToursMaxAggregateOutputType = {
    tour_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    duration: number | null
    location: string | null
    image_url: string | null
    available_seats: number | null
  }

  export type ToursCountAggregateOutputType = {
    tour_id: number
    name: number
    description: number
    price: number
    duration: number
    location: number
    image_url: number
    available_seats: number
    _all: number
  }


  export type ToursAvgAggregateInputType = {
    tour_id?: true
    price?: true
    duration?: true
    available_seats?: true
  }

  export type ToursSumAggregateInputType = {
    tour_id?: true
    price?: true
    duration?: true
    available_seats?: true
  }

  export type ToursMinAggregateInputType = {
    tour_id?: true
    name?: true
    description?: true
    price?: true
    duration?: true
    location?: true
    image_url?: true
    available_seats?: true
  }

  export type ToursMaxAggregateInputType = {
    tour_id?: true
    name?: true
    description?: true
    price?: true
    duration?: true
    location?: true
    image_url?: true
    available_seats?: true
  }

  export type ToursCountAggregateInputType = {
    tour_id?: true
    name?: true
    description?: true
    price?: true
    duration?: true
    location?: true
    image_url?: true
    available_seats?: true
    _all?: true
  }

  export type ToursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tours to aggregate.
     */
    where?: ToursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: ToursOrderByWithRelationInput | ToursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tours
    **/
    _count?: true | ToursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToursMaxAggregateInputType
  }

  export type GetToursAggregateType<T extends ToursAggregateArgs> = {
        [P in keyof T & keyof AggregateTours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTours[P]>
      : GetScalarType<T[P], AggregateTours[P]>
  }




  export type ToursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToursWhereInput
    orderBy?: ToursOrderByWithAggregationInput | ToursOrderByWithAggregationInput[]
    by: ToursScalarFieldEnum[] | ToursScalarFieldEnum
    having?: ToursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToursCountAggregateInputType | true
    _avg?: ToursAvgAggregateInputType
    _sum?: ToursSumAggregateInputType
    _min?: ToursMinAggregateInputType
    _max?: ToursMaxAggregateInputType
  }

  export type ToursGroupByOutputType = {
    tour_id: number
    name: string
    description: string | null
    price: Decimal
    duration: number
    location: string
    image_url: string | null
    available_seats: number
    _count: ToursCountAggregateOutputType | null
    _avg: ToursAvgAggregateOutputType | null
    _sum: ToursSumAggregateOutputType | null
    _min: ToursMinAggregateOutputType | null
    _max: ToursMaxAggregateOutputType | null
  }

  type GetToursGroupByPayload<T extends ToursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToursGroupByOutputType[P]>
            : GetScalarType<T[P], ToursGroupByOutputType[P]>
        }
      >
    >


  export type ToursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tour_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    location?: boolean
    image_url?: boolean
    available_seats?: boolean
    locations?: boolean | Tours$locationsArgs<ExtArgs>
    Bookings?: boolean | Tours$BookingsArgs<ExtArgs>
    Reviews?: boolean | Tours$ReviewsArgs<ExtArgs>
    Tour_Images?: boolean | Tours$Tour_ImagesArgs<ExtArgs>
    Tour_Logs?: boolean | Tours$Tour_LogsArgs<ExtArgs>
    Tour_Itinerarys?: boolean | Tours$Tour_ItinerarysArgs<ExtArgs>
    _count?: boolean | ToursCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tours"]>



  export type ToursSelectScalar = {
    tour_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    location?: boolean
    image_url?: boolean
    available_seats?: boolean
  }

  export type ToursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tour_id" | "name" | "description" | "price" | "duration" | "location" | "image_url" | "available_seats", ExtArgs["result"]["tours"]>
  export type ToursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | Tours$locationsArgs<ExtArgs>
    Bookings?: boolean | Tours$BookingsArgs<ExtArgs>
    Reviews?: boolean | Tours$ReviewsArgs<ExtArgs>
    Tour_Images?: boolean | Tours$Tour_ImagesArgs<ExtArgs>
    Tour_Logs?: boolean | Tours$Tour_LogsArgs<ExtArgs>
    Tour_Itinerarys?: boolean | Tours$Tour_ItinerarysArgs<ExtArgs>
    _count?: boolean | ToursCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ToursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tours"
    objects: {
      locations: Prisma.$Tours_LocationPayload<ExtArgs>[]
      Bookings: Prisma.$BookingsPayload<ExtArgs>[]
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      Tour_Images: Prisma.$Tour_ImagesPayload<ExtArgs>[]
      Tour_Logs: Prisma.$Tour_LogsPayload<ExtArgs>[]
      Tour_Itinerarys: Prisma.$Tour_ItinerarysPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tour_id: number
      name: string
      description: string | null
      price: Prisma.Decimal
      duration: number
      location: string
      image_url: string | null
      available_seats: number
    }, ExtArgs["result"]["tours"]>
    composites: {}
  }

  type ToursGetPayload<S extends boolean | null | undefined | ToursDefaultArgs> = $Result.GetResult<Prisma.$ToursPayload, S>

  type ToursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToursCountAggregateInputType | true
    }

  export interface ToursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tours'], meta: { name: 'Tours' } }
    /**
     * Find zero or one Tours that matches the filter.
     * @param {ToursFindUniqueArgs} args - Arguments to find a Tours
     * @example
     * // Get one Tours
     * const tours = await prisma.tours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToursFindUniqueArgs>(args: SelectSubset<T, ToursFindUniqueArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToursFindUniqueOrThrowArgs} args - Arguments to find a Tours
     * @example
     * // Get one Tours
     * const tours = await prisma.tours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToursFindUniqueOrThrowArgs>(args: SelectSubset<T, ToursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToursFindFirstArgs} args - Arguments to find a Tours
     * @example
     * // Get one Tours
     * const tours = await prisma.tours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToursFindFirstArgs>(args?: SelectSubset<T, ToursFindFirstArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToursFindFirstOrThrowArgs} args - Arguments to find a Tours
     * @example
     * // Get one Tours
     * const tours = await prisma.tours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToursFindFirstOrThrowArgs>(args?: SelectSubset<T, ToursFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tours
     * const tours = await prisma.tours.findMany()
     * 
     * // Get first 10 Tours
     * const tours = await prisma.tours.findMany({ take: 10 })
     * 
     * // Only select the `tour_id`
     * const toursWithTour_idOnly = await prisma.tours.findMany({ select: { tour_id: true } })
     * 
     */
    findMany<T extends ToursFindManyArgs>(args?: SelectSubset<T, ToursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tours.
     * @param {ToursCreateArgs} args - Arguments to create a Tours.
     * @example
     * // Create one Tours
     * const Tours = await prisma.tours.create({
     *   data: {
     *     // ... data to create a Tours
     *   }
     * })
     * 
     */
    create<T extends ToursCreateArgs>(args: SelectSubset<T, ToursCreateArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tours.
     * @param {ToursCreateManyArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tours = await prisma.tours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToursCreateManyArgs>(args?: SelectSubset<T, ToursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tours.
     * @param {ToursDeleteArgs} args - Arguments to delete one Tours.
     * @example
     * // Delete one Tours
     * const Tours = await prisma.tours.delete({
     *   where: {
     *     // ... filter to delete one Tours
     *   }
     * })
     * 
     */
    delete<T extends ToursDeleteArgs>(args: SelectSubset<T, ToursDeleteArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tours.
     * @param {ToursUpdateArgs} args - Arguments to update one Tours.
     * @example
     * // Update one Tours
     * const tours = await prisma.tours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToursUpdateArgs>(args: SelectSubset<T, ToursUpdateArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tours.
     * @param {ToursDeleteManyArgs} args - Arguments to filter Tours to delete.
     * @example
     * // Delete a few Tours
     * const { count } = await prisma.tours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToursDeleteManyArgs>(args?: SelectSubset<T, ToursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tours
     * const tours = await prisma.tours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToursUpdateManyArgs>(args: SelectSubset<T, ToursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tours.
     * @param {ToursUpsertArgs} args - Arguments to update or create a Tours.
     * @example
     * // Update or create a Tours
     * const tours = await prisma.tours.upsert({
     *   create: {
     *     // ... data to create a Tours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tours we want to update
     *   }
     * })
     */
    upsert<T extends ToursUpsertArgs>(args: SelectSubset<T, ToursUpsertArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToursCountArgs} args - Arguments to filter Tours to count.
     * @example
     * // Count the number of Tours
     * const count = await prisma.tours.count({
     *   where: {
     *     // ... the filter for the Tours we want to count
     *   }
     * })
    **/
    count<T extends ToursCountArgs>(
      args?: Subset<T, ToursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToursAggregateArgs>(args: Subset<T, ToursAggregateArgs>): Prisma.PrismaPromise<GetToursAggregateType<T>>

    /**
     * Group by Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToursGroupByArgs} args - Group by arguments.
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
      T extends ToursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToursGroupByArgs['orderBy'] }
        : { orderBy?: ToursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tours model
   */
  readonly fields: ToursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locations<T extends Tours$locationsArgs<ExtArgs> = {}>(args?: Subset<T, Tours$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tours_LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Bookings<T extends Tours$BookingsArgs<ExtArgs> = {}>(args?: Subset<T, Tours$BookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reviews<T extends Tours$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Tours$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Tour_Images<T extends Tours$Tour_ImagesArgs<ExtArgs> = {}>(args?: Subset<T, Tours$Tour_ImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tour_ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Tour_Logs<T extends Tours$Tour_LogsArgs<ExtArgs> = {}>(args?: Subset<T, Tours$Tour_LogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tour_LogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Tour_Itinerarys<T extends Tours$Tour_ItinerarysArgs<ExtArgs> = {}>(args?: Subset<T, Tours$Tour_ItinerarysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tour_ItinerarysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tours model
   */ 
  interface ToursFieldRefs {
    readonly tour_id: FieldRef<"Tours", 'Int'>
    readonly name: FieldRef<"Tours", 'String'>
    readonly description: FieldRef<"Tours", 'String'>
    readonly price: FieldRef<"Tours", 'Decimal'>
    readonly duration: FieldRef<"Tours", 'Int'>
    readonly location: FieldRef<"Tours", 'String'>
    readonly image_url: FieldRef<"Tours", 'String'>
    readonly available_seats: FieldRef<"Tours", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tours findUnique
   */
  export type ToursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours
     */
    select?: ToursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours
     */
    omit?: ToursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToursInclude<ExtArgs> | null
    /**
     * Filter, which Tours to fetch.
     */
    where: ToursWhereUniqueInput
  }

  /**
   * Tours findUniqueOrThrow
   */
  export type ToursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours
     */
    select?: ToursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours
     */
    omit?: ToursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToursInclude<ExtArgs> | null
    /**
     * Filter, which Tours to fetch.
     */
    where: ToursWhereUniqueInput
  }

  /**
   * Tours findFirst
   */
  export type ToursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours
     */
    select?: ToursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours
     */
    omit?: ToursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToursInclude<ExtArgs> | null
    /**
     * Filter, which Tours to fetch.
     */
    where?: ToursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: ToursOrderByWithRelationInput | ToursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: ToursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: ToursScalarFieldEnum | ToursScalarFieldEnum[]
  }

  /**
   * Tours findFirstOrThrow
   */
  export type ToursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours
     */
    select?: ToursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours
     */
    omit?: ToursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToursInclude<ExtArgs> | null
    /**
     * Filter, which Tours to fetch.
     */
    where?: ToursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: ToursOrderByWithRelationInput | ToursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: ToursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: ToursScalarFieldEnum | ToursScalarFieldEnum[]
  }

  /**
   * Tours findMany
   */
  export type ToursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours
     */
    select?: ToursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours
     */
    omit?: ToursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToursInclude<ExtArgs> | null
    /**
     * Filter, which Tours to fetch.
     */
    where?: ToursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: ToursOrderByWithRelationInput | ToursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tours.
     */
    cursor?: ToursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    distinct?: ToursScalarFieldEnum | ToursScalarFieldEnum[]
  }

  /**
   * Tours create
   */
  export type ToursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours
     */
    select?: ToursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours
     */
    omit?: ToursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToursInclude<ExtArgs> | null
    /**
     * The data needed to create a Tours.
     */
    data: XOR<ToursCreateInput, ToursUncheckedCreateInput>
  }

  /**
   * Tours createMany
   */
  export type ToursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tours.
     */
    data: ToursCreateManyInput | ToursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tours update
   */
  export type ToursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours
     */
    select?: ToursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours
     */
    omit?: ToursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToursInclude<ExtArgs> | null
    /**
     * The data needed to update a Tours.
     */
    data: XOR<ToursUpdateInput, ToursUncheckedUpdateInput>
    /**
     * Choose, which Tours to update.
     */
    where: ToursWhereUniqueInput
  }

  /**
   * Tours updateMany
   */
  export type ToursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tours.
     */
    data: XOR<ToursUpdateManyMutationInput, ToursUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: ToursWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
  }

  /**
   * Tours upsert
   */
  export type ToursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours
     */
    select?: ToursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours
     */
    omit?: ToursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToursInclude<ExtArgs> | null
    /**
     * The filter to search for the Tours to update in case it exists.
     */
    where: ToursWhereUniqueInput
    /**
     * In case the Tours found by the `where` argument doesn't exist, create a new Tours with this data.
     */
    create: XOR<ToursCreateInput, ToursUncheckedCreateInput>
    /**
     * In case the Tours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToursUpdateInput, ToursUncheckedUpdateInput>
  }

  /**
   * Tours delete
   */
  export type ToursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours
     */
    select?: ToursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours
     */
    omit?: ToursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToursInclude<ExtArgs> | null
    /**
     * Filter which Tours to delete.
     */
    where: ToursWhereUniqueInput
  }

  /**
   * Tours deleteMany
   */
  export type ToursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tours to delete
     */
    where?: ToursWhereInput
    /**
     * Limit how many Tours to delete.
     */
    limit?: number
  }

  /**
   * Tours.locations
   */
  export type Tours$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours_Location
     */
    select?: Tours_LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours_Location
     */
    omit?: Tours_LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tours_LocationInclude<ExtArgs> | null
    where?: Tours_LocationWhereInput
    orderBy?: Tours_LocationOrderByWithRelationInput | Tours_LocationOrderByWithRelationInput[]
    cursor?: Tours_LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tours_LocationScalarFieldEnum | Tours_LocationScalarFieldEnum[]
  }

  /**
   * Tours.Bookings
   */
  export type Tours$BookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Tours.Reviews
   */
  export type Tours$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Tours.Tour_Images
   */
  export type Tours$Tour_ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Images
     */
    select?: Tour_ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Images
     */
    omit?: Tour_ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ImagesInclude<ExtArgs> | null
    where?: Tour_ImagesWhereInput
    orderBy?: Tour_ImagesOrderByWithRelationInput | Tour_ImagesOrderByWithRelationInput[]
    cursor?: Tour_ImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tour_ImagesScalarFieldEnum | Tour_ImagesScalarFieldEnum[]
  }

  /**
   * Tours.Tour_Logs
   */
  export type Tours$Tour_LogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Logs
     */
    select?: Tour_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Logs
     */
    omit?: Tour_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_LogsInclude<ExtArgs> | null
    where?: Tour_LogsWhereInput
    orderBy?: Tour_LogsOrderByWithRelationInput | Tour_LogsOrderByWithRelationInput[]
    cursor?: Tour_LogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tour_LogsScalarFieldEnum | Tour_LogsScalarFieldEnum[]
  }

  /**
   * Tours.Tour_Itinerarys
   */
  export type Tours$Tour_ItinerarysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Itinerarys
     */
    select?: Tour_ItinerarysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Itinerarys
     */
    omit?: Tour_ItinerarysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ItinerarysInclude<ExtArgs> | null
    where?: Tour_ItinerarysWhereInput
    orderBy?: Tour_ItinerarysOrderByWithRelationInput | Tour_ItinerarysOrderByWithRelationInput[]
    cursor?: Tour_ItinerarysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tour_ItinerarysScalarFieldEnum | Tour_ItinerarysScalarFieldEnum[]
  }

  /**
   * Tours without action
   */
  export type ToursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours
     */
    select?: ToursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours
     */
    omit?: ToursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToursInclude<ExtArgs> | null
  }


  /**
   * Model Admin_Logs
   */

  export type AggregateAdmin_Logs = {
    _count: Admin_LogsCountAggregateOutputType | null
    _avg: Admin_LogsAvgAggregateOutputType | null
    _sum: Admin_LogsSumAggregateOutputType | null
    _min: Admin_LogsMinAggregateOutputType | null
    _max: Admin_LogsMaxAggregateOutputType | null
  }

  export type Admin_LogsAvgAggregateOutputType = {
    log_id: number | null
    admin_id: number | null
  }

  export type Admin_LogsSumAggregateOutputType = {
    log_id: number | null
    admin_id: number | null
  }

  export type Admin_LogsMinAggregateOutputType = {
    log_id: number | null
    admin_id: number | null
    action: string | null
    action_date: Date | null
  }

  export type Admin_LogsMaxAggregateOutputType = {
    log_id: number | null
    admin_id: number | null
    action: string | null
    action_date: Date | null
  }

  export type Admin_LogsCountAggregateOutputType = {
    log_id: number
    admin_id: number
    action: number
    action_date: number
    _all: number
  }


  export type Admin_LogsAvgAggregateInputType = {
    log_id?: true
    admin_id?: true
  }

  export type Admin_LogsSumAggregateInputType = {
    log_id?: true
    admin_id?: true
  }

  export type Admin_LogsMinAggregateInputType = {
    log_id?: true
    admin_id?: true
    action?: true
    action_date?: true
  }

  export type Admin_LogsMaxAggregateInputType = {
    log_id?: true
    admin_id?: true
    action?: true
    action_date?: true
  }

  export type Admin_LogsCountAggregateInputType = {
    log_id?: true
    admin_id?: true
    action?: true
    action_date?: true
    _all?: true
  }

  export type Admin_LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin_Logs to aggregate.
     */
    where?: Admin_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admin_Logs to fetch.
     */
    orderBy?: Admin_LogsOrderByWithRelationInput | Admin_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Admin_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admin_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admin_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admin_Logs
    **/
    _count?: true | Admin_LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Admin_LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Admin_LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Admin_LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Admin_LogsMaxAggregateInputType
  }

  export type GetAdmin_LogsAggregateType<T extends Admin_LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin_Logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin_Logs[P]>
      : GetScalarType<T[P], AggregateAdmin_Logs[P]>
  }




  export type Admin_LogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Admin_LogsWhereInput
    orderBy?: Admin_LogsOrderByWithAggregationInput | Admin_LogsOrderByWithAggregationInput[]
    by: Admin_LogsScalarFieldEnum[] | Admin_LogsScalarFieldEnum
    having?: Admin_LogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Admin_LogsCountAggregateInputType | true
    _avg?: Admin_LogsAvgAggregateInputType
    _sum?: Admin_LogsSumAggregateInputType
    _min?: Admin_LogsMinAggregateInputType
    _max?: Admin_LogsMaxAggregateInputType
  }

  export type Admin_LogsGroupByOutputType = {
    log_id: number
    admin_id: number
    action: string
    action_date: Date
    _count: Admin_LogsCountAggregateOutputType | null
    _avg: Admin_LogsAvgAggregateOutputType | null
    _sum: Admin_LogsSumAggregateOutputType | null
    _min: Admin_LogsMinAggregateOutputType | null
    _max: Admin_LogsMaxAggregateOutputType | null
  }

  type GetAdmin_LogsGroupByPayload<T extends Admin_LogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Admin_LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Admin_LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Admin_LogsGroupByOutputType[P]>
            : GetScalarType<T[P], Admin_LogsGroupByOutputType[P]>
        }
      >
    >


  export type Admin_LogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    admin_id?: boolean
    action?: boolean
    action_date?: boolean
    admin?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin_Logs"]>



  export type Admin_LogsSelectScalar = {
    log_id?: boolean
    admin_id?: boolean
    action?: boolean
    action_date?: boolean
  }

  export type Admin_LogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"log_id" | "admin_id" | "action" | "action_date", ExtArgs["result"]["admin_Logs"]>
  export type Admin_LogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $Admin_LogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin_Logs"
    objects: {
      admin: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      log_id: number
      admin_id: number
      action: string
      action_date: Date
    }, ExtArgs["result"]["admin_Logs"]>
    composites: {}
  }

  type Admin_LogsGetPayload<S extends boolean | null | undefined | Admin_LogsDefaultArgs> = $Result.GetResult<Prisma.$Admin_LogsPayload, S>

  type Admin_LogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Admin_LogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Admin_LogsCountAggregateInputType | true
    }

  export interface Admin_LogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin_Logs'], meta: { name: 'Admin_Logs' } }
    /**
     * Find zero or one Admin_Logs that matches the filter.
     * @param {Admin_LogsFindUniqueArgs} args - Arguments to find a Admin_Logs
     * @example
     * // Get one Admin_Logs
     * const admin_Logs = await prisma.admin_Logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Admin_LogsFindUniqueArgs>(args: SelectSubset<T, Admin_LogsFindUniqueArgs<ExtArgs>>): Prisma__Admin_LogsClient<$Result.GetResult<Prisma.$Admin_LogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin_Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Admin_LogsFindUniqueOrThrowArgs} args - Arguments to find a Admin_Logs
     * @example
     * // Get one Admin_Logs
     * const admin_Logs = await prisma.admin_Logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Admin_LogsFindUniqueOrThrowArgs>(args: SelectSubset<T, Admin_LogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Admin_LogsClient<$Result.GetResult<Prisma.$Admin_LogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_LogsFindFirstArgs} args - Arguments to find a Admin_Logs
     * @example
     * // Get one Admin_Logs
     * const admin_Logs = await prisma.admin_Logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Admin_LogsFindFirstArgs>(args?: SelectSubset<T, Admin_LogsFindFirstArgs<ExtArgs>>): Prisma__Admin_LogsClient<$Result.GetResult<Prisma.$Admin_LogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin_Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_LogsFindFirstOrThrowArgs} args - Arguments to find a Admin_Logs
     * @example
     * // Get one Admin_Logs
     * const admin_Logs = await prisma.admin_Logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Admin_LogsFindFirstOrThrowArgs>(args?: SelectSubset<T, Admin_LogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Admin_LogsClient<$Result.GetResult<Prisma.$Admin_LogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admin_Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_LogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admin_Logs
     * const admin_Logs = await prisma.admin_Logs.findMany()
     * 
     * // Get first 10 Admin_Logs
     * const admin_Logs = await prisma.admin_Logs.findMany({ take: 10 })
     * 
     * // Only select the `log_id`
     * const admin_LogsWithLog_idOnly = await prisma.admin_Logs.findMany({ select: { log_id: true } })
     * 
     */
    findMany<T extends Admin_LogsFindManyArgs>(args?: SelectSubset<T, Admin_LogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Admin_LogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin_Logs.
     * @param {Admin_LogsCreateArgs} args - Arguments to create a Admin_Logs.
     * @example
     * // Create one Admin_Logs
     * const Admin_Logs = await prisma.admin_Logs.create({
     *   data: {
     *     // ... data to create a Admin_Logs
     *   }
     * })
     * 
     */
    create<T extends Admin_LogsCreateArgs>(args: SelectSubset<T, Admin_LogsCreateArgs<ExtArgs>>): Prisma__Admin_LogsClient<$Result.GetResult<Prisma.$Admin_LogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admin_Logs.
     * @param {Admin_LogsCreateManyArgs} args - Arguments to create many Admin_Logs.
     * @example
     * // Create many Admin_Logs
     * const admin_Logs = await prisma.admin_Logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Admin_LogsCreateManyArgs>(args?: SelectSubset<T, Admin_LogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin_Logs.
     * @param {Admin_LogsDeleteArgs} args - Arguments to delete one Admin_Logs.
     * @example
     * // Delete one Admin_Logs
     * const Admin_Logs = await prisma.admin_Logs.delete({
     *   where: {
     *     // ... filter to delete one Admin_Logs
     *   }
     * })
     * 
     */
    delete<T extends Admin_LogsDeleteArgs>(args: SelectSubset<T, Admin_LogsDeleteArgs<ExtArgs>>): Prisma__Admin_LogsClient<$Result.GetResult<Prisma.$Admin_LogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin_Logs.
     * @param {Admin_LogsUpdateArgs} args - Arguments to update one Admin_Logs.
     * @example
     * // Update one Admin_Logs
     * const admin_Logs = await prisma.admin_Logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Admin_LogsUpdateArgs>(args: SelectSubset<T, Admin_LogsUpdateArgs<ExtArgs>>): Prisma__Admin_LogsClient<$Result.GetResult<Prisma.$Admin_LogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admin_Logs.
     * @param {Admin_LogsDeleteManyArgs} args - Arguments to filter Admin_Logs to delete.
     * @example
     * // Delete a few Admin_Logs
     * const { count } = await prisma.admin_Logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Admin_LogsDeleteManyArgs>(args?: SelectSubset<T, Admin_LogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admin_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_LogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admin_Logs
     * const admin_Logs = await prisma.admin_Logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Admin_LogsUpdateManyArgs>(args: SelectSubset<T, Admin_LogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin_Logs.
     * @param {Admin_LogsUpsertArgs} args - Arguments to update or create a Admin_Logs.
     * @example
     * // Update or create a Admin_Logs
     * const admin_Logs = await prisma.admin_Logs.upsert({
     *   create: {
     *     // ... data to create a Admin_Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin_Logs we want to update
     *   }
     * })
     */
    upsert<T extends Admin_LogsUpsertArgs>(args: SelectSubset<T, Admin_LogsUpsertArgs<ExtArgs>>): Prisma__Admin_LogsClient<$Result.GetResult<Prisma.$Admin_LogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admin_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_LogsCountArgs} args - Arguments to filter Admin_Logs to count.
     * @example
     * // Count the number of Admin_Logs
     * const count = await prisma.admin_Logs.count({
     *   where: {
     *     // ... the filter for the Admin_Logs we want to count
     *   }
     * })
    **/
    count<T extends Admin_LogsCountArgs>(
      args?: Subset<T, Admin_LogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Admin_LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Admin_LogsAggregateArgs>(args: Subset<T, Admin_LogsAggregateArgs>): Prisma.PrismaPromise<GetAdmin_LogsAggregateType<T>>

    /**
     * Group by Admin_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Admin_LogsGroupByArgs} args - Group by arguments.
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
      T extends Admin_LogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Admin_LogsGroupByArgs['orderBy'] }
        : { orderBy?: Admin_LogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Admin_LogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmin_LogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin_Logs model
   */
  readonly fields: Admin_LogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin_Logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Admin_LogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Admin_Logs model
   */ 
  interface Admin_LogsFieldRefs {
    readonly log_id: FieldRef<"Admin_Logs", 'Int'>
    readonly admin_id: FieldRef<"Admin_Logs", 'Int'>
    readonly action: FieldRef<"Admin_Logs", 'String'>
    readonly action_date: FieldRef<"Admin_Logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin_Logs findUnique
   */
  export type Admin_LogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin_Logs
     */
    select?: Admin_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin_Logs
     */
    omit?: Admin_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Admin_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Admin_Logs to fetch.
     */
    where: Admin_LogsWhereUniqueInput
  }

  /**
   * Admin_Logs findUniqueOrThrow
   */
  export type Admin_LogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin_Logs
     */
    select?: Admin_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin_Logs
     */
    omit?: Admin_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Admin_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Admin_Logs to fetch.
     */
    where: Admin_LogsWhereUniqueInput
  }

  /**
   * Admin_Logs findFirst
   */
  export type Admin_LogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin_Logs
     */
    select?: Admin_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin_Logs
     */
    omit?: Admin_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Admin_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Admin_Logs to fetch.
     */
    where?: Admin_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admin_Logs to fetch.
     */
    orderBy?: Admin_LogsOrderByWithRelationInput | Admin_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admin_Logs.
     */
    cursor?: Admin_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admin_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admin_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admin_Logs.
     */
    distinct?: Admin_LogsScalarFieldEnum | Admin_LogsScalarFieldEnum[]
  }

  /**
   * Admin_Logs findFirstOrThrow
   */
  export type Admin_LogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin_Logs
     */
    select?: Admin_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin_Logs
     */
    omit?: Admin_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Admin_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Admin_Logs to fetch.
     */
    where?: Admin_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admin_Logs to fetch.
     */
    orderBy?: Admin_LogsOrderByWithRelationInput | Admin_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admin_Logs.
     */
    cursor?: Admin_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admin_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admin_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admin_Logs.
     */
    distinct?: Admin_LogsScalarFieldEnum | Admin_LogsScalarFieldEnum[]
  }

  /**
   * Admin_Logs findMany
   */
  export type Admin_LogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin_Logs
     */
    select?: Admin_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin_Logs
     */
    omit?: Admin_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Admin_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Admin_Logs to fetch.
     */
    where?: Admin_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admin_Logs to fetch.
     */
    orderBy?: Admin_LogsOrderByWithRelationInput | Admin_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admin_Logs.
     */
    cursor?: Admin_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admin_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admin_Logs.
     */
    skip?: number
    distinct?: Admin_LogsScalarFieldEnum | Admin_LogsScalarFieldEnum[]
  }

  /**
   * Admin_Logs create
   */
  export type Admin_LogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin_Logs
     */
    select?: Admin_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin_Logs
     */
    omit?: Admin_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Admin_LogsInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin_Logs.
     */
    data: XOR<Admin_LogsCreateInput, Admin_LogsUncheckedCreateInput>
  }

  /**
   * Admin_Logs createMany
   */
  export type Admin_LogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admin_Logs.
     */
    data: Admin_LogsCreateManyInput | Admin_LogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin_Logs update
   */
  export type Admin_LogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin_Logs
     */
    select?: Admin_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin_Logs
     */
    omit?: Admin_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Admin_LogsInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin_Logs.
     */
    data: XOR<Admin_LogsUpdateInput, Admin_LogsUncheckedUpdateInput>
    /**
     * Choose, which Admin_Logs to update.
     */
    where: Admin_LogsWhereUniqueInput
  }

  /**
   * Admin_Logs updateMany
   */
  export type Admin_LogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admin_Logs.
     */
    data: XOR<Admin_LogsUpdateManyMutationInput, Admin_LogsUncheckedUpdateManyInput>
    /**
     * Filter which Admin_Logs to update
     */
    where?: Admin_LogsWhereInput
    /**
     * Limit how many Admin_Logs to update.
     */
    limit?: number
  }

  /**
   * Admin_Logs upsert
   */
  export type Admin_LogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin_Logs
     */
    select?: Admin_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin_Logs
     */
    omit?: Admin_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Admin_LogsInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin_Logs to update in case it exists.
     */
    where: Admin_LogsWhereUniqueInput
    /**
     * In case the Admin_Logs found by the `where` argument doesn't exist, create a new Admin_Logs with this data.
     */
    create: XOR<Admin_LogsCreateInput, Admin_LogsUncheckedCreateInput>
    /**
     * In case the Admin_Logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Admin_LogsUpdateInput, Admin_LogsUncheckedUpdateInput>
  }

  /**
   * Admin_Logs delete
   */
  export type Admin_LogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin_Logs
     */
    select?: Admin_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin_Logs
     */
    omit?: Admin_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Admin_LogsInclude<ExtArgs> | null
    /**
     * Filter which Admin_Logs to delete.
     */
    where: Admin_LogsWhereUniqueInput
  }

  /**
   * Admin_Logs deleteMany
   */
  export type Admin_LogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin_Logs to delete
     */
    where?: Admin_LogsWhereInput
    /**
     * Limit how many Admin_Logs to delete.
     */
    limit?: number
  }

  /**
   * Admin_Logs without action
   */
  export type Admin_LogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin_Logs
     */
    select?: Admin_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin_Logs
     */
    omit?: Admin_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Admin_LogsInclude<ExtArgs> | null
  }


  /**
   * Model Tours_Location
   */

  export type AggregateTours_Location = {
    _count: Tours_LocationCountAggregateOutputType | null
    _avg: Tours_LocationAvgAggregateOutputType | null
    _sum: Tours_LocationSumAggregateOutputType | null
    _min: Tours_LocationMinAggregateOutputType | null
    _max: Tours_LocationMaxAggregateOutputType | null
  }

  export type Tours_LocationAvgAggregateOutputType = {
    location_id: number | null
    tour_id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type Tours_LocationSumAggregateOutputType = {
    location_id: number | null
    tour_id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type Tours_LocationMinAggregateOutputType = {
    location_id: number | null
    tour_id: number | null
    location_name: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    description: string | null
  }

  export type Tours_LocationMaxAggregateOutputType = {
    location_id: number | null
    tour_id: number | null
    location_name: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    description: string | null
  }

  export type Tours_LocationCountAggregateOutputType = {
    location_id: number
    tour_id: number
    location_name: number
    latitude: number
    longitude: number
    description: number
    _all: number
  }


  export type Tours_LocationAvgAggregateInputType = {
    location_id?: true
    tour_id?: true
    latitude?: true
    longitude?: true
  }

  export type Tours_LocationSumAggregateInputType = {
    location_id?: true
    tour_id?: true
    latitude?: true
    longitude?: true
  }

  export type Tours_LocationMinAggregateInputType = {
    location_id?: true
    tour_id?: true
    location_name?: true
    latitude?: true
    longitude?: true
    description?: true
  }

  export type Tours_LocationMaxAggregateInputType = {
    location_id?: true
    tour_id?: true
    location_name?: true
    latitude?: true
    longitude?: true
    description?: true
  }

  export type Tours_LocationCountAggregateInputType = {
    location_id?: true
    tour_id?: true
    location_name?: true
    latitude?: true
    longitude?: true
    description?: true
    _all?: true
  }

  export type Tours_LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tours_Location to aggregate.
     */
    where?: Tours_LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours_Locations to fetch.
     */
    orderBy?: Tours_LocationOrderByWithRelationInput | Tours_LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tours_LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours_Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours_Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tours_Locations
    **/
    _count?: true | Tours_LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tours_LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tours_LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tours_LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tours_LocationMaxAggregateInputType
  }

  export type GetTours_LocationAggregateType<T extends Tours_LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateTours_Location]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTours_Location[P]>
      : GetScalarType<T[P], AggregateTours_Location[P]>
  }




  export type Tours_LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tours_LocationWhereInput
    orderBy?: Tours_LocationOrderByWithAggregationInput | Tours_LocationOrderByWithAggregationInput[]
    by: Tours_LocationScalarFieldEnum[] | Tours_LocationScalarFieldEnum
    having?: Tours_LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tours_LocationCountAggregateInputType | true
    _avg?: Tours_LocationAvgAggregateInputType
    _sum?: Tours_LocationSumAggregateInputType
    _min?: Tours_LocationMinAggregateInputType
    _max?: Tours_LocationMaxAggregateInputType
  }

  export type Tours_LocationGroupByOutputType = {
    location_id: number
    tour_id: number
    location_name: string
    latitude: Decimal
    longitude: Decimal
    description: string | null
    _count: Tours_LocationCountAggregateOutputType | null
    _avg: Tours_LocationAvgAggregateOutputType | null
    _sum: Tours_LocationSumAggregateOutputType | null
    _min: Tours_LocationMinAggregateOutputType | null
    _max: Tours_LocationMaxAggregateOutputType | null
  }

  type GetTours_LocationGroupByPayload<T extends Tours_LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tours_LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tours_LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tours_LocationGroupByOutputType[P]>
            : GetScalarType<T[P], Tours_LocationGroupByOutputType[P]>
        }
      >
    >


  export type Tours_LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_id?: boolean
    tour_id?: boolean
    location_name?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    Tours?: boolean | ToursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tours_Location"]>



  export type Tours_LocationSelectScalar = {
    location_id?: boolean
    tour_id?: boolean
    location_name?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
  }

  export type Tours_LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"location_id" | "tour_id" | "location_name" | "latitude" | "longitude" | "description", ExtArgs["result"]["tours_Location"]>
  export type Tours_LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Tours?: boolean | ToursDefaultArgs<ExtArgs>
  }

  export type $Tours_LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tours_Location"
    objects: {
      Tours: Prisma.$ToursPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      location_id: number
      tour_id: number
      location_name: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      description: string | null
    }, ExtArgs["result"]["tours_Location"]>
    composites: {}
  }

  type Tours_LocationGetPayload<S extends boolean | null | undefined | Tours_LocationDefaultArgs> = $Result.GetResult<Prisma.$Tours_LocationPayload, S>

  type Tours_LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Tours_LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tours_LocationCountAggregateInputType | true
    }

  export interface Tours_LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tours_Location'], meta: { name: 'Tours_Location' } }
    /**
     * Find zero or one Tours_Location that matches the filter.
     * @param {Tours_LocationFindUniqueArgs} args - Arguments to find a Tours_Location
     * @example
     * // Get one Tours_Location
     * const tours_Location = await prisma.tours_Location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tours_LocationFindUniqueArgs>(args: SelectSubset<T, Tours_LocationFindUniqueArgs<ExtArgs>>): Prisma__Tours_LocationClient<$Result.GetResult<Prisma.$Tours_LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tours_Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Tours_LocationFindUniqueOrThrowArgs} args - Arguments to find a Tours_Location
     * @example
     * // Get one Tours_Location
     * const tours_Location = await prisma.tours_Location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tours_LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, Tours_LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tours_LocationClient<$Result.GetResult<Prisma.$Tours_LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tours_Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tours_LocationFindFirstArgs} args - Arguments to find a Tours_Location
     * @example
     * // Get one Tours_Location
     * const tours_Location = await prisma.tours_Location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tours_LocationFindFirstArgs>(args?: SelectSubset<T, Tours_LocationFindFirstArgs<ExtArgs>>): Prisma__Tours_LocationClient<$Result.GetResult<Prisma.$Tours_LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tours_Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tours_LocationFindFirstOrThrowArgs} args - Arguments to find a Tours_Location
     * @example
     * // Get one Tours_Location
     * const tours_Location = await prisma.tours_Location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tours_LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, Tours_LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__Tours_LocationClient<$Result.GetResult<Prisma.$Tours_LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tours_Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tours_LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tours_Locations
     * const tours_Locations = await prisma.tours_Location.findMany()
     * 
     * // Get first 10 Tours_Locations
     * const tours_Locations = await prisma.tours_Location.findMany({ take: 10 })
     * 
     * // Only select the `location_id`
     * const tours_LocationWithLocation_idOnly = await prisma.tours_Location.findMany({ select: { location_id: true } })
     * 
     */
    findMany<T extends Tours_LocationFindManyArgs>(args?: SelectSubset<T, Tours_LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tours_LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tours_Location.
     * @param {Tours_LocationCreateArgs} args - Arguments to create a Tours_Location.
     * @example
     * // Create one Tours_Location
     * const Tours_Location = await prisma.tours_Location.create({
     *   data: {
     *     // ... data to create a Tours_Location
     *   }
     * })
     * 
     */
    create<T extends Tours_LocationCreateArgs>(args: SelectSubset<T, Tours_LocationCreateArgs<ExtArgs>>): Prisma__Tours_LocationClient<$Result.GetResult<Prisma.$Tours_LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tours_Locations.
     * @param {Tours_LocationCreateManyArgs} args - Arguments to create many Tours_Locations.
     * @example
     * // Create many Tours_Locations
     * const tours_Location = await prisma.tours_Location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tours_LocationCreateManyArgs>(args?: SelectSubset<T, Tours_LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tours_Location.
     * @param {Tours_LocationDeleteArgs} args - Arguments to delete one Tours_Location.
     * @example
     * // Delete one Tours_Location
     * const Tours_Location = await prisma.tours_Location.delete({
     *   where: {
     *     // ... filter to delete one Tours_Location
     *   }
     * })
     * 
     */
    delete<T extends Tours_LocationDeleteArgs>(args: SelectSubset<T, Tours_LocationDeleteArgs<ExtArgs>>): Prisma__Tours_LocationClient<$Result.GetResult<Prisma.$Tours_LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tours_Location.
     * @param {Tours_LocationUpdateArgs} args - Arguments to update one Tours_Location.
     * @example
     * // Update one Tours_Location
     * const tours_Location = await prisma.tours_Location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tours_LocationUpdateArgs>(args: SelectSubset<T, Tours_LocationUpdateArgs<ExtArgs>>): Prisma__Tours_LocationClient<$Result.GetResult<Prisma.$Tours_LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tours_Locations.
     * @param {Tours_LocationDeleteManyArgs} args - Arguments to filter Tours_Locations to delete.
     * @example
     * // Delete a few Tours_Locations
     * const { count } = await prisma.tours_Location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tours_LocationDeleteManyArgs>(args?: SelectSubset<T, Tours_LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours_Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tours_LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tours_Locations
     * const tours_Location = await prisma.tours_Location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tours_LocationUpdateManyArgs>(args: SelectSubset<T, Tours_LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tours_Location.
     * @param {Tours_LocationUpsertArgs} args - Arguments to update or create a Tours_Location.
     * @example
     * // Update or create a Tours_Location
     * const tours_Location = await prisma.tours_Location.upsert({
     *   create: {
     *     // ... data to create a Tours_Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tours_Location we want to update
     *   }
     * })
     */
    upsert<T extends Tours_LocationUpsertArgs>(args: SelectSubset<T, Tours_LocationUpsertArgs<ExtArgs>>): Prisma__Tours_LocationClient<$Result.GetResult<Prisma.$Tours_LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tours_Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tours_LocationCountArgs} args - Arguments to filter Tours_Locations to count.
     * @example
     * // Count the number of Tours_Locations
     * const count = await prisma.tours_Location.count({
     *   where: {
     *     // ... the filter for the Tours_Locations we want to count
     *   }
     * })
    **/
    count<T extends Tours_LocationCountArgs>(
      args?: Subset<T, Tours_LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tours_LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tours_Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tours_LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tours_LocationAggregateArgs>(args: Subset<T, Tours_LocationAggregateArgs>): Prisma.PrismaPromise<GetTours_LocationAggregateType<T>>

    /**
     * Group by Tours_Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tours_LocationGroupByArgs} args - Group by arguments.
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
      T extends Tours_LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tours_LocationGroupByArgs['orderBy'] }
        : { orderBy?: Tours_LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Tours_LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTours_LocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tours_Location model
   */
  readonly fields: Tours_LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tours_Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tours_LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Tours<T extends ToursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToursDefaultArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tours_Location model
   */ 
  interface Tours_LocationFieldRefs {
    readonly location_id: FieldRef<"Tours_Location", 'Int'>
    readonly tour_id: FieldRef<"Tours_Location", 'Int'>
    readonly location_name: FieldRef<"Tours_Location", 'String'>
    readonly latitude: FieldRef<"Tours_Location", 'Decimal'>
    readonly longitude: FieldRef<"Tours_Location", 'Decimal'>
    readonly description: FieldRef<"Tours_Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tours_Location findUnique
   */
  export type Tours_LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours_Location
     */
    select?: Tours_LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours_Location
     */
    omit?: Tours_LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tours_LocationInclude<ExtArgs> | null
    /**
     * Filter, which Tours_Location to fetch.
     */
    where: Tours_LocationWhereUniqueInput
  }

  /**
   * Tours_Location findUniqueOrThrow
   */
  export type Tours_LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours_Location
     */
    select?: Tours_LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours_Location
     */
    omit?: Tours_LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tours_LocationInclude<ExtArgs> | null
    /**
     * Filter, which Tours_Location to fetch.
     */
    where: Tours_LocationWhereUniqueInput
  }

  /**
   * Tours_Location findFirst
   */
  export type Tours_LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours_Location
     */
    select?: Tours_LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours_Location
     */
    omit?: Tours_LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tours_LocationInclude<ExtArgs> | null
    /**
     * Filter, which Tours_Location to fetch.
     */
    where?: Tours_LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours_Locations to fetch.
     */
    orderBy?: Tours_LocationOrderByWithRelationInput | Tours_LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours_Locations.
     */
    cursor?: Tours_LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours_Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours_Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours_Locations.
     */
    distinct?: Tours_LocationScalarFieldEnum | Tours_LocationScalarFieldEnum[]
  }

  /**
   * Tours_Location findFirstOrThrow
   */
  export type Tours_LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours_Location
     */
    select?: Tours_LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours_Location
     */
    omit?: Tours_LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tours_LocationInclude<ExtArgs> | null
    /**
     * Filter, which Tours_Location to fetch.
     */
    where?: Tours_LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours_Locations to fetch.
     */
    orderBy?: Tours_LocationOrderByWithRelationInput | Tours_LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours_Locations.
     */
    cursor?: Tours_LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours_Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours_Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours_Locations.
     */
    distinct?: Tours_LocationScalarFieldEnum | Tours_LocationScalarFieldEnum[]
  }

  /**
   * Tours_Location findMany
   */
  export type Tours_LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours_Location
     */
    select?: Tours_LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours_Location
     */
    omit?: Tours_LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tours_LocationInclude<ExtArgs> | null
    /**
     * Filter, which Tours_Locations to fetch.
     */
    where?: Tours_LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours_Locations to fetch.
     */
    orderBy?: Tours_LocationOrderByWithRelationInput | Tours_LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tours_Locations.
     */
    cursor?: Tours_LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours_Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours_Locations.
     */
    skip?: number
    distinct?: Tours_LocationScalarFieldEnum | Tours_LocationScalarFieldEnum[]
  }

  /**
   * Tours_Location create
   */
  export type Tours_LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours_Location
     */
    select?: Tours_LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours_Location
     */
    omit?: Tours_LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tours_LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Tours_Location.
     */
    data: XOR<Tours_LocationCreateInput, Tours_LocationUncheckedCreateInput>
  }

  /**
   * Tours_Location createMany
   */
  export type Tours_LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tours_Locations.
     */
    data: Tours_LocationCreateManyInput | Tours_LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tours_Location update
   */
  export type Tours_LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours_Location
     */
    select?: Tours_LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours_Location
     */
    omit?: Tours_LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tours_LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Tours_Location.
     */
    data: XOR<Tours_LocationUpdateInput, Tours_LocationUncheckedUpdateInput>
    /**
     * Choose, which Tours_Location to update.
     */
    where: Tours_LocationWhereUniqueInput
  }

  /**
   * Tours_Location updateMany
   */
  export type Tours_LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tours_Locations.
     */
    data: XOR<Tours_LocationUpdateManyMutationInput, Tours_LocationUncheckedUpdateManyInput>
    /**
     * Filter which Tours_Locations to update
     */
    where?: Tours_LocationWhereInput
    /**
     * Limit how many Tours_Locations to update.
     */
    limit?: number
  }

  /**
   * Tours_Location upsert
   */
  export type Tours_LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours_Location
     */
    select?: Tours_LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours_Location
     */
    omit?: Tours_LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tours_LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Tours_Location to update in case it exists.
     */
    where: Tours_LocationWhereUniqueInput
    /**
     * In case the Tours_Location found by the `where` argument doesn't exist, create a new Tours_Location with this data.
     */
    create: XOR<Tours_LocationCreateInput, Tours_LocationUncheckedCreateInput>
    /**
     * In case the Tours_Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tours_LocationUpdateInput, Tours_LocationUncheckedUpdateInput>
  }

  /**
   * Tours_Location delete
   */
  export type Tours_LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours_Location
     */
    select?: Tours_LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours_Location
     */
    omit?: Tours_LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tours_LocationInclude<ExtArgs> | null
    /**
     * Filter which Tours_Location to delete.
     */
    where: Tours_LocationWhereUniqueInput
  }

  /**
   * Tours_Location deleteMany
   */
  export type Tours_LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tours_Locations to delete
     */
    where?: Tours_LocationWhereInput
    /**
     * Limit how many Tours_Locations to delete.
     */
    limit?: number
  }

  /**
   * Tours_Location without action
   */
  export type Tours_LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tours_Location
     */
    select?: Tours_LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tours_Location
     */
    omit?: Tours_LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tours_LocationInclude<ExtArgs> | null
  }


  /**
   * Model Bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    booking_id: number | null
    user_id: number | null
    tour_id: number | null
    number_of_people: number | null
  }

  export type BookingsSumAggregateOutputType = {
    booking_id: number | null
    user_id: number | null
    tour_id: number | null
    number_of_people: number | null
  }

  export type BookingsMinAggregateOutputType = {
    booking_id: number | null
    user_id: number | null
    tour_id: number | null
    number_of_people: number | null
    booking_date: Date | null
    status: string | null
  }

  export type BookingsMaxAggregateOutputType = {
    booking_id: number | null
    user_id: number | null
    tour_id: number | null
    number_of_people: number | null
    booking_date: Date | null
    status: string | null
  }

  export type BookingsCountAggregateOutputType = {
    booking_id: number
    user_id: number
    tour_id: number
    number_of_people: number
    booking_date: number
    status: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    booking_id?: true
    user_id?: true
    tour_id?: true
    number_of_people?: true
  }

  export type BookingsSumAggregateInputType = {
    booking_id?: true
    user_id?: true
    tour_id?: true
    number_of_people?: true
  }

  export type BookingsMinAggregateInputType = {
    booking_id?: true
    user_id?: true
    tour_id?: true
    number_of_people?: true
    booking_date?: true
    status?: true
  }

  export type BookingsMaxAggregateInputType = {
    booking_id?: true
    user_id?: true
    tour_id?: true
    number_of_people?: true
    booking_date?: true
    status?: true
  }

  export type BookingsCountAggregateInputType = {
    booking_id?: true
    user_id?: true
    tour_id?: true
    number_of_people?: true
    booking_date?: true
    status?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to aggregate.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type BookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithAggregationInput | BookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: BookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    booking_id: number
    user_id: number
    tour_id: number
    number_of_people: number
    booking_date: Date
    status: string
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends BookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type BookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booking_id?: boolean
    user_id?: boolean
    tour_id?: boolean
    number_of_people?: boolean
    booking_date?: boolean
    status?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Tours?: boolean | ToursDefaultArgs<ExtArgs>
    Payments?: boolean | Bookings$PaymentsArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>



  export type BookingsSelectScalar = {
    booking_id?: boolean
    user_id?: boolean
    tour_id?: boolean
    number_of_people?: boolean
    booking_date?: boolean
    status?: boolean
  }

  export type BookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"booking_id" | "user_id" | "tour_id" | "number_of_people" | "booking_date" | "status", ExtArgs["result"]["bookings"]>
  export type BookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Tours?: boolean | ToursDefaultArgs<ExtArgs>
    Payments?: boolean | Bookings$PaymentsArgs<ExtArgs>
    _count?: boolean | BookingsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookings"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      Tours: Prisma.$ToursPayload<ExtArgs>
      Payments: Prisma.$PaymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      booking_id: number
      user_id: number
      tour_id: number
      number_of_people: number
      booking_date: Date
      status: string
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type BookingsGetPayload<S extends boolean | null | undefined | BookingsDefaultArgs> = $Result.GetResult<Prisma.$BookingsPayload, S>

  type BookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface BookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookings'], meta: { name: 'Bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {BookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingsFindUniqueArgs>(args: SelectSubset<T, BookingsFindUniqueArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingsFindFirstArgs>(args?: SelectSubset<T, BookingsFindFirstArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `booking_id`
     * const bookingsWithBooking_idOnly = await prisma.bookings.findMany({ select: { booking_id: true } })
     * 
     */
    findMany<T extends BookingsFindManyArgs>(args?: SelectSubset<T, BookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {BookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends BookingsCreateArgs>(args: SelectSubset<T, BookingsCreateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingsCreateManyArgs>(args?: SelectSubset<T, BookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bookings.
     * @param {BookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends BookingsDeleteArgs>(args: SelectSubset<T, BookingsDeleteArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {BookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingsUpdateArgs>(args: SelectSubset<T, BookingsUpdateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingsDeleteManyArgs>(args?: SelectSubset<T, BookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingsUpdateManyArgs>(args: SelectSubset<T, BookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookings.
     * @param {BookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends BookingsUpsertArgs>(args: SelectSubset<T, BookingsUpsertArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingsCountArgs>(
      args?: Subset<T, BookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsGroupByArgs} args - Group by arguments.
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
      T extends BookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingsGroupByArgs['orderBy'] }
        : { orderBy?: BookingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookings model
   */
  readonly fields: BookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Tours<T extends ToursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToursDefaultArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Payments<T extends Bookings$PaymentsArgs<ExtArgs> = {}>(args?: Subset<T, Bookings$PaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bookings model
   */ 
  interface BookingsFieldRefs {
    readonly booking_id: FieldRef<"Bookings", 'Int'>
    readonly user_id: FieldRef<"Bookings", 'Int'>
    readonly tour_id: FieldRef<"Bookings", 'Int'>
    readonly number_of_people: FieldRef<"Bookings", 'Int'>
    readonly booking_date: FieldRef<"Bookings", 'DateTime'>
    readonly status: FieldRef<"Bookings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bookings findUnique
   */
  export type BookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findUniqueOrThrow
   */
  export type BookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findFirst
   */
  export type BookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findFirstOrThrow
   */
  export type BookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findMany
   */
  export type BookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings create
   */
  export type BookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookings.
     */
    data: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
  }

  /**
   * Bookings createMany
   */
  export type BookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookings update
   */
  export type BookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookings.
     */
    data: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
    /**
     * Choose, which Bookings to update.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings updateMany
   */
  export type BookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Bookings upsert
   */
  export type BookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookings to update in case it exists.
     */
    where: BookingsWhereUniqueInput
    /**
     * In case the Bookings found by the `where` argument doesn't exist, create a new Bookings with this data.
     */
    create: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
    /**
     * In case the Bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
  }

  /**
   * Bookings delete
   */
  export type BookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter which Bookings to delete.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings deleteMany
   */
  export type BookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Bookings.Payments
   */
  export type Bookings$PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Bookings without action
   */
  export type BookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
  }


  /**
   * Model ReviewImage
   */

  export type AggregateReviewImage = {
    _count: ReviewImageCountAggregateOutputType | null
    _avg: ReviewImageAvgAggregateOutputType | null
    _sum: ReviewImageSumAggregateOutputType | null
    _min: ReviewImageMinAggregateOutputType | null
    _max: ReviewImageMaxAggregateOutputType | null
  }

  export type ReviewImageAvgAggregateOutputType = {
    id: number | null
    review_id: number | null
  }

  export type ReviewImageSumAggregateOutputType = {
    id: number | null
    review_id: number | null
  }

  export type ReviewImageMinAggregateOutputType = {
    id: number | null
    review_id: number | null
    image_url: string | null
  }

  export type ReviewImageMaxAggregateOutputType = {
    id: number | null
    review_id: number | null
    image_url: string | null
  }

  export type ReviewImageCountAggregateOutputType = {
    id: number
    review_id: number
    image_url: number
    _all: number
  }


  export type ReviewImageAvgAggregateInputType = {
    id?: true
    review_id?: true
  }

  export type ReviewImageSumAggregateInputType = {
    id?: true
    review_id?: true
  }

  export type ReviewImageMinAggregateInputType = {
    id?: true
    review_id?: true
    image_url?: true
  }

  export type ReviewImageMaxAggregateInputType = {
    id?: true
    review_id?: true
    image_url?: true
  }

  export type ReviewImageCountAggregateInputType = {
    id?: true
    review_id?: true
    image_url?: true
    _all?: true
  }

  export type ReviewImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewImage to aggregate.
     */
    where?: ReviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewImages to fetch.
     */
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewImages
    **/
    _count?: true | ReviewImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewImageMaxAggregateInputType
  }

  export type GetReviewImageAggregateType<T extends ReviewImageAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewImage[P]>
      : GetScalarType<T[P], AggregateReviewImage[P]>
  }




  export type ReviewImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewImageWhereInput
    orderBy?: ReviewImageOrderByWithAggregationInput | ReviewImageOrderByWithAggregationInput[]
    by: ReviewImageScalarFieldEnum[] | ReviewImageScalarFieldEnum
    having?: ReviewImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewImageCountAggregateInputType | true
    _avg?: ReviewImageAvgAggregateInputType
    _sum?: ReviewImageSumAggregateInputType
    _min?: ReviewImageMinAggregateInputType
    _max?: ReviewImageMaxAggregateInputType
  }

  export type ReviewImageGroupByOutputType = {
    id: number
    review_id: number
    image_url: string
    _count: ReviewImageCountAggregateOutputType | null
    _avg: ReviewImageAvgAggregateOutputType | null
    _sum: ReviewImageSumAggregateOutputType | null
    _min: ReviewImageMinAggregateOutputType | null
    _max: ReviewImageMaxAggregateOutputType | null
  }

  type GetReviewImageGroupByPayload<T extends ReviewImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewImageGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewImageGroupByOutputType[P]>
        }
      >
    >


  export type ReviewImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    review_id?: boolean
    image_url?: boolean
    Reviews?: boolean | ReviewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewImage"]>



  export type ReviewImageSelectScalar = {
    id?: boolean
    review_id?: boolean
    image_url?: boolean
  }

  export type ReviewImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "review_id" | "image_url", ExtArgs["result"]["reviewImage"]>
  export type ReviewImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reviews?: boolean | ReviewsDefaultArgs<ExtArgs>
  }

  export type $ReviewImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewImage"
    objects: {
      Reviews: Prisma.$ReviewsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      review_id: number
      image_url: string
    }, ExtArgs["result"]["reviewImage"]>
    composites: {}
  }

  type ReviewImageGetPayload<S extends boolean | null | undefined | ReviewImageDefaultArgs> = $Result.GetResult<Prisma.$ReviewImagePayload, S>

  type ReviewImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewImageCountAggregateInputType | true
    }

  export interface ReviewImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewImage'], meta: { name: 'ReviewImage' } }
    /**
     * Find zero or one ReviewImage that matches the filter.
     * @param {ReviewImageFindUniqueArgs} args - Arguments to find a ReviewImage
     * @example
     * // Get one ReviewImage
     * const reviewImage = await prisma.reviewImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewImageFindUniqueArgs>(args: SelectSubset<T, ReviewImageFindUniqueArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewImageFindUniqueOrThrowArgs} args - Arguments to find a ReviewImage
     * @example
     * // Get one ReviewImage
     * const reviewImage = await prisma.reviewImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageFindFirstArgs} args - Arguments to find a ReviewImage
     * @example
     * // Get one ReviewImage
     * const reviewImage = await prisma.reviewImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewImageFindFirstArgs>(args?: SelectSubset<T, ReviewImageFindFirstArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageFindFirstOrThrowArgs} args - Arguments to find a ReviewImage
     * @example
     * // Get one ReviewImage
     * const reviewImage = await prisma.reviewImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewImages
     * const reviewImages = await prisma.reviewImage.findMany()
     * 
     * // Get first 10 ReviewImages
     * const reviewImages = await prisma.reviewImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewImageWithIdOnly = await prisma.reviewImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewImageFindManyArgs>(args?: SelectSubset<T, ReviewImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewImage.
     * @param {ReviewImageCreateArgs} args - Arguments to create a ReviewImage.
     * @example
     * // Create one ReviewImage
     * const ReviewImage = await prisma.reviewImage.create({
     *   data: {
     *     // ... data to create a ReviewImage
     *   }
     * })
     * 
     */
    create<T extends ReviewImageCreateArgs>(args: SelectSubset<T, ReviewImageCreateArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewImages.
     * @param {ReviewImageCreateManyArgs} args - Arguments to create many ReviewImages.
     * @example
     * // Create many ReviewImages
     * const reviewImage = await prisma.reviewImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewImageCreateManyArgs>(args?: SelectSubset<T, ReviewImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReviewImage.
     * @param {ReviewImageDeleteArgs} args - Arguments to delete one ReviewImage.
     * @example
     * // Delete one ReviewImage
     * const ReviewImage = await prisma.reviewImage.delete({
     *   where: {
     *     // ... filter to delete one ReviewImage
     *   }
     * })
     * 
     */
    delete<T extends ReviewImageDeleteArgs>(args: SelectSubset<T, ReviewImageDeleteArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewImage.
     * @param {ReviewImageUpdateArgs} args - Arguments to update one ReviewImage.
     * @example
     * // Update one ReviewImage
     * const reviewImage = await prisma.reviewImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewImageUpdateArgs>(args: SelectSubset<T, ReviewImageUpdateArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewImages.
     * @param {ReviewImageDeleteManyArgs} args - Arguments to filter ReviewImages to delete.
     * @example
     * // Delete a few ReviewImages
     * const { count } = await prisma.reviewImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewImageDeleteManyArgs>(args?: SelectSubset<T, ReviewImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewImages
     * const reviewImage = await prisma.reviewImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewImageUpdateManyArgs>(args: SelectSubset<T, ReviewImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewImage.
     * @param {ReviewImageUpsertArgs} args - Arguments to update or create a ReviewImage.
     * @example
     * // Update or create a ReviewImage
     * const reviewImage = await prisma.reviewImage.upsert({
     *   create: {
     *     // ... data to create a ReviewImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewImage we want to update
     *   }
     * })
     */
    upsert<T extends ReviewImageUpsertArgs>(args: SelectSubset<T, ReviewImageUpsertArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageCountArgs} args - Arguments to filter ReviewImages to count.
     * @example
     * // Count the number of ReviewImages
     * const count = await prisma.reviewImage.count({
     *   where: {
     *     // ... the filter for the ReviewImages we want to count
     *   }
     * })
    **/
    count<T extends ReviewImageCountArgs>(
      args?: Subset<T, ReviewImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewImageAggregateArgs>(args: Subset<T, ReviewImageAggregateArgs>): Prisma.PrismaPromise<GetReviewImageAggregateType<T>>

    /**
     * Group by ReviewImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageGroupByArgs} args - Group by arguments.
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
      T extends ReviewImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewImageGroupByArgs['orderBy'] }
        : { orderBy?: ReviewImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewImage model
   */
  readonly fields: ReviewImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Reviews<T extends ReviewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewsDefaultArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReviewImage model
   */ 
  interface ReviewImageFieldRefs {
    readonly id: FieldRef<"ReviewImage", 'Int'>
    readonly review_id: FieldRef<"ReviewImage", 'Int'>
    readonly image_url: FieldRef<"ReviewImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReviewImage findUnique
   */
  export type ReviewImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ReviewImage to fetch.
     */
    where: ReviewImageWhereUniqueInput
  }

  /**
   * ReviewImage findUniqueOrThrow
   */
  export type ReviewImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ReviewImage to fetch.
     */
    where: ReviewImageWhereUniqueInput
  }

  /**
   * ReviewImage findFirst
   */
  export type ReviewImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ReviewImage to fetch.
     */
    where?: ReviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewImages to fetch.
     */
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewImages.
     */
    cursor?: ReviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewImages.
     */
    distinct?: ReviewImageScalarFieldEnum | ReviewImageScalarFieldEnum[]
  }

  /**
   * ReviewImage findFirstOrThrow
   */
  export type ReviewImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ReviewImage to fetch.
     */
    where?: ReviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewImages to fetch.
     */
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewImages.
     */
    cursor?: ReviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewImages.
     */
    distinct?: ReviewImageScalarFieldEnum | ReviewImageScalarFieldEnum[]
  }

  /**
   * ReviewImage findMany
   */
  export type ReviewImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * Filter, which ReviewImages to fetch.
     */
    where?: ReviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewImages to fetch.
     */
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewImages.
     */
    cursor?: ReviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewImages.
     */
    skip?: number
    distinct?: ReviewImageScalarFieldEnum | ReviewImageScalarFieldEnum[]
  }

  /**
   * ReviewImage create
   */
  export type ReviewImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewImage.
     */
    data: XOR<ReviewImageCreateInput, ReviewImageUncheckedCreateInput>
  }

  /**
   * ReviewImage createMany
   */
  export type ReviewImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewImages.
     */
    data: ReviewImageCreateManyInput | ReviewImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewImage update
   */
  export type ReviewImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewImage.
     */
    data: XOR<ReviewImageUpdateInput, ReviewImageUncheckedUpdateInput>
    /**
     * Choose, which ReviewImage to update.
     */
    where: ReviewImageWhereUniqueInput
  }

  /**
   * ReviewImage updateMany
   */
  export type ReviewImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewImages.
     */
    data: XOR<ReviewImageUpdateManyMutationInput, ReviewImageUncheckedUpdateManyInput>
    /**
     * Filter which ReviewImages to update
     */
    where?: ReviewImageWhereInput
    /**
     * Limit how many ReviewImages to update.
     */
    limit?: number
  }

  /**
   * ReviewImage upsert
   */
  export type ReviewImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewImage to update in case it exists.
     */
    where: ReviewImageWhereUniqueInput
    /**
     * In case the ReviewImage found by the `where` argument doesn't exist, create a new ReviewImage with this data.
     */
    create: XOR<ReviewImageCreateInput, ReviewImageUncheckedCreateInput>
    /**
     * In case the ReviewImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewImageUpdateInput, ReviewImageUncheckedUpdateInput>
  }

  /**
   * ReviewImage delete
   */
  export type ReviewImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    /**
     * Filter which ReviewImage to delete.
     */
    where: ReviewImageWhereUniqueInput
  }

  /**
   * ReviewImage deleteMany
   */
  export type ReviewImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewImages to delete
     */
    where?: ReviewImageWhereInput
    /**
     * Limit how many ReviewImages to delete.
     */
    limit?: number
  }

  /**
   * ReviewImage without action
   */
  export type ReviewImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    tour_id: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    tour_id: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    tour_id: number | null
    rating: number | null
    comment: string | null
    review_date: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    review_id: number | null
    user_id: number | null
    tour_id: number | null
    rating: number | null
    comment: string | null
    review_date: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    review_id: number
    user_id: number
    tour_id: number
    rating: number
    comment: number
    review_date: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    review_id?: true
    user_id?: true
    tour_id?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    review_id?: true
    user_id?: true
    tour_id?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    review_id?: true
    user_id?: true
    tour_id?: true
    rating?: true
    comment?: true
    review_date?: true
  }

  export type ReviewsMaxAggregateInputType = {
    review_id?: true
    user_id?: true
    tour_id?: true
    rating?: true
    comment?: true
    review_date?: true
  }

  export type ReviewsCountAggregateInputType = {
    review_id?: true
    user_id?: true
    tour_id?: true
    rating?: true
    comment?: true
    review_date?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    review_id: number
    user_id: number
    tour_id: number
    rating: number
    comment: string | null
    review_date: Date
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    user_id?: boolean
    tour_id?: boolean
    rating?: boolean
    comment?: boolean
    review_date?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Tours?: boolean | ToursDefaultArgs<ExtArgs>
    ReviewImages?: boolean | Reviews$ReviewImagesArgs<ExtArgs>
    _count?: boolean | ReviewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>



  export type ReviewsSelectScalar = {
    review_id?: boolean
    user_id?: boolean
    tour_id?: boolean
    rating?: boolean
    comment?: boolean
    review_date?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"review_id" | "user_id" | "tour_id" | "rating" | "comment" | "review_date", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    Tours?: boolean | ToursDefaultArgs<ExtArgs>
    ReviewImages?: boolean | Reviews$ReviewImagesArgs<ExtArgs>
    _count?: boolean | ReviewsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      Tours: Prisma.$ToursPayload<ExtArgs>
      ReviewImages: Prisma.$ReviewImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      user_id: number
      tour_id: number
      rating: number
      comment: string | null
      review_date: Date
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewsWithReview_idOnly = await prisma.reviews.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
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
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Tours<T extends ToursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToursDefaultArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ReviewImages<T extends Reviews$ReviewImagesArgs<ExtArgs> = {}>(args?: Subset<T, Reviews$ReviewImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reviews model
   */ 
  interface ReviewsFieldRefs {
    readonly review_id: FieldRef<"Reviews", 'Int'>
    readonly user_id: FieldRef<"Reviews", 'Int'>
    readonly tour_id: FieldRef<"Reviews", 'Int'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly comment: FieldRef<"Reviews", 'String'>
    readonly review_date: FieldRef<"Reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews.ReviewImages
   */
  export type Reviews$ReviewImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewImageInclude<ExtArgs> | null
    where?: ReviewImageWhereInput
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    cursor?: ReviewImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewImageScalarFieldEnum | ReviewImageScalarFieldEnum[]
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
    message: string | null
    notification_date: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
    message: string | null
    notification_date: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    notification_id: number
    user_id: number
    message: number
    notification_date: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    notification_id?: true
    user_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    notification_id?: true
    user_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    notification_id?: true
    user_id?: true
    message?: true
    notification_date?: true
  }

  export type NotificationsMaxAggregateInputType = {
    notification_id?: true
    user_id?: true
    message?: true
    notification_date?: true
  }

  export type NotificationsCountAggregateInputType = {
    notification_id?: true
    user_id?: true
    message?: true
    notification_date?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    notification_id: number
    user_id: number
    message: string
    notification_date: Date
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    user_id?: boolean
    message?: boolean
    notification_date?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>



  export type NotificationsSelectScalar = {
    notification_id?: boolean
    user_id?: boolean
    message?: boolean
    notification_date?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notification_id" | "user_id" | "message" | "notification_date", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      notification_id: number
      user_id: number
      message: string
      notification_date: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `notification_id`
     * const notificationsWithNotification_idOnly = await prisma.notifications.findMany({ select: { notification_id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
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
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notifications model
   */ 
  interface NotificationsFieldRefs {
    readonly notification_id: FieldRef<"Notifications", 'Int'>
    readonly user_id: FieldRef<"Notifications", 'Int'>
    readonly message: FieldRef<"Notifications", 'String'>
    readonly notification_date: FieldRef<"Notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    payment_id: number | null
    booking_id: number | null
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    payment_id: number | null
    booking_id: number | null
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    payment_id: number | null
    booking_id: number | null
    payment_date: Date | null
    amount: Decimal | null
    payment_method: string | null
    status: string | null
  }

  export type PaymentsMaxAggregateOutputType = {
    payment_id: number | null
    booking_id: number | null
    payment_date: Date | null
    amount: Decimal | null
    payment_method: string | null
    status: string | null
  }

  export type PaymentsCountAggregateOutputType = {
    payment_id: number
    booking_id: number
    payment_date: number
    amount: number
    payment_method: number
    status: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    payment_id?: true
    booking_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    payment_id?: true
    booking_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    payment_id?: true
    booking_id?: true
    payment_date?: true
    amount?: true
    payment_method?: true
    status?: true
  }

  export type PaymentsMaxAggregateInputType = {
    payment_id?: true
    booking_id?: true
    payment_date?: true
    amount?: true
    payment_method?: true
    status?: true
  }

  export type PaymentsCountAggregateInputType = {
    payment_id?: true
    booking_id?: true
    payment_date?: true
    amount?: true
    payment_method?: true
    status?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    payment_id: number
    booking_id: number
    payment_date: Date
    amount: Decimal
    payment_method: string
    status: string
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    booking_id?: boolean
    payment_date?: boolean
    amount?: boolean
    payment_method?: boolean
    status?: boolean
    bookings?: boolean | BookingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>



  export type PaymentsSelectScalar = {
    payment_id?: boolean
    booking_id?: boolean
    payment_date?: boolean
    amount?: boolean
    payment_method?: boolean
    status?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payment_id" | "booking_id" | "payment_date" | "amount" | "payment_method" | "status", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | BookingsDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      bookings: Prisma.$BookingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      booking_id: number
      payment_date: Date
      amount: Prisma.Decimal
      payment_method: string
      status: string
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentsWithPayment_idOnly = await prisma.payments.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
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
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends BookingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingsDefaultArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payments model
   */ 
  interface PaymentsFieldRefs {
    readonly payment_id: FieldRef<"Payments", 'Int'>
    readonly booking_id: FieldRef<"Payments", 'Int'>
    readonly payment_date: FieldRef<"Payments", 'DateTime'>
    readonly amount: FieldRef<"Payments", 'Decimal'>
    readonly payment_method: FieldRef<"Payments", 'String'>
    readonly status: FieldRef<"Payments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model Hotels
   */

  export type AggregateHotels = {
    _count: HotelsCountAggregateOutputType | null
    _avg: HotelsAvgAggregateOutputType | null
    _sum: HotelsSumAggregateOutputType | null
    _min: HotelsMinAggregateOutputType | null
    _max: HotelsMaxAggregateOutputType | null
  }

  export type HotelsAvgAggregateOutputType = {
    hotel_id: number | null
    price: Decimal | null
    available_seats: number | null
  }

  export type HotelsSumAggregateOutputType = {
    hotel_id: number | null
    price: Decimal | null
    available_seats: number | null
  }

  export type HotelsMinAggregateOutputType = {
    hotel_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    location: string | null
    image_url: string | null
    available_seats: number | null
  }

  export type HotelsMaxAggregateOutputType = {
    hotel_id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    location: string | null
    image_url: string | null
    available_seats: number | null
  }

  export type HotelsCountAggregateOutputType = {
    hotel_id: number
    name: number
    description: number
    price: number
    location: number
    image_url: number
    available_seats: number
    _all: number
  }


  export type HotelsAvgAggregateInputType = {
    hotel_id?: true
    price?: true
    available_seats?: true
  }

  export type HotelsSumAggregateInputType = {
    hotel_id?: true
    price?: true
    available_seats?: true
  }

  export type HotelsMinAggregateInputType = {
    hotel_id?: true
    name?: true
    description?: true
    price?: true
    location?: true
    image_url?: true
    available_seats?: true
  }

  export type HotelsMaxAggregateInputType = {
    hotel_id?: true
    name?: true
    description?: true
    price?: true
    location?: true
    image_url?: true
    available_seats?: true
  }

  export type HotelsCountAggregateInputType = {
    hotel_id?: true
    name?: true
    description?: true
    price?: true
    location?: true
    image_url?: true
    available_seats?: true
    _all?: true
  }

  export type HotelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to aggregate.
     */
    where?: HotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelsOrderByWithRelationInput | HotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelsMaxAggregateInputType
  }

  export type GetHotelsAggregateType<T extends HotelsAggregateArgs> = {
        [P in keyof T & keyof AggregateHotels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotels[P]>
      : GetScalarType<T[P], AggregateHotels[P]>
  }




  export type HotelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelsWhereInput
    orderBy?: HotelsOrderByWithAggregationInput | HotelsOrderByWithAggregationInput[]
    by: HotelsScalarFieldEnum[] | HotelsScalarFieldEnum
    having?: HotelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelsCountAggregateInputType | true
    _avg?: HotelsAvgAggregateInputType
    _sum?: HotelsSumAggregateInputType
    _min?: HotelsMinAggregateInputType
    _max?: HotelsMaxAggregateInputType
  }

  export type HotelsGroupByOutputType = {
    hotel_id: number
    name: string
    description: string | null
    price: Decimal
    location: string
    image_url: string | null
    available_seats: number
    _count: HotelsCountAggregateOutputType | null
    _avg: HotelsAvgAggregateOutputType | null
    _sum: HotelsSumAggregateOutputType | null
    _min: HotelsMinAggregateOutputType | null
    _max: HotelsMaxAggregateOutputType | null
  }

  type GetHotelsGroupByPayload<T extends HotelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelsGroupByOutputType[P]>
            : GetScalarType<T[P], HotelsGroupByOutputType[P]>
        }
      >
    >


  export type HotelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hotel_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    image_url?: boolean
    available_seats?: boolean
  }, ExtArgs["result"]["hotels"]>



  export type HotelsSelectScalar = {
    hotel_id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    location?: boolean
    image_url?: boolean
    available_seats?: boolean
  }

  export type HotelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"hotel_id" | "name" | "description" | "price" | "location" | "image_url" | "available_seats", ExtArgs["result"]["hotels"]>

  export type $HotelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotels"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      hotel_id: number
      name: string
      description: string | null
      price: Prisma.Decimal
      location: string
      image_url: string | null
      available_seats: number
    }, ExtArgs["result"]["hotels"]>
    composites: {}
  }

  type HotelsGetPayload<S extends boolean | null | undefined | HotelsDefaultArgs> = $Result.GetResult<Prisma.$HotelsPayload, S>

  type HotelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelsCountAggregateInputType | true
    }

  export interface HotelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotels'], meta: { name: 'Hotels' } }
    /**
     * Find zero or one Hotels that matches the filter.
     * @param {HotelsFindUniqueArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelsFindUniqueArgs>(args: SelectSubset<T, HotelsFindUniqueArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelsFindUniqueOrThrowArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelsFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsFindFirstArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelsFindFirstArgs>(args?: SelectSubset<T, HotelsFindFirstArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsFindFirstOrThrowArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelsFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotels.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotels.findMany({ take: 10 })
     * 
     * // Only select the `hotel_id`
     * const hotelsWithHotel_idOnly = await prisma.hotels.findMany({ select: { hotel_id: true } })
     * 
     */
    findMany<T extends HotelsFindManyArgs>(args?: SelectSubset<T, HotelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotels.
     * @param {HotelsCreateArgs} args - Arguments to create a Hotels.
     * @example
     * // Create one Hotels
     * const Hotels = await prisma.hotels.create({
     *   data: {
     *     // ... data to create a Hotels
     *   }
     * })
     * 
     */
    create<T extends HotelsCreateArgs>(args: SelectSubset<T, HotelsCreateArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {HotelsCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotels = await prisma.hotels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelsCreateManyArgs>(args?: SelectSubset<T, HotelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hotels.
     * @param {HotelsDeleteArgs} args - Arguments to delete one Hotels.
     * @example
     * // Delete one Hotels
     * const Hotels = await prisma.hotels.delete({
     *   where: {
     *     // ... filter to delete one Hotels
     *   }
     * })
     * 
     */
    delete<T extends HotelsDeleteArgs>(args: SelectSubset<T, HotelsDeleteArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotels.
     * @param {HotelsUpdateArgs} args - Arguments to update one Hotels.
     * @example
     * // Update one Hotels
     * const hotels = await prisma.hotels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelsUpdateArgs>(args: SelectSubset<T, HotelsUpdateArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {HotelsDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelsDeleteManyArgs>(args?: SelectSubset<T, HotelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotels = await prisma.hotels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelsUpdateManyArgs>(args: SelectSubset<T, HotelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hotels.
     * @param {HotelsUpsertArgs} args - Arguments to update or create a Hotels.
     * @example
     * // Update or create a Hotels
     * const hotels = await prisma.hotels.upsert({
     *   create: {
     *     // ... data to create a Hotels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotels we want to update
     *   }
     * })
     */
    upsert<T extends HotelsUpsertArgs>(args: SelectSubset<T, HotelsUpsertArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotels.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelsCountArgs>(
      args?: Subset<T, HotelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelsAggregateArgs>(args: Subset<T, HotelsAggregateArgs>): Prisma.PrismaPromise<GetHotelsAggregateType<T>>

    /**
     * Group by Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsGroupByArgs} args - Group by arguments.
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
      T extends HotelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelsGroupByArgs['orderBy'] }
        : { orderBy?: HotelsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotels model
   */
  readonly fields: HotelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Hotels model
   */ 
  interface HotelsFieldRefs {
    readonly hotel_id: FieldRef<"Hotels", 'Int'>
    readonly name: FieldRef<"Hotels", 'String'>
    readonly description: FieldRef<"Hotels", 'String'>
    readonly price: FieldRef<"Hotels", 'Decimal'>
    readonly location: FieldRef<"Hotels", 'String'>
    readonly image_url: FieldRef<"Hotels", 'String'>
    readonly available_seats: FieldRef<"Hotels", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Hotels findUnique
   */
  export type HotelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where: HotelsWhereUniqueInput
  }

  /**
   * Hotels findUniqueOrThrow
   */
  export type HotelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where: HotelsWhereUniqueInput
  }

  /**
   * Hotels findFirst
   */
  export type HotelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelsOrderByWithRelationInput | HotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelsScalarFieldEnum | HotelsScalarFieldEnum[]
  }

  /**
   * Hotels findFirstOrThrow
   */
  export type HotelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelsOrderByWithRelationInput | HotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelsScalarFieldEnum | HotelsScalarFieldEnum[]
  }

  /**
   * Hotels findMany
   */
  export type HotelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelsOrderByWithRelationInput | HotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    distinct?: HotelsScalarFieldEnum | HotelsScalarFieldEnum[]
  }

  /**
   * Hotels create
   */
  export type HotelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * The data needed to create a Hotels.
     */
    data: XOR<HotelsCreateInput, HotelsUncheckedCreateInput>
  }

  /**
   * Hotels createMany
   */
  export type HotelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelsCreateManyInput | HotelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotels update
   */
  export type HotelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * The data needed to update a Hotels.
     */
    data: XOR<HotelsUpdateInput, HotelsUncheckedUpdateInput>
    /**
     * Choose, which Hotels to update.
     */
    where: HotelsWhereUniqueInput
  }

  /**
   * Hotels updateMany
   */
  export type HotelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelsUpdateManyMutationInput, HotelsUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelsWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotels upsert
   */
  export type HotelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * The filter to search for the Hotels to update in case it exists.
     */
    where: HotelsWhereUniqueInput
    /**
     * In case the Hotels found by the `where` argument doesn't exist, create a new Hotels with this data.
     */
    create: XOR<HotelsCreateInput, HotelsUncheckedCreateInput>
    /**
     * In case the Hotels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelsUpdateInput, HotelsUncheckedUpdateInput>
  }

  /**
   * Hotels delete
   */
  export type HotelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Filter which Hotels to delete.
     */
    where: HotelsWhereUniqueInput
  }

  /**
   * Hotels deleteMany
   */
  export type HotelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelsWhereInput
    /**
     * Limit how many Hotels to delete.
     */
    limit?: number
  }

  /**
   * Hotels without action
   */
  export type HotelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
  }


  /**
   * Model Tour_Images
   */

  export type AggregateTour_Images = {
    _count: Tour_ImagesCountAggregateOutputType | null
    _avg: Tour_ImagesAvgAggregateOutputType | null
    _sum: Tour_ImagesSumAggregateOutputType | null
    _min: Tour_ImagesMinAggregateOutputType | null
    _max: Tour_ImagesMaxAggregateOutputType | null
  }

  export type Tour_ImagesAvgAggregateOutputType = {
    image_id: number | null
    tour_id: number | null
    image_order: number | null
  }

  export type Tour_ImagesSumAggregateOutputType = {
    image_id: number | null
    tour_id: number | null
    image_order: number | null
  }

  export type Tour_ImagesMinAggregateOutputType = {
    image_id: number | null
    tour_id: number | null
    image_url: string | null
    image_order: number | null
  }

  export type Tour_ImagesMaxAggregateOutputType = {
    image_id: number | null
    tour_id: number | null
    image_url: string | null
    image_order: number | null
  }

  export type Tour_ImagesCountAggregateOutputType = {
    image_id: number
    tour_id: number
    image_url: number
    image_order: number
    _all: number
  }


  export type Tour_ImagesAvgAggregateInputType = {
    image_id?: true
    tour_id?: true
    image_order?: true
  }

  export type Tour_ImagesSumAggregateInputType = {
    image_id?: true
    tour_id?: true
    image_order?: true
  }

  export type Tour_ImagesMinAggregateInputType = {
    image_id?: true
    tour_id?: true
    image_url?: true
    image_order?: true
  }

  export type Tour_ImagesMaxAggregateInputType = {
    image_id?: true
    tour_id?: true
    image_url?: true
    image_order?: true
  }

  export type Tour_ImagesCountAggregateInputType = {
    image_id?: true
    tour_id?: true
    image_url?: true
    image_order?: true
    _all?: true
  }

  export type Tour_ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour_Images to aggregate.
     */
    where?: Tour_ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tour_Images to fetch.
     */
    orderBy?: Tour_ImagesOrderByWithRelationInput | Tour_ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tour_ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tour_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tour_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tour_Images
    **/
    _count?: true | Tour_ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tour_ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tour_ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tour_ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tour_ImagesMaxAggregateInputType
  }

  export type GetTour_ImagesAggregateType<T extends Tour_ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateTour_Images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTour_Images[P]>
      : GetScalarType<T[P], AggregateTour_Images[P]>
  }




  export type Tour_ImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tour_ImagesWhereInput
    orderBy?: Tour_ImagesOrderByWithAggregationInput | Tour_ImagesOrderByWithAggregationInput[]
    by: Tour_ImagesScalarFieldEnum[] | Tour_ImagesScalarFieldEnum
    having?: Tour_ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tour_ImagesCountAggregateInputType | true
    _avg?: Tour_ImagesAvgAggregateInputType
    _sum?: Tour_ImagesSumAggregateInputType
    _min?: Tour_ImagesMinAggregateInputType
    _max?: Tour_ImagesMaxAggregateInputType
  }

  export type Tour_ImagesGroupByOutputType = {
    image_id: number
    tour_id: number
    image_url: string
    image_order: number
    _count: Tour_ImagesCountAggregateOutputType | null
    _avg: Tour_ImagesAvgAggregateOutputType | null
    _sum: Tour_ImagesSumAggregateOutputType | null
    _min: Tour_ImagesMinAggregateOutputType | null
    _max: Tour_ImagesMaxAggregateOutputType | null
  }

  type GetTour_ImagesGroupByPayload<T extends Tour_ImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tour_ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tour_ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tour_ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], Tour_ImagesGroupByOutputType[P]>
        }
      >
    >


  export type Tour_ImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    tour_id?: boolean
    image_url?: boolean
    image_order?: boolean
    tours?: boolean | ToursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour_Images"]>



  export type Tour_ImagesSelectScalar = {
    image_id?: boolean
    tour_id?: boolean
    image_url?: boolean
    image_order?: boolean
  }

  export type Tour_ImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"image_id" | "tour_id" | "image_url" | "image_order", ExtArgs["result"]["tour_Images"]>
  export type Tour_ImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | ToursDefaultArgs<ExtArgs>
  }

  export type $Tour_ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tour_Images"
    objects: {
      tours: Prisma.$ToursPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      image_id: number
      tour_id: number
      image_url: string
      image_order: number
    }, ExtArgs["result"]["tour_Images"]>
    composites: {}
  }

  type Tour_ImagesGetPayload<S extends boolean | null | undefined | Tour_ImagesDefaultArgs> = $Result.GetResult<Prisma.$Tour_ImagesPayload, S>

  type Tour_ImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Tour_ImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tour_ImagesCountAggregateInputType | true
    }

  export interface Tour_ImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tour_Images'], meta: { name: 'Tour_Images' } }
    /**
     * Find zero or one Tour_Images that matches the filter.
     * @param {Tour_ImagesFindUniqueArgs} args - Arguments to find a Tour_Images
     * @example
     * // Get one Tour_Images
     * const tour_Images = await prisma.tour_Images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tour_ImagesFindUniqueArgs>(args: SelectSubset<T, Tour_ImagesFindUniqueArgs<ExtArgs>>): Prisma__Tour_ImagesClient<$Result.GetResult<Prisma.$Tour_ImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tour_Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Tour_ImagesFindUniqueOrThrowArgs} args - Arguments to find a Tour_Images
     * @example
     * // Get one Tour_Images
     * const tour_Images = await prisma.tour_Images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tour_ImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, Tour_ImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tour_ImagesClient<$Result.GetResult<Prisma.$Tour_ImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour_Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ImagesFindFirstArgs} args - Arguments to find a Tour_Images
     * @example
     * // Get one Tour_Images
     * const tour_Images = await prisma.tour_Images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tour_ImagesFindFirstArgs>(args?: SelectSubset<T, Tour_ImagesFindFirstArgs<ExtArgs>>): Prisma__Tour_ImagesClient<$Result.GetResult<Prisma.$Tour_ImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour_Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ImagesFindFirstOrThrowArgs} args - Arguments to find a Tour_Images
     * @example
     * // Get one Tour_Images
     * const tour_Images = await prisma.tour_Images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tour_ImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, Tour_ImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Tour_ImagesClient<$Result.GetResult<Prisma.$Tour_ImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tour_Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tour_Images
     * const tour_Images = await prisma.tour_Images.findMany()
     * 
     * // Get first 10 Tour_Images
     * const tour_Images = await prisma.tour_Images.findMany({ take: 10 })
     * 
     * // Only select the `image_id`
     * const tour_ImagesWithImage_idOnly = await prisma.tour_Images.findMany({ select: { image_id: true } })
     * 
     */
    findMany<T extends Tour_ImagesFindManyArgs>(args?: SelectSubset<T, Tour_ImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tour_ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tour_Images.
     * @param {Tour_ImagesCreateArgs} args - Arguments to create a Tour_Images.
     * @example
     * // Create one Tour_Images
     * const Tour_Images = await prisma.tour_Images.create({
     *   data: {
     *     // ... data to create a Tour_Images
     *   }
     * })
     * 
     */
    create<T extends Tour_ImagesCreateArgs>(args: SelectSubset<T, Tour_ImagesCreateArgs<ExtArgs>>): Prisma__Tour_ImagesClient<$Result.GetResult<Prisma.$Tour_ImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tour_Images.
     * @param {Tour_ImagesCreateManyArgs} args - Arguments to create many Tour_Images.
     * @example
     * // Create many Tour_Images
     * const tour_Images = await prisma.tour_Images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tour_ImagesCreateManyArgs>(args?: SelectSubset<T, Tour_ImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tour_Images.
     * @param {Tour_ImagesDeleteArgs} args - Arguments to delete one Tour_Images.
     * @example
     * // Delete one Tour_Images
     * const Tour_Images = await prisma.tour_Images.delete({
     *   where: {
     *     // ... filter to delete one Tour_Images
     *   }
     * })
     * 
     */
    delete<T extends Tour_ImagesDeleteArgs>(args: SelectSubset<T, Tour_ImagesDeleteArgs<ExtArgs>>): Prisma__Tour_ImagesClient<$Result.GetResult<Prisma.$Tour_ImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tour_Images.
     * @param {Tour_ImagesUpdateArgs} args - Arguments to update one Tour_Images.
     * @example
     * // Update one Tour_Images
     * const tour_Images = await prisma.tour_Images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tour_ImagesUpdateArgs>(args: SelectSubset<T, Tour_ImagesUpdateArgs<ExtArgs>>): Prisma__Tour_ImagesClient<$Result.GetResult<Prisma.$Tour_ImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tour_Images.
     * @param {Tour_ImagesDeleteManyArgs} args - Arguments to filter Tour_Images to delete.
     * @example
     * // Delete a few Tour_Images
     * const { count } = await prisma.tour_Images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tour_ImagesDeleteManyArgs>(args?: SelectSubset<T, Tour_ImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tour_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tour_Images
     * const tour_Images = await prisma.tour_Images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tour_ImagesUpdateManyArgs>(args: SelectSubset<T, Tour_ImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tour_Images.
     * @param {Tour_ImagesUpsertArgs} args - Arguments to update or create a Tour_Images.
     * @example
     * // Update or create a Tour_Images
     * const tour_Images = await prisma.tour_Images.upsert({
     *   create: {
     *     // ... data to create a Tour_Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tour_Images we want to update
     *   }
     * })
     */
    upsert<T extends Tour_ImagesUpsertArgs>(args: SelectSubset<T, Tour_ImagesUpsertArgs<ExtArgs>>): Prisma__Tour_ImagesClient<$Result.GetResult<Prisma.$Tour_ImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tour_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ImagesCountArgs} args - Arguments to filter Tour_Images to count.
     * @example
     * // Count the number of Tour_Images
     * const count = await prisma.tour_Images.count({
     *   where: {
     *     // ... the filter for the Tour_Images we want to count
     *   }
     * })
    **/
    count<T extends Tour_ImagesCountArgs>(
      args?: Subset<T, Tour_ImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tour_ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tour_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tour_ImagesAggregateArgs>(args: Subset<T, Tour_ImagesAggregateArgs>): Prisma.PrismaPromise<GetTour_ImagesAggregateType<T>>

    /**
     * Group by Tour_Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ImagesGroupByArgs} args - Group by arguments.
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
      T extends Tour_ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tour_ImagesGroupByArgs['orderBy'] }
        : { orderBy?: Tour_ImagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Tour_ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTour_ImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tour_Images model
   */
  readonly fields: Tour_ImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tour_Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tour_ImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tours<T extends ToursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToursDefaultArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tour_Images model
   */ 
  interface Tour_ImagesFieldRefs {
    readonly image_id: FieldRef<"Tour_Images", 'Int'>
    readonly tour_id: FieldRef<"Tour_Images", 'Int'>
    readonly image_url: FieldRef<"Tour_Images", 'String'>
    readonly image_order: FieldRef<"Tour_Images", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tour_Images findUnique
   */
  export type Tour_ImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Images
     */
    select?: Tour_ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Images
     */
    omit?: Tour_ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Images to fetch.
     */
    where: Tour_ImagesWhereUniqueInput
  }

  /**
   * Tour_Images findUniqueOrThrow
   */
  export type Tour_ImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Images
     */
    select?: Tour_ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Images
     */
    omit?: Tour_ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Images to fetch.
     */
    where: Tour_ImagesWhereUniqueInput
  }

  /**
   * Tour_Images findFirst
   */
  export type Tour_ImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Images
     */
    select?: Tour_ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Images
     */
    omit?: Tour_ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Images to fetch.
     */
    where?: Tour_ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tour_Images to fetch.
     */
    orderBy?: Tour_ImagesOrderByWithRelationInput | Tour_ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tour_Images.
     */
    cursor?: Tour_ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tour_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tour_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tour_Images.
     */
    distinct?: Tour_ImagesScalarFieldEnum | Tour_ImagesScalarFieldEnum[]
  }

  /**
   * Tour_Images findFirstOrThrow
   */
  export type Tour_ImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Images
     */
    select?: Tour_ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Images
     */
    omit?: Tour_ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Images to fetch.
     */
    where?: Tour_ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tour_Images to fetch.
     */
    orderBy?: Tour_ImagesOrderByWithRelationInput | Tour_ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tour_Images.
     */
    cursor?: Tour_ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tour_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tour_Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tour_Images.
     */
    distinct?: Tour_ImagesScalarFieldEnum | Tour_ImagesScalarFieldEnum[]
  }

  /**
   * Tour_Images findMany
   */
  export type Tour_ImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Images
     */
    select?: Tour_ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Images
     */
    omit?: Tour_ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Images to fetch.
     */
    where?: Tour_ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tour_Images to fetch.
     */
    orderBy?: Tour_ImagesOrderByWithRelationInput | Tour_ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tour_Images.
     */
    cursor?: Tour_ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tour_Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tour_Images.
     */
    skip?: number
    distinct?: Tour_ImagesScalarFieldEnum | Tour_ImagesScalarFieldEnum[]
  }

  /**
   * Tour_Images create
   */
  export type Tour_ImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Images
     */
    select?: Tour_ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Images
     */
    omit?: Tour_ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Tour_Images.
     */
    data: XOR<Tour_ImagesCreateInput, Tour_ImagesUncheckedCreateInput>
  }

  /**
   * Tour_Images createMany
   */
  export type Tour_ImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tour_Images.
     */
    data: Tour_ImagesCreateManyInput | Tour_ImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tour_Images update
   */
  export type Tour_ImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Images
     */
    select?: Tour_ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Images
     */
    omit?: Tour_ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Tour_Images.
     */
    data: XOR<Tour_ImagesUpdateInput, Tour_ImagesUncheckedUpdateInput>
    /**
     * Choose, which Tour_Images to update.
     */
    where: Tour_ImagesWhereUniqueInput
  }

  /**
   * Tour_Images updateMany
   */
  export type Tour_ImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tour_Images.
     */
    data: XOR<Tour_ImagesUpdateManyMutationInput, Tour_ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Tour_Images to update
     */
    where?: Tour_ImagesWhereInput
    /**
     * Limit how many Tour_Images to update.
     */
    limit?: number
  }

  /**
   * Tour_Images upsert
   */
  export type Tour_ImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Images
     */
    select?: Tour_ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Images
     */
    omit?: Tour_ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Tour_Images to update in case it exists.
     */
    where: Tour_ImagesWhereUniqueInput
    /**
     * In case the Tour_Images found by the `where` argument doesn't exist, create a new Tour_Images with this data.
     */
    create: XOR<Tour_ImagesCreateInput, Tour_ImagesUncheckedCreateInput>
    /**
     * In case the Tour_Images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tour_ImagesUpdateInput, Tour_ImagesUncheckedUpdateInput>
  }

  /**
   * Tour_Images delete
   */
  export type Tour_ImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Images
     */
    select?: Tour_ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Images
     */
    omit?: Tour_ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ImagesInclude<ExtArgs> | null
    /**
     * Filter which Tour_Images to delete.
     */
    where: Tour_ImagesWhereUniqueInput
  }

  /**
   * Tour_Images deleteMany
   */
  export type Tour_ImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour_Images to delete
     */
    where?: Tour_ImagesWhereInput
    /**
     * Limit how many Tour_Images to delete.
     */
    limit?: number
  }

  /**
   * Tour_Images without action
   */
  export type Tour_ImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Images
     */
    select?: Tour_ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Images
     */
    omit?: Tour_ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ImagesInclude<ExtArgs> | null
  }


  /**
   * Model Tour_Logs
   */

  export type AggregateTour_Logs = {
    _count: Tour_LogsCountAggregateOutputType | null
    _avg: Tour_LogsAvgAggregateOutputType | null
    _sum: Tour_LogsSumAggregateOutputType | null
    _min: Tour_LogsMinAggregateOutputType | null
    _max: Tour_LogsMaxAggregateOutputType | null
  }

  export type Tour_LogsAvgAggregateOutputType = {
    log_id: number | null
    tour_id: number | null
  }

  export type Tour_LogsSumAggregateOutputType = {
    log_id: number | null
    tour_id: number | null
  }

  export type Tour_LogsMinAggregateOutputType = {
    log_id: number | null
    tour_id: number | null
    action: string | null
    action_date: Date | null
  }

  export type Tour_LogsMaxAggregateOutputType = {
    log_id: number | null
    tour_id: number | null
    action: string | null
    action_date: Date | null
  }

  export type Tour_LogsCountAggregateOutputType = {
    log_id: number
    tour_id: number
    action: number
    action_date: number
    _all: number
  }


  export type Tour_LogsAvgAggregateInputType = {
    log_id?: true
    tour_id?: true
  }

  export type Tour_LogsSumAggregateInputType = {
    log_id?: true
    tour_id?: true
  }

  export type Tour_LogsMinAggregateInputType = {
    log_id?: true
    tour_id?: true
    action?: true
    action_date?: true
  }

  export type Tour_LogsMaxAggregateInputType = {
    log_id?: true
    tour_id?: true
    action?: true
    action_date?: true
  }

  export type Tour_LogsCountAggregateInputType = {
    log_id?: true
    tour_id?: true
    action?: true
    action_date?: true
    _all?: true
  }

  export type Tour_LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour_Logs to aggregate.
     */
    where?: Tour_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tour_Logs to fetch.
     */
    orderBy?: Tour_LogsOrderByWithRelationInput | Tour_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tour_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tour_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tour_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tour_Logs
    **/
    _count?: true | Tour_LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tour_LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tour_LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tour_LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tour_LogsMaxAggregateInputType
  }

  export type GetTour_LogsAggregateType<T extends Tour_LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateTour_Logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTour_Logs[P]>
      : GetScalarType<T[P], AggregateTour_Logs[P]>
  }




  export type Tour_LogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tour_LogsWhereInput
    orderBy?: Tour_LogsOrderByWithAggregationInput | Tour_LogsOrderByWithAggregationInput[]
    by: Tour_LogsScalarFieldEnum[] | Tour_LogsScalarFieldEnum
    having?: Tour_LogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tour_LogsCountAggregateInputType | true
    _avg?: Tour_LogsAvgAggregateInputType
    _sum?: Tour_LogsSumAggregateInputType
    _min?: Tour_LogsMinAggregateInputType
    _max?: Tour_LogsMaxAggregateInputType
  }

  export type Tour_LogsGroupByOutputType = {
    log_id: number
    tour_id: number
    action: string
    action_date: Date
    _count: Tour_LogsCountAggregateOutputType | null
    _avg: Tour_LogsAvgAggregateOutputType | null
    _sum: Tour_LogsSumAggregateOutputType | null
    _min: Tour_LogsMinAggregateOutputType | null
    _max: Tour_LogsMaxAggregateOutputType | null
  }

  type GetTour_LogsGroupByPayload<T extends Tour_LogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tour_LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tour_LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tour_LogsGroupByOutputType[P]>
            : GetScalarType<T[P], Tour_LogsGroupByOutputType[P]>
        }
      >
    >


  export type Tour_LogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    tour_id?: boolean
    action?: boolean
    action_date?: boolean
    tours?: boolean | ToursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour_Logs"]>



  export type Tour_LogsSelectScalar = {
    log_id?: boolean
    tour_id?: boolean
    action?: boolean
    action_date?: boolean
  }

  export type Tour_LogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"log_id" | "tour_id" | "action" | "action_date", ExtArgs["result"]["tour_Logs"]>
  export type Tour_LogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | ToursDefaultArgs<ExtArgs>
  }

  export type $Tour_LogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tour_Logs"
    objects: {
      tours: Prisma.$ToursPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      log_id: number
      tour_id: number
      action: string
      action_date: Date
    }, ExtArgs["result"]["tour_Logs"]>
    composites: {}
  }

  type Tour_LogsGetPayload<S extends boolean | null | undefined | Tour_LogsDefaultArgs> = $Result.GetResult<Prisma.$Tour_LogsPayload, S>

  type Tour_LogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Tour_LogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tour_LogsCountAggregateInputType | true
    }

  export interface Tour_LogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tour_Logs'], meta: { name: 'Tour_Logs' } }
    /**
     * Find zero or one Tour_Logs that matches the filter.
     * @param {Tour_LogsFindUniqueArgs} args - Arguments to find a Tour_Logs
     * @example
     * // Get one Tour_Logs
     * const tour_Logs = await prisma.tour_Logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tour_LogsFindUniqueArgs>(args: SelectSubset<T, Tour_LogsFindUniqueArgs<ExtArgs>>): Prisma__Tour_LogsClient<$Result.GetResult<Prisma.$Tour_LogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tour_Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Tour_LogsFindUniqueOrThrowArgs} args - Arguments to find a Tour_Logs
     * @example
     * // Get one Tour_Logs
     * const tour_Logs = await prisma.tour_Logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tour_LogsFindUniqueOrThrowArgs>(args: SelectSubset<T, Tour_LogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tour_LogsClient<$Result.GetResult<Prisma.$Tour_LogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour_Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_LogsFindFirstArgs} args - Arguments to find a Tour_Logs
     * @example
     * // Get one Tour_Logs
     * const tour_Logs = await prisma.tour_Logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tour_LogsFindFirstArgs>(args?: SelectSubset<T, Tour_LogsFindFirstArgs<ExtArgs>>): Prisma__Tour_LogsClient<$Result.GetResult<Prisma.$Tour_LogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour_Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_LogsFindFirstOrThrowArgs} args - Arguments to find a Tour_Logs
     * @example
     * // Get one Tour_Logs
     * const tour_Logs = await prisma.tour_Logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tour_LogsFindFirstOrThrowArgs>(args?: SelectSubset<T, Tour_LogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Tour_LogsClient<$Result.GetResult<Prisma.$Tour_LogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tour_Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_LogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tour_Logs
     * const tour_Logs = await prisma.tour_Logs.findMany()
     * 
     * // Get first 10 Tour_Logs
     * const tour_Logs = await prisma.tour_Logs.findMany({ take: 10 })
     * 
     * // Only select the `log_id`
     * const tour_LogsWithLog_idOnly = await prisma.tour_Logs.findMany({ select: { log_id: true } })
     * 
     */
    findMany<T extends Tour_LogsFindManyArgs>(args?: SelectSubset<T, Tour_LogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tour_LogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tour_Logs.
     * @param {Tour_LogsCreateArgs} args - Arguments to create a Tour_Logs.
     * @example
     * // Create one Tour_Logs
     * const Tour_Logs = await prisma.tour_Logs.create({
     *   data: {
     *     // ... data to create a Tour_Logs
     *   }
     * })
     * 
     */
    create<T extends Tour_LogsCreateArgs>(args: SelectSubset<T, Tour_LogsCreateArgs<ExtArgs>>): Prisma__Tour_LogsClient<$Result.GetResult<Prisma.$Tour_LogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tour_Logs.
     * @param {Tour_LogsCreateManyArgs} args - Arguments to create many Tour_Logs.
     * @example
     * // Create many Tour_Logs
     * const tour_Logs = await prisma.tour_Logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tour_LogsCreateManyArgs>(args?: SelectSubset<T, Tour_LogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tour_Logs.
     * @param {Tour_LogsDeleteArgs} args - Arguments to delete one Tour_Logs.
     * @example
     * // Delete one Tour_Logs
     * const Tour_Logs = await prisma.tour_Logs.delete({
     *   where: {
     *     // ... filter to delete one Tour_Logs
     *   }
     * })
     * 
     */
    delete<T extends Tour_LogsDeleteArgs>(args: SelectSubset<T, Tour_LogsDeleteArgs<ExtArgs>>): Prisma__Tour_LogsClient<$Result.GetResult<Prisma.$Tour_LogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tour_Logs.
     * @param {Tour_LogsUpdateArgs} args - Arguments to update one Tour_Logs.
     * @example
     * // Update one Tour_Logs
     * const tour_Logs = await prisma.tour_Logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tour_LogsUpdateArgs>(args: SelectSubset<T, Tour_LogsUpdateArgs<ExtArgs>>): Prisma__Tour_LogsClient<$Result.GetResult<Prisma.$Tour_LogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tour_Logs.
     * @param {Tour_LogsDeleteManyArgs} args - Arguments to filter Tour_Logs to delete.
     * @example
     * // Delete a few Tour_Logs
     * const { count } = await prisma.tour_Logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tour_LogsDeleteManyArgs>(args?: SelectSubset<T, Tour_LogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tour_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_LogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tour_Logs
     * const tour_Logs = await prisma.tour_Logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tour_LogsUpdateManyArgs>(args: SelectSubset<T, Tour_LogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tour_Logs.
     * @param {Tour_LogsUpsertArgs} args - Arguments to update or create a Tour_Logs.
     * @example
     * // Update or create a Tour_Logs
     * const tour_Logs = await prisma.tour_Logs.upsert({
     *   create: {
     *     // ... data to create a Tour_Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tour_Logs we want to update
     *   }
     * })
     */
    upsert<T extends Tour_LogsUpsertArgs>(args: SelectSubset<T, Tour_LogsUpsertArgs<ExtArgs>>): Prisma__Tour_LogsClient<$Result.GetResult<Prisma.$Tour_LogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tour_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_LogsCountArgs} args - Arguments to filter Tour_Logs to count.
     * @example
     * // Count the number of Tour_Logs
     * const count = await prisma.tour_Logs.count({
     *   where: {
     *     // ... the filter for the Tour_Logs we want to count
     *   }
     * })
    **/
    count<T extends Tour_LogsCountArgs>(
      args?: Subset<T, Tour_LogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tour_LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tour_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tour_LogsAggregateArgs>(args: Subset<T, Tour_LogsAggregateArgs>): Prisma.PrismaPromise<GetTour_LogsAggregateType<T>>

    /**
     * Group by Tour_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_LogsGroupByArgs} args - Group by arguments.
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
      T extends Tour_LogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tour_LogsGroupByArgs['orderBy'] }
        : { orderBy?: Tour_LogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Tour_LogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTour_LogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tour_Logs model
   */
  readonly fields: Tour_LogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tour_Logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tour_LogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tours<T extends ToursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToursDefaultArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tour_Logs model
   */ 
  interface Tour_LogsFieldRefs {
    readonly log_id: FieldRef<"Tour_Logs", 'Int'>
    readonly tour_id: FieldRef<"Tour_Logs", 'Int'>
    readonly action: FieldRef<"Tour_Logs", 'String'>
    readonly action_date: FieldRef<"Tour_Logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tour_Logs findUnique
   */
  export type Tour_LogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Logs
     */
    select?: Tour_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Logs
     */
    omit?: Tour_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Logs to fetch.
     */
    where: Tour_LogsWhereUniqueInput
  }

  /**
   * Tour_Logs findUniqueOrThrow
   */
  export type Tour_LogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Logs
     */
    select?: Tour_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Logs
     */
    omit?: Tour_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Logs to fetch.
     */
    where: Tour_LogsWhereUniqueInput
  }

  /**
   * Tour_Logs findFirst
   */
  export type Tour_LogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Logs
     */
    select?: Tour_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Logs
     */
    omit?: Tour_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Logs to fetch.
     */
    where?: Tour_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tour_Logs to fetch.
     */
    orderBy?: Tour_LogsOrderByWithRelationInput | Tour_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tour_Logs.
     */
    cursor?: Tour_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tour_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tour_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tour_Logs.
     */
    distinct?: Tour_LogsScalarFieldEnum | Tour_LogsScalarFieldEnum[]
  }

  /**
   * Tour_Logs findFirstOrThrow
   */
  export type Tour_LogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Logs
     */
    select?: Tour_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Logs
     */
    omit?: Tour_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Logs to fetch.
     */
    where?: Tour_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tour_Logs to fetch.
     */
    orderBy?: Tour_LogsOrderByWithRelationInput | Tour_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tour_Logs.
     */
    cursor?: Tour_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tour_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tour_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tour_Logs.
     */
    distinct?: Tour_LogsScalarFieldEnum | Tour_LogsScalarFieldEnum[]
  }

  /**
   * Tour_Logs findMany
   */
  export type Tour_LogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Logs
     */
    select?: Tour_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Logs
     */
    omit?: Tour_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Logs to fetch.
     */
    where?: Tour_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tour_Logs to fetch.
     */
    orderBy?: Tour_LogsOrderByWithRelationInput | Tour_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tour_Logs.
     */
    cursor?: Tour_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tour_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tour_Logs.
     */
    skip?: number
    distinct?: Tour_LogsScalarFieldEnum | Tour_LogsScalarFieldEnum[]
  }

  /**
   * Tour_Logs create
   */
  export type Tour_LogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Logs
     */
    select?: Tour_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Logs
     */
    omit?: Tour_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_LogsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tour_Logs.
     */
    data: XOR<Tour_LogsCreateInput, Tour_LogsUncheckedCreateInput>
  }

  /**
   * Tour_Logs createMany
   */
  export type Tour_LogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tour_Logs.
     */
    data: Tour_LogsCreateManyInput | Tour_LogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tour_Logs update
   */
  export type Tour_LogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Logs
     */
    select?: Tour_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Logs
     */
    omit?: Tour_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_LogsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tour_Logs.
     */
    data: XOR<Tour_LogsUpdateInput, Tour_LogsUncheckedUpdateInput>
    /**
     * Choose, which Tour_Logs to update.
     */
    where: Tour_LogsWhereUniqueInput
  }

  /**
   * Tour_Logs updateMany
   */
  export type Tour_LogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tour_Logs.
     */
    data: XOR<Tour_LogsUpdateManyMutationInput, Tour_LogsUncheckedUpdateManyInput>
    /**
     * Filter which Tour_Logs to update
     */
    where?: Tour_LogsWhereInput
    /**
     * Limit how many Tour_Logs to update.
     */
    limit?: number
  }

  /**
   * Tour_Logs upsert
   */
  export type Tour_LogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Logs
     */
    select?: Tour_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Logs
     */
    omit?: Tour_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_LogsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tour_Logs to update in case it exists.
     */
    where: Tour_LogsWhereUniqueInput
    /**
     * In case the Tour_Logs found by the `where` argument doesn't exist, create a new Tour_Logs with this data.
     */
    create: XOR<Tour_LogsCreateInput, Tour_LogsUncheckedCreateInput>
    /**
     * In case the Tour_Logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tour_LogsUpdateInput, Tour_LogsUncheckedUpdateInput>
  }

  /**
   * Tour_Logs delete
   */
  export type Tour_LogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Logs
     */
    select?: Tour_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Logs
     */
    omit?: Tour_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_LogsInclude<ExtArgs> | null
    /**
     * Filter which Tour_Logs to delete.
     */
    where: Tour_LogsWhereUniqueInput
  }

  /**
   * Tour_Logs deleteMany
   */
  export type Tour_LogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour_Logs to delete
     */
    where?: Tour_LogsWhereInput
    /**
     * Limit how many Tour_Logs to delete.
     */
    limit?: number
  }

  /**
   * Tour_Logs without action
   */
  export type Tour_LogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Logs
     */
    select?: Tour_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Logs
     */
    omit?: Tour_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_LogsInclude<ExtArgs> | null
  }


  /**
   * Model Tour_Itinerarys
   */

  export type AggregateTour_Itinerarys = {
    _count: Tour_ItinerarysCountAggregateOutputType | null
    _avg: Tour_ItinerarysAvgAggregateOutputType | null
    _sum: Tour_ItinerarysSumAggregateOutputType | null
    _min: Tour_ItinerarysMinAggregateOutputType | null
    _max: Tour_ItinerarysMaxAggregateOutputType | null
  }

  export type Tour_ItinerarysAvgAggregateOutputType = {
    itinerary_id: number | null
    tour_id: number | null
    day_number: number | null
  }

  export type Tour_ItinerarysSumAggregateOutputType = {
    itinerary_id: number | null
    tour_id: number | null
    day_number: number | null
  }

  export type Tour_ItinerarysMinAggregateOutputType = {
    itinerary_id: number | null
    tour_id: number | null
    day_number: number | null
    start_time: Date | null
    activity: string | null
    location: string | null
  }

  export type Tour_ItinerarysMaxAggregateOutputType = {
    itinerary_id: number | null
    tour_id: number | null
    day_number: number | null
    start_time: Date | null
    activity: string | null
    location: string | null
  }

  export type Tour_ItinerarysCountAggregateOutputType = {
    itinerary_id: number
    tour_id: number
    day_number: number
    start_time: number
    activity: number
    location: number
    _all: number
  }


  export type Tour_ItinerarysAvgAggregateInputType = {
    itinerary_id?: true
    tour_id?: true
    day_number?: true
  }

  export type Tour_ItinerarysSumAggregateInputType = {
    itinerary_id?: true
    tour_id?: true
    day_number?: true
  }

  export type Tour_ItinerarysMinAggregateInputType = {
    itinerary_id?: true
    tour_id?: true
    day_number?: true
    start_time?: true
    activity?: true
    location?: true
  }

  export type Tour_ItinerarysMaxAggregateInputType = {
    itinerary_id?: true
    tour_id?: true
    day_number?: true
    start_time?: true
    activity?: true
    location?: true
  }

  export type Tour_ItinerarysCountAggregateInputType = {
    itinerary_id?: true
    tour_id?: true
    day_number?: true
    start_time?: true
    activity?: true
    location?: true
    _all?: true
  }

  export type Tour_ItinerarysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour_Itinerarys to aggregate.
     */
    where?: Tour_ItinerarysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tour_Itinerarys to fetch.
     */
    orderBy?: Tour_ItinerarysOrderByWithRelationInput | Tour_ItinerarysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tour_ItinerarysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tour_Itinerarys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tour_Itinerarys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tour_Itinerarys
    **/
    _count?: true | Tour_ItinerarysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tour_ItinerarysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tour_ItinerarysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tour_ItinerarysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tour_ItinerarysMaxAggregateInputType
  }

  export type GetTour_ItinerarysAggregateType<T extends Tour_ItinerarysAggregateArgs> = {
        [P in keyof T & keyof AggregateTour_Itinerarys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTour_Itinerarys[P]>
      : GetScalarType<T[P], AggregateTour_Itinerarys[P]>
  }




  export type Tour_ItinerarysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tour_ItinerarysWhereInput
    orderBy?: Tour_ItinerarysOrderByWithAggregationInput | Tour_ItinerarysOrderByWithAggregationInput[]
    by: Tour_ItinerarysScalarFieldEnum[] | Tour_ItinerarysScalarFieldEnum
    having?: Tour_ItinerarysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tour_ItinerarysCountAggregateInputType | true
    _avg?: Tour_ItinerarysAvgAggregateInputType
    _sum?: Tour_ItinerarysSumAggregateInputType
    _min?: Tour_ItinerarysMinAggregateInputType
    _max?: Tour_ItinerarysMaxAggregateInputType
  }

  export type Tour_ItinerarysGroupByOutputType = {
    itinerary_id: number
    tour_id: number
    day_number: number
    start_time: Date | null
    activity: string | null
    location: string | null
    _count: Tour_ItinerarysCountAggregateOutputType | null
    _avg: Tour_ItinerarysAvgAggregateOutputType | null
    _sum: Tour_ItinerarysSumAggregateOutputType | null
    _min: Tour_ItinerarysMinAggregateOutputType | null
    _max: Tour_ItinerarysMaxAggregateOutputType | null
  }

  type GetTour_ItinerarysGroupByPayload<T extends Tour_ItinerarysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tour_ItinerarysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tour_ItinerarysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tour_ItinerarysGroupByOutputType[P]>
            : GetScalarType<T[P], Tour_ItinerarysGroupByOutputType[P]>
        }
      >
    >


  export type Tour_ItinerarysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    itinerary_id?: boolean
    tour_id?: boolean
    day_number?: boolean
    start_time?: boolean
    activity?: boolean
    location?: boolean
    tours?: boolean | ToursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour_Itinerarys"]>



  export type Tour_ItinerarysSelectScalar = {
    itinerary_id?: boolean
    tour_id?: boolean
    day_number?: boolean
    start_time?: boolean
    activity?: boolean
    location?: boolean
  }

  export type Tour_ItinerarysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"itinerary_id" | "tour_id" | "day_number" | "start_time" | "activity" | "location", ExtArgs["result"]["tour_Itinerarys"]>
  export type Tour_ItinerarysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | ToursDefaultArgs<ExtArgs>
  }

  export type $Tour_ItinerarysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tour_Itinerarys"
    objects: {
      tours: Prisma.$ToursPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      itinerary_id: number
      tour_id: number
      day_number: number
      start_time: Date | null
      activity: string | null
      location: string | null
    }, ExtArgs["result"]["tour_Itinerarys"]>
    composites: {}
  }

  type Tour_ItinerarysGetPayload<S extends boolean | null | undefined | Tour_ItinerarysDefaultArgs> = $Result.GetResult<Prisma.$Tour_ItinerarysPayload, S>

  type Tour_ItinerarysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Tour_ItinerarysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tour_ItinerarysCountAggregateInputType | true
    }

  export interface Tour_ItinerarysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tour_Itinerarys'], meta: { name: 'Tour_Itinerarys' } }
    /**
     * Find zero or one Tour_Itinerarys that matches the filter.
     * @param {Tour_ItinerarysFindUniqueArgs} args - Arguments to find a Tour_Itinerarys
     * @example
     * // Get one Tour_Itinerarys
     * const tour_Itinerarys = await prisma.tour_Itinerarys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tour_ItinerarysFindUniqueArgs>(args: SelectSubset<T, Tour_ItinerarysFindUniqueArgs<ExtArgs>>): Prisma__Tour_ItinerarysClient<$Result.GetResult<Prisma.$Tour_ItinerarysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tour_Itinerarys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Tour_ItinerarysFindUniqueOrThrowArgs} args - Arguments to find a Tour_Itinerarys
     * @example
     * // Get one Tour_Itinerarys
     * const tour_Itinerarys = await prisma.tour_Itinerarys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tour_ItinerarysFindUniqueOrThrowArgs>(args: SelectSubset<T, Tour_ItinerarysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tour_ItinerarysClient<$Result.GetResult<Prisma.$Tour_ItinerarysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour_Itinerarys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ItinerarysFindFirstArgs} args - Arguments to find a Tour_Itinerarys
     * @example
     * // Get one Tour_Itinerarys
     * const tour_Itinerarys = await prisma.tour_Itinerarys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tour_ItinerarysFindFirstArgs>(args?: SelectSubset<T, Tour_ItinerarysFindFirstArgs<ExtArgs>>): Prisma__Tour_ItinerarysClient<$Result.GetResult<Prisma.$Tour_ItinerarysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour_Itinerarys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ItinerarysFindFirstOrThrowArgs} args - Arguments to find a Tour_Itinerarys
     * @example
     * // Get one Tour_Itinerarys
     * const tour_Itinerarys = await prisma.tour_Itinerarys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tour_ItinerarysFindFirstOrThrowArgs>(args?: SelectSubset<T, Tour_ItinerarysFindFirstOrThrowArgs<ExtArgs>>): Prisma__Tour_ItinerarysClient<$Result.GetResult<Prisma.$Tour_ItinerarysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tour_Itinerarys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ItinerarysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tour_Itinerarys
     * const tour_Itinerarys = await prisma.tour_Itinerarys.findMany()
     * 
     * // Get first 10 Tour_Itinerarys
     * const tour_Itinerarys = await prisma.tour_Itinerarys.findMany({ take: 10 })
     * 
     * // Only select the `itinerary_id`
     * const tour_ItinerarysWithItinerary_idOnly = await prisma.tour_Itinerarys.findMany({ select: { itinerary_id: true } })
     * 
     */
    findMany<T extends Tour_ItinerarysFindManyArgs>(args?: SelectSubset<T, Tour_ItinerarysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tour_ItinerarysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tour_Itinerarys.
     * @param {Tour_ItinerarysCreateArgs} args - Arguments to create a Tour_Itinerarys.
     * @example
     * // Create one Tour_Itinerarys
     * const Tour_Itinerarys = await prisma.tour_Itinerarys.create({
     *   data: {
     *     // ... data to create a Tour_Itinerarys
     *   }
     * })
     * 
     */
    create<T extends Tour_ItinerarysCreateArgs>(args: SelectSubset<T, Tour_ItinerarysCreateArgs<ExtArgs>>): Prisma__Tour_ItinerarysClient<$Result.GetResult<Prisma.$Tour_ItinerarysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tour_Itinerarys.
     * @param {Tour_ItinerarysCreateManyArgs} args - Arguments to create many Tour_Itinerarys.
     * @example
     * // Create many Tour_Itinerarys
     * const tour_Itinerarys = await prisma.tour_Itinerarys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tour_ItinerarysCreateManyArgs>(args?: SelectSubset<T, Tour_ItinerarysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tour_Itinerarys.
     * @param {Tour_ItinerarysDeleteArgs} args - Arguments to delete one Tour_Itinerarys.
     * @example
     * // Delete one Tour_Itinerarys
     * const Tour_Itinerarys = await prisma.tour_Itinerarys.delete({
     *   where: {
     *     // ... filter to delete one Tour_Itinerarys
     *   }
     * })
     * 
     */
    delete<T extends Tour_ItinerarysDeleteArgs>(args: SelectSubset<T, Tour_ItinerarysDeleteArgs<ExtArgs>>): Prisma__Tour_ItinerarysClient<$Result.GetResult<Prisma.$Tour_ItinerarysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tour_Itinerarys.
     * @param {Tour_ItinerarysUpdateArgs} args - Arguments to update one Tour_Itinerarys.
     * @example
     * // Update one Tour_Itinerarys
     * const tour_Itinerarys = await prisma.tour_Itinerarys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tour_ItinerarysUpdateArgs>(args: SelectSubset<T, Tour_ItinerarysUpdateArgs<ExtArgs>>): Prisma__Tour_ItinerarysClient<$Result.GetResult<Prisma.$Tour_ItinerarysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tour_Itinerarys.
     * @param {Tour_ItinerarysDeleteManyArgs} args - Arguments to filter Tour_Itinerarys to delete.
     * @example
     * // Delete a few Tour_Itinerarys
     * const { count } = await prisma.tour_Itinerarys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tour_ItinerarysDeleteManyArgs>(args?: SelectSubset<T, Tour_ItinerarysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tour_Itinerarys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ItinerarysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tour_Itinerarys
     * const tour_Itinerarys = await prisma.tour_Itinerarys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tour_ItinerarysUpdateManyArgs>(args: SelectSubset<T, Tour_ItinerarysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tour_Itinerarys.
     * @param {Tour_ItinerarysUpsertArgs} args - Arguments to update or create a Tour_Itinerarys.
     * @example
     * // Update or create a Tour_Itinerarys
     * const tour_Itinerarys = await prisma.tour_Itinerarys.upsert({
     *   create: {
     *     // ... data to create a Tour_Itinerarys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tour_Itinerarys we want to update
     *   }
     * })
     */
    upsert<T extends Tour_ItinerarysUpsertArgs>(args: SelectSubset<T, Tour_ItinerarysUpsertArgs<ExtArgs>>): Prisma__Tour_ItinerarysClient<$Result.GetResult<Prisma.$Tour_ItinerarysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tour_Itinerarys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ItinerarysCountArgs} args - Arguments to filter Tour_Itinerarys to count.
     * @example
     * // Count the number of Tour_Itinerarys
     * const count = await prisma.tour_Itinerarys.count({
     *   where: {
     *     // ... the filter for the Tour_Itinerarys we want to count
     *   }
     * })
    **/
    count<T extends Tour_ItinerarysCountArgs>(
      args?: Subset<T, Tour_ItinerarysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tour_ItinerarysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tour_Itinerarys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ItinerarysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tour_ItinerarysAggregateArgs>(args: Subset<T, Tour_ItinerarysAggregateArgs>): Prisma.PrismaPromise<GetTour_ItinerarysAggregateType<T>>

    /**
     * Group by Tour_Itinerarys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tour_ItinerarysGroupByArgs} args - Group by arguments.
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
      T extends Tour_ItinerarysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tour_ItinerarysGroupByArgs['orderBy'] }
        : { orderBy?: Tour_ItinerarysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Tour_ItinerarysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTour_ItinerarysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tour_Itinerarys model
   */
  readonly fields: Tour_ItinerarysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tour_Itinerarys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tour_ItinerarysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tours<T extends ToursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToursDefaultArgs<ExtArgs>>): Prisma__ToursClient<$Result.GetResult<Prisma.$ToursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tour_Itinerarys model
   */ 
  interface Tour_ItinerarysFieldRefs {
    readonly itinerary_id: FieldRef<"Tour_Itinerarys", 'Int'>
    readonly tour_id: FieldRef<"Tour_Itinerarys", 'Int'>
    readonly day_number: FieldRef<"Tour_Itinerarys", 'Int'>
    readonly start_time: FieldRef<"Tour_Itinerarys", 'DateTime'>
    readonly activity: FieldRef<"Tour_Itinerarys", 'String'>
    readonly location: FieldRef<"Tour_Itinerarys", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tour_Itinerarys findUnique
   */
  export type Tour_ItinerarysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Itinerarys
     */
    select?: Tour_ItinerarysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Itinerarys
     */
    omit?: Tour_ItinerarysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ItinerarysInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Itinerarys to fetch.
     */
    where: Tour_ItinerarysWhereUniqueInput
  }

  /**
   * Tour_Itinerarys findUniqueOrThrow
   */
  export type Tour_ItinerarysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Itinerarys
     */
    select?: Tour_ItinerarysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Itinerarys
     */
    omit?: Tour_ItinerarysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ItinerarysInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Itinerarys to fetch.
     */
    where: Tour_ItinerarysWhereUniqueInput
  }

  /**
   * Tour_Itinerarys findFirst
   */
  export type Tour_ItinerarysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Itinerarys
     */
    select?: Tour_ItinerarysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Itinerarys
     */
    omit?: Tour_ItinerarysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ItinerarysInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Itinerarys to fetch.
     */
    where?: Tour_ItinerarysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tour_Itinerarys to fetch.
     */
    orderBy?: Tour_ItinerarysOrderByWithRelationInput | Tour_ItinerarysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tour_Itinerarys.
     */
    cursor?: Tour_ItinerarysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tour_Itinerarys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tour_Itinerarys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tour_Itinerarys.
     */
    distinct?: Tour_ItinerarysScalarFieldEnum | Tour_ItinerarysScalarFieldEnum[]
  }

  /**
   * Tour_Itinerarys findFirstOrThrow
   */
  export type Tour_ItinerarysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Itinerarys
     */
    select?: Tour_ItinerarysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Itinerarys
     */
    omit?: Tour_ItinerarysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ItinerarysInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Itinerarys to fetch.
     */
    where?: Tour_ItinerarysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tour_Itinerarys to fetch.
     */
    orderBy?: Tour_ItinerarysOrderByWithRelationInput | Tour_ItinerarysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tour_Itinerarys.
     */
    cursor?: Tour_ItinerarysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tour_Itinerarys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tour_Itinerarys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tour_Itinerarys.
     */
    distinct?: Tour_ItinerarysScalarFieldEnum | Tour_ItinerarysScalarFieldEnum[]
  }

  /**
   * Tour_Itinerarys findMany
   */
  export type Tour_ItinerarysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Itinerarys
     */
    select?: Tour_ItinerarysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Itinerarys
     */
    omit?: Tour_ItinerarysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ItinerarysInclude<ExtArgs> | null
    /**
     * Filter, which Tour_Itinerarys to fetch.
     */
    where?: Tour_ItinerarysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tour_Itinerarys to fetch.
     */
    orderBy?: Tour_ItinerarysOrderByWithRelationInput | Tour_ItinerarysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tour_Itinerarys.
     */
    cursor?: Tour_ItinerarysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tour_Itinerarys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tour_Itinerarys.
     */
    skip?: number
    distinct?: Tour_ItinerarysScalarFieldEnum | Tour_ItinerarysScalarFieldEnum[]
  }

  /**
   * Tour_Itinerarys create
   */
  export type Tour_ItinerarysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Itinerarys
     */
    select?: Tour_ItinerarysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Itinerarys
     */
    omit?: Tour_ItinerarysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ItinerarysInclude<ExtArgs> | null
    /**
     * The data needed to create a Tour_Itinerarys.
     */
    data: XOR<Tour_ItinerarysCreateInput, Tour_ItinerarysUncheckedCreateInput>
  }

  /**
   * Tour_Itinerarys createMany
   */
  export type Tour_ItinerarysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tour_Itinerarys.
     */
    data: Tour_ItinerarysCreateManyInput | Tour_ItinerarysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tour_Itinerarys update
   */
  export type Tour_ItinerarysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Itinerarys
     */
    select?: Tour_ItinerarysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Itinerarys
     */
    omit?: Tour_ItinerarysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ItinerarysInclude<ExtArgs> | null
    /**
     * The data needed to update a Tour_Itinerarys.
     */
    data: XOR<Tour_ItinerarysUpdateInput, Tour_ItinerarysUncheckedUpdateInput>
    /**
     * Choose, which Tour_Itinerarys to update.
     */
    where: Tour_ItinerarysWhereUniqueInput
  }

  /**
   * Tour_Itinerarys updateMany
   */
  export type Tour_ItinerarysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tour_Itinerarys.
     */
    data: XOR<Tour_ItinerarysUpdateManyMutationInput, Tour_ItinerarysUncheckedUpdateManyInput>
    /**
     * Filter which Tour_Itinerarys to update
     */
    where?: Tour_ItinerarysWhereInput
    /**
     * Limit how many Tour_Itinerarys to update.
     */
    limit?: number
  }

  /**
   * Tour_Itinerarys upsert
   */
  export type Tour_ItinerarysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Itinerarys
     */
    select?: Tour_ItinerarysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Itinerarys
     */
    omit?: Tour_ItinerarysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ItinerarysInclude<ExtArgs> | null
    /**
     * The filter to search for the Tour_Itinerarys to update in case it exists.
     */
    where: Tour_ItinerarysWhereUniqueInput
    /**
     * In case the Tour_Itinerarys found by the `where` argument doesn't exist, create a new Tour_Itinerarys with this data.
     */
    create: XOR<Tour_ItinerarysCreateInput, Tour_ItinerarysUncheckedCreateInput>
    /**
     * In case the Tour_Itinerarys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tour_ItinerarysUpdateInput, Tour_ItinerarysUncheckedUpdateInput>
  }

  /**
   * Tour_Itinerarys delete
   */
  export type Tour_ItinerarysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Itinerarys
     */
    select?: Tour_ItinerarysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Itinerarys
     */
    omit?: Tour_ItinerarysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ItinerarysInclude<ExtArgs> | null
    /**
     * Filter which Tour_Itinerarys to delete.
     */
    where: Tour_ItinerarysWhereUniqueInput
  }

  /**
   * Tour_Itinerarys deleteMany
   */
  export type Tour_ItinerarysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour_Itinerarys to delete
     */
    where?: Tour_ItinerarysWhereInput
    /**
     * Limit how many Tour_Itinerarys to delete.
     */
    limit?: number
  }

  /**
   * Tour_Itinerarys without action
   */
  export type Tour_ItinerarysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour_Itinerarys
     */
    select?: Tour_ItinerarysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour_Itinerarys
     */
    omit?: Tour_ItinerarysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tour_ItinerarysInclude<ExtArgs> | null
  }


  /**
   * Model Chatbot_History
   */

  export type AggregateChatbot_History = {
    _count: Chatbot_HistoryCountAggregateOutputType | null
    _avg: Chatbot_HistoryAvgAggregateOutputType | null
    _sum: Chatbot_HistorySumAggregateOutputType | null
    _min: Chatbot_HistoryMinAggregateOutputType | null
    _max: Chatbot_HistoryMaxAggregateOutputType | null
  }

  export type Chatbot_HistoryAvgAggregateOutputType = {
    chat_id: number | null
    user_id: number | null
  }

  export type Chatbot_HistorySumAggregateOutputType = {
    chat_id: number | null
    user_id: number | null
  }

  export type Chatbot_HistoryMinAggregateOutputType = {
    chat_id: number | null
    user_id: number | null
    message: string | null
    sender: string | null
    timestamp: Date | null
  }

  export type Chatbot_HistoryMaxAggregateOutputType = {
    chat_id: number | null
    user_id: number | null
    message: string | null
    sender: string | null
    timestamp: Date | null
  }

  export type Chatbot_HistoryCountAggregateOutputType = {
    chat_id: number
    user_id: number
    message: number
    sender: number
    timestamp: number
    _all: number
  }


  export type Chatbot_HistoryAvgAggregateInputType = {
    chat_id?: true
    user_id?: true
  }

  export type Chatbot_HistorySumAggregateInputType = {
    chat_id?: true
    user_id?: true
  }

  export type Chatbot_HistoryMinAggregateInputType = {
    chat_id?: true
    user_id?: true
    message?: true
    sender?: true
    timestamp?: true
  }

  export type Chatbot_HistoryMaxAggregateInputType = {
    chat_id?: true
    user_id?: true
    message?: true
    sender?: true
    timestamp?: true
  }

  export type Chatbot_HistoryCountAggregateInputType = {
    chat_id?: true
    user_id?: true
    message?: true
    sender?: true
    timestamp?: true
    _all?: true
  }

  export type Chatbot_HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chatbot_History to aggregate.
     */
    where?: Chatbot_HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatbot_Histories to fetch.
     */
    orderBy?: Chatbot_HistoryOrderByWithRelationInput | Chatbot_HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Chatbot_HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatbot_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatbot_Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chatbot_Histories
    **/
    _count?: true | Chatbot_HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chatbot_HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chatbot_HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chatbot_HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chatbot_HistoryMaxAggregateInputType
  }

  export type GetChatbot_HistoryAggregateType<T extends Chatbot_HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateChatbot_History]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatbot_History[P]>
      : GetScalarType<T[P], AggregateChatbot_History[P]>
  }




  export type Chatbot_HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Chatbot_HistoryWhereInput
    orderBy?: Chatbot_HistoryOrderByWithAggregationInput | Chatbot_HistoryOrderByWithAggregationInput[]
    by: Chatbot_HistoryScalarFieldEnum[] | Chatbot_HistoryScalarFieldEnum
    having?: Chatbot_HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chatbot_HistoryCountAggregateInputType | true
    _avg?: Chatbot_HistoryAvgAggregateInputType
    _sum?: Chatbot_HistorySumAggregateInputType
    _min?: Chatbot_HistoryMinAggregateInputType
    _max?: Chatbot_HistoryMaxAggregateInputType
  }

  export type Chatbot_HistoryGroupByOutputType = {
    chat_id: number
    user_id: number | null
    message: string
    sender: string
    timestamp: Date
    _count: Chatbot_HistoryCountAggregateOutputType | null
    _avg: Chatbot_HistoryAvgAggregateOutputType | null
    _sum: Chatbot_HistorySumAggregateOutputType | null
    _min: Chatbot_HistoryMinAggregateOutputType | null
    _max: Chatbot_HistoryMaxAggregateOutputType | null
  }

  type GetChatbot_HistoryGroupByPayload<T extends Chatbot_HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chatbot_HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chatbot_HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chatbot_HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], Chatbot_HistoryGroupByOutputType[P]>
        }
      >
    >


  export type Chatbot_HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chat_id?: boolean
    user_id?: boolean
    message?: boolean
    sender?: boolean
    timestamp?: boolean
    Users?: boolean | Chatbot_History$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["chatbot_History"]>



  export type Chatbot_HistorySelectScalar = {
    chat_id?: boolean
    user_id?: boolean
    message?: boolean
    sender?: boolean
    timestamp?: boolean
  }

  export type Chatbot_HistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chat_id" | "user_id" | "message" | "sender" | "timestamp", ExtArgs["result"]["chatbot_History"]>
  export type Chatbot_HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Chatbot_History$UsersArgs<ExtArgs>
  }

  export type $Chatbot_HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chatbot_History"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      chat_id: number
      user_id: number | null
      message: string
      sender: string
      timestamp: Date
    }, ExtArgs["result"]["chatbot_History"]>
    composites: {}
  }

  type Chatbot_HistoryGetPayload<S extends boolean | null | undefined | Chatbot_HistoryDefaultArgs> = $Result.GetResult<Prisma.$Chatbot_HistoryPayload, S>

  type Chatbot_HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Chatbot_HistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chatbot_HistoryCountAggregateInputType | true
    }

  export interface Chatbot_HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chatbot_History'], meta: { name: 'Chatbot_History' } }
    /**
     * Find zero or one Chatbot_History that matches the filter.
     * @param {Chatbot_HistoryFindUniqueArgs} args - Arguments to find a Chatbot_History
     * @example
     * // Get one Chatbot_History
     * const chatbot_History = await prisma.chatbot_History.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Chatbot_HistoryFindUniqueArgs>(args: SelectSubset<T, Chatbot_HistoryFindUniqueArgs<ExtArgs>>): Prisma__Chatbot_HistoryClient<$Result.GetResult<Prisma.$Chatbot_HistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chatbot_History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Chatbot_HistoryFindUniqueOrThrowArgs} args - Arguments to find a Chatbot_History
     * @example
     * // Get one Chatbot_History
     * const chatbot_History = await prisma.chatbot_History.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Chatbot_HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, Chatbot_HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Chatbot_HistoryClient<$Result.GetResult<Prisma.$Chatbot_HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatbot_History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chatbot_HistoryFindFirstArgs} args - Arguments to find a Chatbot_History
     * @example
     * // Get one Chatbot_History
     * const chatbot_History = await prisma.chatbot_History.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Chatbot_HistoryFindFirstArgs>(args?: SelectSubset<T, Chatbot_HistoryFindFirstArgs<ExtArgs>>): Prisma__Chatbot_HistoryClient<$Result.GetResult<Prisma.$Chatbot_HistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatbot_History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chatbot_HistoryFindFirstOrThrowArgs} args - Arguments to find a Chatbot_History
     * @example
     * // Get one Chatbot_History
     * const chatbot_History = await prisma.chatbot_History.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Chatbot_HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, Chatbot_HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__Chatbot_HistoryClient<$Result.GetResult<Prisma.$Chatbot_HistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chatbot_Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chatbot_HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatbot_Histories
     * const chatbot_Histories = await prisma.chatbot_History.findMany()
     * 
     * // Get first 10 Chatbot_Histories
     * const chatbot_Histories = await prisma.chatbot_History.findMany({ take: 10 })
     * 
     * // Only select the `chat_id`
     * const chatbot_HistoryWithChat_idOnly = await prisma.chatbot_History.findMany({ select: { chat_id: true } })
     * 
     */
    findMany<T extends Chatbot_HistoryFindManyArgs>(args?: SelectSubset<T, Chatbot_HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Chatbot_HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chatbot_History.
     * @param {Chatbot_HistoryCreateArgs} args - Arguments to create a Chatbot_History.
     * @example
     * // Create one Chatbot_History
     * const Chatbot_History = await prisma.chatbot_History.create({
     *   data: {
     *     // ... data to create a Chatbot_History
     *   }
     * })
     * 
     */
    create<T extends Chatbot_HistoryCreateArgs>(args: SelectSubset<T, Chatbot_HistoryCreateArgs<ExtArgs>>): Prisma__Chatbot_HistoryClient<$Result.GetResult<Prisma.$Chatbot_HistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chatbot_Histories.
     * @param {Chatbot_HistoryCreateManyArgs} args - Arguments to create many Chatbot_Histories.
     * @example
     * // Create many Chatbot_Histories
     * const chatbot_History = await prisma.chatbot_History.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Chatbot_HistoryCreateManyArgs>(args?: SelectSubset<T, Chatbot_HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chatbot_History.
     * @param {Chatbot_HistoryDeleteArgs} args - Arguments to delete one Chatbot_History.
     * @example
     * // Delete one Chatbot_History
     * const Chatbot_History = await prisma.chatbot_History.delete({
     *   where: {
     *     // ... filter to delete one Chatbot_History
     *   }
     * })
     * 
     */
    delete<T extends Chatbot_HistoryDeleteArgs>(args: SelectSubset<T, Chatbot_HistoryDeleteArgs<ExtArgs>>): Prisma__Chatbot_HistoryClient<$Result.GetResult<Prisma.$Chatbot_HistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chatbot_History.
     * @param {Chatbot_HistoryUpdateArgs} args - Arguments to update one Chatbot_History.
     * @example
     * // Update one Chatbot_History
     * const chatbot_History = await prisma.chatbot_History.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Chatbot_HistoryUpdateArgs>(args: SelectSubset<T, Chatbot_HistoryUpdateArgs<ExtArgs>>): Prisma__Chatbot_HistoryClient<$Result.GetResult<Prisma.$Chatbot_HistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chatbot_Histories.
     * @param {Chatbot_HistoryDeleteManyArgs} args - Arguments to filter Chatbot_Histories to delete.
     * @example
     * // Delete a few Chatbot_Histories
     * const { count } = await prisma.chatbot_History.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Chatbot_HistoryDeleteManyArgs>(args?: SelectSubset<T, Chatbot_HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatbot_Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chatbot_HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatbot_Histories
     * const chatbot_History = await prisma.chatbot_History.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Chatbot_HistoryUpdateManyArgs>(args: SelectSubset<T, Chatbot_HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chatbot_History.
     * @param {Chatbot_HistoryUpsertArgs} args - Arguments to update or create a Chatbot_History.
     * @example
     * // Update or create a Chatbot_History
     * const chatbot_History = await prisma.chatbot_History.upsert({
     *   create: {
     *     // ... data to create a Chatbot_History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatbot_History we want to update
     *   }
     * })
     */
    upsert<T extends Chatbot_HistoryUpsertArgs>(args: SelectSubset<T, Chatbot_HistoryUpsertArgs<ExtArgs>>): Prisma__Chatbot_HistoryClient<$Result.GetResult<Prisma.$Chatbot_HistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chatbot_Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chatbot_HistoryCountArgs} args - Arguments to filter Chatbot_Histories to count.
     * @example
     * // Count the number of Chatbot_Histories
     * const count = await prisma.chatbot_History.count({
     *   where: {
     *     // ... the filter for the Chatbot_Histories we want to count
     *   }
     * })
    **/
    count<T extends Chatbot_HistoryCountArgs>(
      args?: Subset<T, Chatbot_HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chatbot_HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatbot_History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chatbot_HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Chatbot_HistoryAggregateArgs>(args: Subset<T, Chatbot_HistoryAggregateArgs>): Prisma.PrismaPromise<GetChatbot_HistoryAggregateType<T>>

    /**
     * Group by Chatbot_History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chatbot_HistoryGroupByArgs} args - Group by arguments.
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
      T extends Chatbot_HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Chatbot_HistoryGroupByArgs['orderBy'] }
        : { orderBy?: Chatbot_HistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Chatbot_HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatbot_HistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chatbot_History model
   */
  readonly fields: Chatbot_HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chatbot_History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Chatbot_HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Chatbot_History$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Chatbot_History$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Chatbot_History model
   */ 
  interface Chatbot_HistoryFieldRefs {
    readonly chat_id: FieldRef<"Chatbot_History", 'Int'>
    readonly user_id: FieldRef<"Chatbot_History", 'Int'>
    readonly message: FieldRef<"Chatbot_History", 'String'>
    readonly sender: FieldRef<"Chatbot_History", 'String'>
    readonly timestamp: FieldRef<"Chatbot_History", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chatbot_History findUnique
   */
  export type Chatbot_HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot_History
     */
    select?: Chatbot_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot_History
     */
    omit?: Chatbot_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Chatbot_HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot_History to fetch.
     */
    where: Chatbot_HistoryWhereUniqueInput
  }

  /**
   * Chatbot_History findUniqueOrThrow
   */
  export type Chatbot_HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot_History
     */
    select?: Chatbot_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot_History
     */
    omit?: Chatbot_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Chatbot_HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot_History to fetch.
     */
    where: Chatbot_HistoryWhereUniqueInput
  }

  /**
   * Chatbot_History findFirst
   */
  export type Chatbot_HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot_History
     */
    select?: Chatbot_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot_History
     */
    omit?: Chatbot_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Chatbot_HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot_History to fetch.
     */
    where?: Chatbot_HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatbot_Histories to fetch.
     */
    orderBy?: Chatbot_HistoryOrderByWithRelationInput | Chatbot_HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chatbot_Histories.
     */
    cursor?: Chatbot_HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatbot_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatbot_Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chatbot_Histories.
     */
    distinct?: Chatbot_HistoryScalarFieldEnum | Chatbot_HistoryScalarFieldEnum[]
  }

  /**
   * Chatbot_History findFirstOrThrow
   */
  export type Chatbot_HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot_History
     */
    select?: Chatbot_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot_History
     */
    omit?: Chatbot_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Chatbot_HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot_History to fetch.
     */
    where?: Chatbot_HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatbot_Histories to fetch.
     */
    orderBy?: Chatbot_HistoryOrderByWithRelationInput | Chatbot_HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chatbot_Histories.
     */
    cursor?: Chatbot_HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatbot_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatbot_Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chatbot_Histories.
     */
    distinct?: Chatbot_HistoryScalarFieldEnum | Chatbot_HistoryScalarFieldEnum[]
  }

  /**
   * Chatbot_History findMany
   */
  export type Chatbot_HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot_History
     */
    select?: Chatbot_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot_History
     */
    omit?: Chatbot_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Chatbot_HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Chatbot_Histories to fetch.
     */
    where?: Chatbot_HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatbot_Histories to fetch.
     */
    orderBy?: Chatbot_HistoryOrderByWithRelationInput | Chatbot_HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chatbot_Histories.
     */
    cursor?: Chatbot_HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatbot_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatbot_Histories.
     */
    skip?: number
    distinct?: Chatbot_HistoryScalarFieldEnum | Chatbot_HistoryScalarFieldEnum[]
  }

  /**
   * Chatbot_History create
   */
  export type Chatbot_HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot_History
     */
    select?: Chatbot_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot_History
     */
    omit?: Chatbot_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Chatbot_HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Chatbot_History.
     */
    data: XOR<Chatbot_HistoryCreateInput, Chatbot_HistoryUncheckedCreateInput>
  }

  /**
   * Chatbot_History createMany
   */
  export type Chatbot_HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chatbot_Histories.
     */
    data: Chatbot_HistoryCreateManyInput | Chatbot_HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chatbot_History update
   */
  export type Chatbot_HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot_History
     */
    select?: Chatbot_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot_History
     */
    omit?: Chatbot_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Chatbot_HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Chatbot_History.
     */
    data: XOR<Chatbot_HistoryUpdateInput, Chatbot_HistoryUncheckedUpdateInput>
    /**
     * Choose, which Chatbot_History to update.
     */
    where: Chatbot_HistoryWhereUniqueInput
  }

  /**
   * Chatbot_History updateMany
   */
  export type Chatbot_HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chatbot_Histories.
     */
    data: XOR<Chatbot_HistoryUpdateManyMutationInput, Chatbot_HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Chatbot_Histories to update
     */
    where?: Chatbot_HistoryWhereInput
    /**
     * Limit how many Chatbot_Histories to update.
     */
    limit?: number
  }

  /**
   * Chatbot_History upsert
   */
  export type Chatbot_HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot_History
     */
    select?: Chatbot_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot_History
     */
    omit?: Chatbot_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Chatbot_HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Chatbot_History to update in case it exists.
     */
    where: Chatbot_HistoryWhereUniqueInput
    /**
     * In case the Chatbot_History found by the `where` argument doesn't exist, create a new Chatbot_History with this data.
     */
    create: XOR<Chatbot_HistoryCreateInput, Chatbot_HistoryUncheckedCreateInput>
    /**
     * In case the Chatbot_History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Chatbot_HistoryUpdateInput, Chatbot_HistoryUncheckedUpdateInput>
  }

  /**
   * Chatbot_History delete
   */
  export type Chatbot_HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot_History
     */
    select?: Chatbot_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot_History
     */
    omit?: Chatbot_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Chatbot_HistoryInclude<ExtArgs> | null
    /**
     * Filter which Chatbot_History to delete.
     */
    where: Chatbot_HistoryWhereUniqueInput
  }

  /**
   * Chatbot_History deleteMany
   */
  export type Chatbot_HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chatbot_Histories to delete
     */
    where?: Chatbot_HistoryWhereInput
    /**
     * Limit how many Chatbot_Histories to delete.
     */
    limit?: number
  }

  /**
   * Chatbot_History.Users
   */
  export type Chatbot_History$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Chatbot_History without action
   */
  export type Chatbot_HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatbot_History
     */
    select?: Chatbot_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatbot_History
     */
    omit?: Chatbot_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Chatbot_HistoryInclude<ExtArgs> | null
  }


  /**
   * Model AI_Recommendations
   */

  export type AggregateAI_Recommendations = {
    _count: AI_RecommendationsCountAggregateOutputType | null
    _avg: AI_RecommendationsAvgAggregateOutputType | null
    _sum: AI_RecommendationsSumAggregateOutputType | null
    _min: AI_RecommendationsMinAggregateOutputType | null
    _max: AI_RecommendationsMaxAggregateOutputType | null
  }

  export type AI_RecommendationsAvgAggregateOutputType = {
    recommendation_id: number | null
    user_id: number | null
  }

  export type AI_RecommendationsSumAggregateOutputType = {
    recommendation_id: number | null
    user_id: number | null
  }

  export type AI_RecommendationsMinAggregateOutputType = {
    recommendation_id: number | null
    user_id: number | null
    recommendation_text: string | null
    created_at: Date | null
  }

  export type AI_RecommendationsMaxAggregateOutputType = {
    recommendation_id: number | null
    user_id: number | null
    recommendation_text: string | null
    created_at: Date | null
  }

  export type AI_RecommendationsCountAggregateOutputType = {
    recommendation_id: number
    user_id: number
    recommendation_text: number
    created_at: number
    _all: number
  }


  export type AI_RecommendationsAvgAggregateInputType = {
    recommendation_id?: true
    user_id?: true
  }

  export type AI_RecommendationsSumAggregateInputType = {
    recommendation_id?: true
    user_id?: true
  }

  export type AI_RecommendationsMinAggregateInputType = {
    recommendation_id?: true
    user_id?: true
    recommendation_text?: true
    created_at?: true
  }

  export type AI_RecommendationsMaxAggregateInputType = {
    recommendation_id?: true
    user_id?: true
    recommendation_text?: true
    created_at?: true
  }

  export type AI_RecommendationsCountAggregateInputType = {
    recommendation_id?: true
    user_id?: true
    recommendation_text?: true
    created_at?: true
    _all?: true
  }

  export type AI_RecommendationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AI_Recommendations to aggregate.
     */
    where?: AI_RecommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AI_Recommendations to fetch.
     */
    orderBy?: AI_RecommendationsOrderByWithRelationInput | AI_RecommendationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AI_RecommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AI_Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AI_Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AI_Recommendations
    **/
    _count?: true | AI_RecommendationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AI_RecommendationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AI_RecommendationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AI_RecommendationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AI_RecommendationsMaxAggregateInputType
  }

  export type GetAI_RecommendationsAggregateType<T extends AI_RecommendationsAggregateArgs> = {
        [P in keyof T & keyof AggregateAI_Recommendations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAI_Recommendations[P]>
      : GetScalarType<T[P], AggregateAI_Recommendations[P]>
  }




  export type AI_RecommendationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AI_RecommendationsWhereInput
    orderBy?: AI_RecommendationsOrderByWithAggregationInput | AI_RecommendationsOrderByWithAggregationInput[]
    by: AI_RecommendationsScalarFieldEnum[] | AI_RecommendationsScalarFieldEnum
    having?: AI_RecommendationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AI_RecommendationsCountAggregateInputType | true
    _avg?: AI_RecommendationsAvgAggregateInputType
    _sum?: AI_RecommendationsSumAggregateInputType
    _min?: AI_RecommendationsMinAggregateInputType
    _max?: AI_RecommendationsMaxAggregateInputType
  }

  export type AI_RecommendationsGroupByOutputType = {
    recommendation_id: number
    user_id: number | null
    recommendation_text: string
    created_at: Date
    _count: AI_RecommendationsCountAggregateOutputType | null
    _avg: AI_RecommendationsAvgAggregateOutputType | null
    _sum: AI_RecommendationsSumAggregateOutputType | null
    _min: AI_RecommendationsMinAggregateOutputType | null
    _max: AI_RecommendationsMaxAggregateOutputType | null
  }

  type GetAI_RecommendationsGroupByPayload<T extends AI_RecommendationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AI_RecommendationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AI_RecommendationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AI_RecommendationsGroupByOutputType[P]>
            : GetScalarType<T[P], AI_RecommendationsGroupByOutputType[P]>
        }
      >
    >


  export type AI_RecommendationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recommendation_id?: boolean
    user_id?: boolean
    recommendation_text?: boolean
    created_at?: boolean
    Users?: boolean | AI_Recommendations$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["aI_Recommendations"]>



  export type AI_RecommendationsSelectScalar = {
    recommendation_id?: boolean
    user_id?: boolean
    recommendation_text?: boolean
    created_at?: boolean
  }

  export type AI_RecommendationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"recommendation_id" | "user_id" | "recommendation_text" | "created_at", ExtArgs["result"]["aI_Recommendations"]>
  export type AI_RecommendationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | AI_Recommendations$UsersArgs<ExtArgs>
  }

  export type $AI_RecommendationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AI_Recommendations"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      recommendation_id: number
      user_id: number | null
      recommendation_text: string
      created_at: Date
    }, ExtArgs["result"]["aI_Recommendations"]>
    composites: {}
  }

  type AI_RecommendationsGetPayload<S extends boolean | null | undefined | AI_RecommendationsDefaultArgs> = $Result.GetResult<Prisma.$AI_RecommendationsPayload, S>

  type AI_RecommendationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AI_RecommendationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AI_RecommendationsCountAggregateInputType | true
    }

  export interface AI_RecommendationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AI_Recommendations'], meta: { name: 'AI_Recommendations' } }
    /**
     * Find zero or one AI_Recommendations that matches the filter.
     * @param {AI_RecommendationsFindUniqueArgs} args - Arguments to find a AI_Recommendations
     * @example
     * // Get one AI_Recommendations
     * const aI_Recommendations = await prisma.aI_Recommendations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AI_RecommendationsFindUniqueArgs>(args: SelectSubset<T, AI_RecommendationsFindUniqueArgs<ExtArgs>>): Prisma__AI_RecommendationsClient<$Result.GetResult<Prisma.$AI_RecommendationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AI_Recommendations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AI_RecommendationsFindUniqueOrThrowArgs} args - Arguments to find a AI_Recommendations
     * @example
     * // Get one AI_Recommendations
     * const aI_Recommendations = await prisma.aI_Recommendations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AI_RecommendationsFindUniqueOrThrowArgs>(args: SelectSubset<T, AI_RecommendationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AI_RecommendationsClient<$Result.GetResult<Prisma.$AI_RecommendationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AI_Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_RecommendationsFindFirstArgs} args - Arguments to find a AI_Recommendations
     * @example
     * // Get one AI_Recommendations
     * const aI_Recommendations = await prisma.aI_Recommendations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AI_RecommendationsFindFirstArgs>(args?: SelectSubset<T, AI_RecommendationsFindFirstArgs<ExtArgs>>): Prisma__AI_RecommendationsClient<$Result.GetResult<Prisma.$AI_RecommendationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AI_Recommendations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_RecommendationsFindFirstOrThrowArgs} args - Arguments to find a AI_Recommendations
     * @example
     * // Get one AI_Recommendations
     * const aI_Recommendations = await prisma.aI_Recommendations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AI_RecommendationsFindFirstOrThrowArgs>(args?: SelectSubset<T, AI_RecommendationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AI_RecommendationsClient<$Result.GetResult<Prisma.$AI_RecommendationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AI_Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_RecommendationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AI_Recommendations
     * const aI_Recommendations = await prisma.aI_Recommendations.findMany()
     * 
     * // Get first 10 AI_Recommendations
     * const aI_Recommendations = await prisma.aI_Recommendations.findMany({ take: 10 })
     * 
     * // Only select the `recommendation_id`
     * const aI_RecommendationsWithRecommendation_idOnly = await prisma.aI_Recommendations.findMany({ select: { recommendation_id: true } })
     * 
     */
    findMany<T extends AI_RecommendationsFindManyArgs>(args?: SelectSubset<T, AI_RecommendationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AI_RecommendationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AI_Recommendations.
     * @param {AI_RecommendationsCreateArgs} args - Arguments to create a AI_Recommendations.
     * @example
     * // Create one AI_Recommendations
     * const AI_Recommendations = await prisma.aI_Recommendations.create({
     *   data: {
     *     // ... data to create a AI_Recommendations
     *   }
     * })
     * 
     */
    create<T extends AI_RecommendationsCreateArgs>(args: SelectSubset<T, AI_RecommendationsCreateArgs<ExtArgs>>): Prisma__AI_RecommendationsClient<$Result.GetResult<Prisma.$AI_RecommendationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AI_Recommendations.
     * @param {AI_RecommendationsCreateManyArgs} args - Arguments to create many AI_Recommendations.
     * @example
     * // Create many AI_Recommendations
     * const aI_Recommendations = await prisma.aI_Recommendations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AI_RecommendationsCreateManyArgs>(args?: SelectSubset<T, AI_RecommendationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AI_Recommendations.
     * @param {AI_RecommendationsDeleteArgs} args - Arguments to delete one AI_Recommendations.
     * @example
     * // Delete one AI_Recommendations
     * const AI_Recommendations = await prisma.aI_Recommendations.delete({
     *   where: {
     *     // ... filter to delete one AI_Recommendations
     *   }
     * })
     * 
     */
    delete<T extends AI_RecommendationsDeleteArgs>(args: SelectSubset<T, AI_RecommendationsDeleteArgs<ExtArgs>>): Prisma__AI_RecommendationsClient<$Result.GetResult<Prisma.$AI_RecommendationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AI_Recommendations.
     * @param {AI_RecommendationsUpdateArgs} args - Arguments to update one AI_Recommendations.
     * @example
     * // Update one AI_Recommendations
     * const aI_Recommendations = await prisma.aI_Recommendations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AI_RecommendationsUpdateArgs>(args: SelectSubset<T, AI_RecommendationsUpdateArgs<ExtArgs>>): Prisma__AI_RecommendationsClient<$Result.GetResult<Prisma.$AI_RecommendationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AI_Recommendations.
     * @param {AI_RecommendationsDeleteManyArgs} args - Arguments to filter AI_Recommendations to delete.
     * @example
     * // Delete a few AI_Recommendations
     * const { count } = await prisma.aI_Recommendations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AI_RecommendationsDeleteManyArgs>(args?: SelectSubset<T, AI_RecommendationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AI_Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_RecommendationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AI_Recommendations
     * const aI_Recommendations = await prisma.aI_Recommendations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AI_RecommendationsUpdateManyArgs>(args: SelectSubset<T, AI_RecommendationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AI_Recommendations.
     * @param {AI_RecommendationsUpsertArgs} args - Arguments to update or create a AI_Recommendations.
     * @example
     * // Update or create a AI_Recommendations
     * const aI_Recommendations = await prisma.aI_Recommendations.upsert({
     *   create: {
     *     // ... data to create a AI_Recommendations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AI_Recommendations we want to update
     *   }
     * })
     */
    upsert<T extends AI_RecommendationsUpsertArgs>(args: SelectSubset<T, AI_RecommendationsUpsertArgs<ExtArgs>>): Prisma__AI_RecommendationsClient<$Result.GetResult<Prisma.$AI_RecommendationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AI_Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_RecommendationsCountArgs} args - Arguments to filter AI_Recommendations to count.
     * @example
     * // Count the number of AI_Recommendations
     * const count = await prisma.aI_Recommendations.count({
     *   where: {
     *     // ... the filter for the AI_Recommendations we want to count
     *   }
     * })
    **/
    count<T extends AI_RecommendationsCountArgs>(
      args?: Subset<T, AI_RecommendationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AI_RecommendationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AI_Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_RecommendationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AI_RecommendationsAggregateArgs>(args: Subset<T, AI_RecommendationsAggregateArgs>): Prisma.PrismaPromise<GetAI_RecommendationsAggregateType<T>>

    /**
     * Group by AI_Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AI_RecommendationsGroupByArgs} args - Group by arguments.
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
      T extends AI_RecommendationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AI_RecommendationsGroupByArgs['orderBy'] }
        : { orderBy?: AI_RecommendationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AI_RecommendationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAI_RecommendationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AI_Recommendations model
   */
  readonly fields: AI_RecommendationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AI_Recommendations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AI_RecommendationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends AI_Recommendations$UsersArgs<ExtArgs> = {}>(args?: Subset<T, AI_Recommendations$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AI_Recommendations model
   */ 
  interface AI_RecommendationsFieldRefs {
    readonly recommendation_id: FieldRef<"AI_Recommendations", 'Int'>
    readonly user_id: FieldRef<"AI_Recommendations", 'Int'>
    readonly recommendation_text: FieldRef<"AI_Recommendations", 'String'>
    readonly created_at: FieldRef<"AI_Recommendations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AI_Recommendations findUnique
   */
  export type AI_RecommendationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Recommendations
     */
    select?: AI_RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Recommendations
     */
    omit?: AI_RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which AI_Recommendations to fetch.
     */
    where: AI_RecommendationsWhereUniqueInput
  }

  /**
   * AI_Recommendations findUniqueOrThrow
   */
  export type AI_RecommendationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Recommendations
     */
    select?: AI_RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Recommendations
     */
    omit?: AI_RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which AI_Recommendations to fetch.
     */
    where: AI_RecommendationsWhereUniqueInput
  }

  /**
   * AI_Recommendations findFirst
   */
  export type AI_RecommendationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Recommendations
     */
    select?: AI_RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Recommendations
     */
    omit?: AI_RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which AI_Recommendations to fetch.
     */
    where?: AI_RecommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AI_Recommendations to fetch.
     */
    orderBy?: AI_RecommendationsOrderByWithRelationInput | AI_RecommendationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AI_Recommendations.
     */
    cursor?: AI_RecommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AI_Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AI_Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AI_Recommendations.
     */
    distinct?: AI_RecommendationsScalarFieldEnum | AI_RecommendationsScalarFieldEnum[]
  }

  /**
   * AI_Recommendations findFirstOrThrow
   */
  export type AI_RecommendationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Recommendations
     */
    select?: AI_RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Recommendations
     */
    omit?: AI_RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which AI_Recommendations to fetch.
     */
    where?: AI_RecommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AI_Recommendations to fetch.
     */
    orderBy?: AI_RecommendationsOrderByWithRelationInput | AI_RecommendationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AI_Recommendations.
     */
    cursor?: AI_RecommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AI_Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AI_Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AI_Recommendations.
     */
    distinct?: AI_RecommendationsScalarFieldEnum | AI_RecommendationsScalarFieldEnum[]
  }

  /**
   * AI_Recommendations findMany
   */
  export type AI_RecommendationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Recommendations
     */
    select?: AI_RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Recommendations
     */
    omit?: AI_RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_RecommendationsInclude<ExtArgs> | null
    /**
     * Filter, which AI_Recommendations to fetch.
     */
    where?: AI_RecommendationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AI_Recommendations to fetch.
     */
    orderBy?: AI_RecommendationsOrderByWithRelationInput | AI_RecommendationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AI_Recommendations.
     */
    cursor?: AI_RecommendationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AI_Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AI_Recommendations.
     */
    skip?: number
    distinct?: AI_RecommendationsScalarFieldEnum | AI_RecommendationsScalarFieldEnum[]
  }

  /**
   * AI_Recommendations create
   */
  export type AI_RecommendationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Recommendations
     */
    select?: AI_RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Recommendations
     */
    omit?: AI_RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_RecommendationsInclude<ExtArgs> | null
    /**
     * The data needed to create a AI_Recommendations.
     */
    data: XOR<AI_RecommendationsCreateInput, AI_RecommendationsUncheckedCreateInput>
  }

  /**
   * AI_Recommendations createMany
   */
  export type AI_RecommendationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AI_Recommendations.
     */
    data: AI_RecommendationsCreateManyInput | AI_RecommendationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AI_Recommendations update
   */
  export type AI_RecommendationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Recommendations
     */
    select?: AI_RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Recommendations
     */
    omit?: AI_RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_RecommendationsInclude<ExtArgs> | null
    /**
     * The data needed to update a AI_Recommendations.
     */
    data: XOR<AI_RecommendationsUpdateInput, AI_RecommendationsUncheckedUpdateInput>
    /**
     * Choose, which AI_Recommendations to update.
     */
    where: AI_RecommendationsWhereUniqueInput
  }

  /**
   * AI_Recommendations updateMany
   */
  export type AI_RecommendationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AI_Recommendations.
     */
    data: XOR<AI_RecommendationsUpdateManyMutationInput, AI_RecommendationsUncheckedUpdateManyInput>
    /**
     * Filter which AI_Recommendations to update
     */
    where?: AI_RecommendationsWhereInput
    /**
     * Limit how many AI_Recommendations to update.
     */
    limit?: number
  }

  /**
   * AI_Recommendations upsert
   */
  export type AI_RecommendationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Recommendations
     */
    select?: AI_RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Recommendations
     */
    omit?: AI_RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_RecommendationsInclude<ExtArgs> | null
    /**
     * The filter to search for the AI_Recommendations to update in case it exists.
     */
    where: AI_RecommendationsWhereUniqueInput
    /**
     * In case the AI_Recommendations found by the `where` argument doesn't exist, create a new AI_Recommendations with this data.
     */
    create: XOR<AI_RecommendationsCreateInput, AI_RecommendationsUncheckedCreateInput>
    /**
     * In case the AI_Recommendations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AI_RecommendationsUpdateInput, AI_RecommendationsUncheckedUpdateInput>
  }

  /**
   * AI_Recommendations delete
   */
  export type AI_RecommendationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Recommendations
     */
    select?: AI_RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Recommendations
     */
    omit?: AI_RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_RecommendationsInclude<ExtArgs> | null
    /**
     * Filter which AI_Recommendations to delete.
     */
    where: AI_RecommendationsWhereUniqueInput
  }

  /**
   * AI_Recommendations deleteMany
   */
  export type AI_RecommendationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AI_Recommendations to delete
     */
    where?: AI_RecommendationsWhereInput
    /**
     * Limit how many AI_Recommendations to delete.
     */
    limit?: number
  }

  /**
   * AI_Recommendations.Users
   */
  export type AI_Recommendations$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * AI_Recommendations without action
   */
  export type AI_RecommendationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI_Recommendations
     */
    select?: AI_RecommendationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI_Recommendations
     */
    omit?: AI_RecommendationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AI_RecommendationsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    isBlocked: 'isBlocked',
    preferences: 'preferences'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ToursScalarFieldEnum: {
    tour_id: 'tour_id',
    name: 'name',
    description: 'description',
    price: 'price',
    duration: 'duration',
    location: 'location',
    image_url: 'image_url',
    available_seats: 'available_seats'
  };

  export type ToursScalarFieldEnum = (typeof ToursScalarFieldEnum)[keyof typeof ToursScalarFieldEnum]


  export const Admin_LogsScalarFieldEnum: {
    log_id: 'log_id',
    admin_id: 'admin_id',
    action: 'action',
    action_date: 'action_date'
  };

  export type Admin_LogsScalarFieldEnum = (typeof Admin_LogsScalarFieldEnum)[keyof typeof Admin_LogsScalarFieldEnum]


  export const Tours_LocationScalarFieldEnum: {
    location_id: 'location_id',
    tour_id: 'tour_id',
    location_name: 'location_name',
    latitude: 'latitude',
    longitude: 'longitude',
    description: 'description'
  };

  export type Tours_LocationScalarFieldEnum = (typeof Tours_LocationScalarFieldEnum)[keyof typeof Tours_LocationScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    booking_id: 'booking_id',
    user_id: 'user_id',
    tour_id: 'tour_id',
    number_of_people: 'number_of_people',
    booking_date: 'booking_date',
    status: 'status'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


  export const ReviewImageScalarFieldEnum: {
    id: 'id',
    review_id: 'review_id',
    image_url: 'image_url'
  };

  export type ReviewImageScalarFieldEnum = (typeof ReviewImageScalarFieldEnum)[keyof typeof ReviewImageScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    review_id: 'review_id',
    user_id: 'user_id',
    tour_id: 'tour_id',
    rating: 'rating',
    comment: 'comment',
    review_date: 'review_date'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    notification_id: 'notification_id',
    user_id: 'user_id',
    message: 'message',
    notification_date: 'notification_date'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    payment_id: 'payment_id',
    booking_id: 'booking_id',
    payment_date: 'payment_date',
    amount: 'amount',
    payment_method: 'payment_method',
    status: 'status'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const HotelsScalarFieldEnum: {
    hotel_id: 'hotel_id',
    name: 'name',
    description: 'description',
    price: 'price',
    location: 'location',
    image_url: 'image_url',
    available_seats: 'available_seats'
  };

  export type HotelsScalarFieldEnum = (typeof HotelsScalarFieldEnum)[keyof typeof HotelsScalarFieldEnum]


  export const Tour_ImagesScalarFieldEnum: {
    image_id: 'image_id',
    tour_id: 'tour_id',
    image_url: 'image_url',
    image_order: 'image_order'
  };

  export type Tour_ImagesScalarFieldEnum = (typeof Tour_ImagesScalarFieldEnum)[keyof typeof Tour_ImagesScalarFieldEnum]


  export const Tour_LogsScalarFieldEnum: {
    log_id: 'log_id',
    tour_id: 'tour_id',
    action: 'action',
    action_date: 'action_date'
  };

  export type Tour_LogsScalarFieldEnum = (typeof Tour_LogsScalarFieldEnum)[keyof typeof Tour_LogsScalarFieldEnum]


  export const Tour_ItinerarysScalarFieldEnum: {
    itinerary_id: 'itinerary_id',
    tour_id: 'tour_id',
    day_number: 'day_number',
    start_time: 'start_time',
    activity: 'activity',
    location: 'location'
  };

  export type Tour_ItinerarysScalarFieldEnum = (typeof Tour_ItinerarysScalarFieldEnum)[keyof typeof Tour_ItinerarysScalarFieldEnum]


  export const Chatbot_HistoryScalarFieldEnum: {
    chat_id: 'chat_id',
    user_id: 'user_id',
    message: 'message',
    sender: 'sender',
    timestamp: 'timestamp'
  };

  export type Chatbot_HistoryScalarFieldEnum = (typeof Chatbot_HistoryScalarFieldEnum)[keyof typeof Chatbot_HistoryScalarFieldEnum]


  export const AI_RecommendationsScalarFieldEnum: {
    recommendation_id: 'recommendation_id',
    user_id: 'user_id',
    recommendation_text: 'recommendation_text',
    created_at: 'created_at'
  };

  export type AI_RecommendationsScalarFieldEnum = (typeof AI_RecommendationsScalarFieldEnum)[keyof typeof AI_RecommendationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    preferences: 'preferences'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const ToursOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    location: 'location',
    image_url: 'image_url'
  };

  export type ToursOrderByRelevanceFieldEnum = (typeof ToursOrderByRelevanceFieldEnum)[keyof typeof ToursOrderByRelevanceFieldEnum]


  export const Admin_LogsOrderByRelevanceFieldEnum: {
    action: 'action'
  };

  export type Admin_LogsOrderByRelevanceFieldEnum = (typeof Admin_LogsOrderByRelevanceFieldEnum)[keyof typeof Admin_LogsOrderByRelevanceFieldEnum]


  export const Tours_LocationOrderByRelevanceFieldEnum: {
    location_name: 'location_name',
    description: 'description'
  };

  export type Tours_LocationOrderByRelevanceFieldEnum = (typeof Tours_LocationOrderByRelevanceFieldEnum)[keyof typeof Tours_LocationOrderByRelevanceFieldEnum]


  export const BookingsOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type BookingsOrderByRelevanceFieldEnum = (typeof BookingsOrderByRelevanceFieldEnum)[keyof typeof BookingsOrderByRelevanceFieldEnum]


  export const ReviewImageOrderByRelevanceFieldEnum: {
    image_url: 'image_url'
  };

  export type ReviewImageOrderByRelevanceFieldEnum = (typeof ReviewImageOrderByRelevanceFieldEnum)[keyof typeof ReviewImageOrderByRelevanceFieldEnum]


  export const ReviewsOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type ReviewsOrderByRelevanceFieldEnum = (typeof ReviewsOrderByRelevanceFieldEnum)[keyof typeof ReviewsOrderByRelevanceFieldEnum]


  export const NotificationsOrderByRelevanceFieldEnum: {
    message: 'message'
  };

  export type NotificationsOrderByRelevanceFieldEnum = (typeof NotificationsOrderByRelevanceFieldEnum)[keyof typeof NotificationsOrderByRelevanceFieldEnum]


  export const PaymentsOrderByRelevanceFieldEnum: {
    payment_method: 'payment_method',
    status: 'status'
  };

  export type PaymentsOrderByRelevanceFieldEnum = (typeof PaymentsOrderByRelevanceFieldEnum)[keyof typeof PaymentsOrderByRelevanceFieldEnum]


  export const HotelsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    location: 'location',
    image_url: 'image_url'
  };

  export type HotelsOrderByRelevanceFieldEnum = (typeof HotelsOrderByRelevanceFieldEnum)[keyof typeof HotelsOrderByRelevanceFieldEnum]


  export const Tour_ImagesOrderByRelevanceFieldEnum: {
    image_url: 'image_url'
  };

  export type Tour_ImagesOrderByRelevanceFieldEnum = (typeof Tour_ImagesOrderByRelevanceFieldEnum)[keyof typeof Tour_ImagesOrderByRelevanceFieldEnum]


  export const Tour_LogsOrderByRelevanceFieldEnum: {
    action: 'action'
  };

  export type Tour_LogsOrderByRelevanceFieldEnum = (typeof Tour_LogsOrderByRelevanceFieldEnum)[keyof typeof Tour_LogsOrderByRelevanceFieldEnum]


  export const Tour_ItinerarysOrderByRelevanceFieldEnum: {
    activity: 'activity',
    location: 'location'
  };

  export type Tour_ItinerarysOrderByRelevanceFieldEnum = (typeof Tour_ItinerarysOrderByRelevanceFieldEnum)[keyof typeof Tour_ItinerarysOrderByRelevanceFieldEnum]


  export const Chatbot_HistoryOrderByRelevanceFieldEnum: {
    message: 'message',
    sender: 'sender'
  };

  export type Chatbot_HistoryOrderByRelevanceFieldEnum = (typeof Chatbot_HistoryOrderByRelevanceFieldEnum)[keyof typeof Chatbot_HistoryOrderByRelevanceFieldEnum]


  export const AI_RecommendationsOrderByRelevanceFieldEnum: {
    recommendation_text: 'recommendation_text'
  };

  export type AI_RecommendationsOrderByRelevanceFieldEnum = (typeof AI_RecommendationsOrderByRelevanceFieldEnum)[keyof typeof AI_RecommendationsOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    phone?: StringNullableFilter<"Users"> | string | null
    role?: StringFilter<"Users"> | string
    isBlocked?: BoolFilter<"Users"> | boolean
    preferences?: StringNullableFilter<"Users"> | string | null
    Bookings?: BookingsListRelationFilter
    Reviews?: ReviewsListRelationFilter
    Notifications?: NotificationsListRelationFilter
    Admin_Logs?: Admin_LogsListRelationFilter
    AI_Recommendations?: AI_RecommendationsListRelationFilter
    Chatbot_History?: Chatbot_HistoryListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    preferences?: SortOrderInput | SortOrder
    Bookings?: BookingsOrderByRelationAggregateInput
    Reviews?: ReviewsOrderByRelationAggregateInput
    Notifications?: NotificationsOrderByRelationAggregateInput
    Admin_Logs?: Admin_LogsOrderByRelationAggregateInput
    AI_Recommendations?: AI_RecommendationsOrderByRelationAggregateInput
    Chatbot_History?: Chatbot_HistoryOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    phone?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    isBlocked?: BoolFilter<"Users"> | boolean
    preferences?: StringNullableFilter<"Users"> | string | null
    Bookings?: BookingsListRelationFilter
    Reviews?: ReviewsListRelationFilter
    Notifications?: NotificationsListRelationFilter
    Admin_Logs?: Admin_LogsListRelationFilter
    AI_Recommendations?: AI_RecommendationsListRelationFilter
    Chatbot_History?: Chatbot_HistoryListRelationFilter
  }, "user_id" | "email" | "phone">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    preferences?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: StringWithAggregatesFilter<"Users"> | string
    isBlocked?: BoolWithAggregatesFilter<"Users"> | boolean
    preferences?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type ToursWhereInput = {
    AND?: ToursWhereInput | ToursWhereInput[]
    OR?: ToursWhereInput[]
    NOT?: ToursWhereInput | ToursWhereInput[]
    tour_id?: IntFilter<"Tours"> | number
    name?: StringFilter<"Tours"> | string
    description?: StringNullableFilter<"Tours"> | string | null
    price?: DecimalFilter<"Tours"> | Decimal | DecimalJsLike | number | string
    duration?: IntFilter<"Tours"> | number
    location?: StringFilter<"Tours"> | string
    image_url?: StringNullableFilter<"Tours"> | string | null
    available_seats?: IntFilter<"Tours"> | number
    locations?: Tours_LocationListRelationFilter
    Bookings?: BookingsListRelationFilter
    Reviews?: ReviewsListRelationFilter
    Tour_Images?: Tour_ImagesListRelationFilter
    Tour_Logs?: Tour_LogsListRelationFilter
    Tour_Itinerarys?: Tour_ItinerarysListRelationFilter
  }

  export type ToursOrderByWithRelationInput = {
    tour_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    image_url?: SortOrderInput | SortOrder
    available_seats?: SortOrder
    locations?: Tours_LocationOrderByRelationAggregateInput
    Bookings?: BookingsOrderByRelationAggregateInput
    Reviews?: ReviewsOrderByRelationAggregateInput
    Tour_Images?: Tour_ImagesOrderByRelationAggregateInput
    Tour_Logs?: Tour_LogsOrderByRelationAggregateInput
    Tour_Itinerarys?: Tour_ItinerarysOrderByRelationAggregateInput
    _relevance?: ToursOrderByRelevanceInput
  }

  export type ToursWhereUniqueInput = Prisma.AtLeast<{
    tour_id?: number
    AND?: ToursWhereInput | ToursWhereInput[]
    OR?: ToursWhereInput[]
    NOT?: ToursWhereInput | ToursWhereInput[]
    name?: StringFilter<"Tours"> | string
    description?: StringNullableFilter<"Tours"> | string | null
    price?: DecimalFilter<"Tours"> | Decimal | DecimalJsLike | number | string
    duration?: IntFilter<"Tours"> | number
    location?: StringFilter<"Tours"> | string
    image_url?: StringNullableFilter<"Tours"> | string | null
    available_seats?: IntFilter<"Tours"> | number
    locations?: Tours_LocationListRelationFilter
    Bookings?: BookingsListRelationFilter
    Reviews?: ReviewsListRelationFilter
    Tour_Images?: Tour_ImagesListRelationFilter
    Tour_Logs?: Tour_LogsListRelationFilter
    Tour_Itinerarys?: Tour_ItinerarysListRelationFilter
  }, "tour_id">

  export type ToursOrderByWithAggregationInput = {
    tour_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    image_url?: SortOrderInput | SortOrder
    available_seats?: SortOrder
    _count?: ToursCountOrderByAggregateInput
    _avg?: ToursAvgOrderByAggregateInput
    _max?: ToursMaxOrderByAggregateInput
    _min?: ToursMinOrderByAggregateInput
    _sum?: ToursSumOrderByAggregateInput
  }

  export type ToursScalarWhereWithAggregatesInput = {
    AND?: ToursScalarWhereWithAggregatesInput | ToursScalarWhereWithAggregatesInput[]
    OR?: ToursScalarWhereWithAggregatesInput[]
    NOT?: ToursScalarWhereWithAggregatesInput | ToursScalarWhereWithAggregatesInput[]
    tour_id?: IntWithAggregatesFilter<"Tours"> | number
    name?: StringWithAggregatesFilter<"Tours"> | string
    description?: StringNullableWithAggregatesFilter<"Tours"> | string | null
    price?: DecimalWithAggregatesFilter<"Tours"> | Decimal | DecimalJsLike | number | string
    duration?: IntWithAggregatesFilter<"Tours"> | number
    location?: StringWithAggregatesFilter<"Tours"> | string
    image_url?: StringNullableWithAggregatesFilter<"Tours"> | string | null
    available_seats?: IntWithAggregatesFilter<"Tours"> | number
  }

  export type Admin_LogsWhereInput = {
    AND?: Admin_LogsWhereInput | Admin_LogsWhereInput[]
    OR?: Admin_LogsWhereInput[]
    NOT?: Admin_LogsWhereInput | Admin_LogsWhereInput[]
    log_id?: IntFilter<"Admin_Logs"> | number
    admin_id?: IntFilter<"Admin_Logs"> | number
    action?: StringFilter<"Admin_Logs"> | string
    action_date?: DateTimeFilter<"Admin_Logs"> | Date | string
    admin?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type Admin_LogsOrderByWithRelationInput = {
    log_id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    action_date?: SortOrder
    admin?: UsersOrderByWithRelationInput
    _relevance?: Admin_LogsOrderByRelevanceInput
  }

  export type Admin_LogsWhereUniqueInput = Prisma.AtLeast<{
    log_id?: number
    AND?: Admin_LogsWhereInput | Admin_LogsWhereInput[]
    OR?: Admin_LogsWhereInput[]
    NOT?: Admin_LogsWhereInput | Admin_LogsWhereInput[]
    admin_id?: IntFilter<"Admin_Logs"> | number
    action?: StringFilter<"Admin_Logs"> | string
    action_date?: DateTimeFilter<"Admin_Logs"> | Date | string
    admin?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "log_id">

  export type Admin_LogsOrderByWithAggregationInput = {
    log_id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    action_date?: SortOrder
    _count?: Admin_LogsCountOrderByAggregateInput
    _avg?: Admin_LogsAvgOrderByAggregateInput
    _max?: Admin_LogsMaxOrderByAggregateInput
    _min?: Admin_LogsMinOrderByAggregateInput
    _sum?: Admin_LogsSumOrderByAggregateInput
  }

  export type Admin_LogsScalarWhereWithAggregatesInput = {
    AND?: Admin_LogsScalarWhereWithAggregatesInput | Admin_LogsScalarWhereWithAggregatesInput[]
    OR?: Admin_LogsScalarWhereWithAggregatesInput[]
    NOT?: Admin_LogsScalarWhereWithAggregatesInput | Admin_LogsScalarWhereWithAggregatesInput[]
    log_id?: IntWithAggregatesFilter<"Admin_Logs"> | number
    admin_id?: IntWithAggregatesFilter<"Admin_Logs"> | number
    action?: StringWithAggregatesFilter<"Admin_Logs"> | string
    action_date?: DateTimeWithAggregatesFilter<"Admin_Logs"> | Date | string
  }

  export type Tours_LocationWhereInput = {
    AND?: Tours_LocationWhereInput | Tours_LocationWhereInput[]
    OR?: Tours_LocationWhereInput[]
    NOT?: Tours_LocationWhereInput | Tours_LocationWhereInput[]
    location_id?: IntFilter<"Tours_Location"> | number
    tour_id?: IntFilter<"Tours_Location"> | number
    location_name?: StringFilter<"Tours_Location"> | string
    latitude?: DecimalFilter<"Tours_Location"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Tours_Location"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Tours_Location"> | string | null
    Tours?: XOR<ToursScalarRelationFilter, ToursWhereInput>
  }

  export type Tours_LocationOrderByWithRelationInput = {
    location_id?: SortOrder
    tour_id?: SortOrder
    location_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrderInput | SortOrder
    Tours?: ToursOrderByWithRelationInput
    _relevance?: Tours_LocationOrderByRelevanceInput
  }

  export type Tours_LocationWhereUniqueInput = Prisma.AtLeast<{
    location_id?: number
    AND?: Tours_LocationWhereInput | Tours_LocationWhereInput[]
    OR?: Tours_LocationWhereInput[]
    NOT?: Tours_LocationWhereInput | Tours_LocationWhereInput[]
    tour_id?: IntFilter<"Tours_Location"> | number
    location_name?: StringFilter<"Tours_Location"> | string
    latitude?: DecimalFilter<"Tours_Location"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Tours_Location"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Tours_Location"> | string | null
    Tours?: XOR<ToursScalarRelationFilter, ToursWhereInput>
  }, "location_id">

  export type Tours_LocationOrderByWithAggregationInput = {
    location_id?: SortOrder
    tour_id?: SortOrder
    location_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: Tours_LocationCountOrderByAggregateInput
    _avg?: Tours_LocationAvgOrderByAggregateInput
    _max?: Tours_LocationMaxOrderByAggregateInput
    _min?: Tours_LocationMinOrderByAggregateInput
    _sum?: Tours_LocationSumOrderByAggregateInput
  }

  export type Tours_LocationScalarWhereWithAggregatesInput = {
    AND?: Tours_LocationScalarWhereWithAggregatesInput | Tours_LocationScalarWhereWithAggregatesInput[]
    OR?: Tours_LocationScalarWhereWithAggregatesInput[]
    NOT?: Tours_LocationScalarWhereWithAggregatesInput | Tours_LocationScalarWhereWithAggregatesInput[]
    location_id?: IntWithAggregatesFilter<"Tours_Location"> | number
    tour_id?: IntWithAggregatesFilter<"Tours_Location"> | number
    location_name?: StringWithAggregatesFilter<"Tours_Location"> | string
    latitude?: DecimalWithAggregatesFilter<"Tours_Location"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Tours_Location"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"Tours_Location"> | string | null
  }

  export type BookingsWhereInput = {
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    booking_id?: IntFilter<"Bookings"> | number
    user_id?: IntFilter<"Bookings"> | number
    tour_id?: IntFilter<"Bookings"> | number
    number_of_people?: IntFilter<"Bookings"> | number
    booking_date?: DateTimeFilter<"Bookings"> | Date | string
    status?: StringFilter<"Bookings"> | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Tours?: XOR<ToursScalarRelationFilter, ToursWhereInput>
    Payments?: PaymentsListRelationFilter
  }

  export type BookingsOrderByWithRelationInput = {
    booking_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    number_of_people?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Tours?: ToursOrderByWithRelationInput
    Payments?: PaymentsOrderByRelationAggregateInput
    _relevance?: BookingsOrderByRelevanceInput
  }

  export type BookingsWhereUniqueInput = Prisma.AtLeast<{
    booking_id?: number
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    user_id?: IntFilter<"Bookings"> | number
    tour_id?: IntFilter<"Bookings"> | number
    number_of_people?: IntFilter<"Bookings"> | number
    booking_date?: DateTimeFilter<"Bookings"> | Date | string
    status?: StringFilter<"Bookings"> | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Tours?: XOR<ToursScalarRelationFilter, ToursWhereInput>
    Payments?: PaymentsListRelationFilter
  }, "booking_id">

  export type BookingsOrderByWithAggregationInput = {
    booking_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    number_of_people?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
    _count?: BookingsCountOrderByAggregateInput
    _avg?: BookingsAvgOrderByAggregateInput
    _max?: BookingsMaxOrderByAggregateInput
    _min?: BookingsMinOrderByAggregateInput
    _sum?: BookingsSumOrderByAggregateInput
  }

  export type BookingsScalarWhereWithAggregatesInput = {
    AND?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    OR?: BookingsScalarWhereWithAggregatesInput[]
    NOT?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    booking_id?: IntWithAggregatesFilter<"Bookings"> | number
    user_id?: IntWithAggregatesFilter<"Bookings"> | number
    tour_id?: IntWithAggregatesFilter<"Bookings"> | number
    number_of_people?: IntWithAggregatesFilter<"Bookings"> | number
    booking_date?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    status?: StringWithAggregatesFilter<"Bookings"> | string
  }

  export type ReviewImageWhereInput = {
    AND?: ReviewImageWhereInput | ReviewImageWhereInput[]
    OR?: ReviewImageWhereInput[]
    NOT?: ReviewImageWhereInput | ReviewImageWhereInput[]
    id?: IntFilter<"ReviewImage"> | number
    review_id?: IntFilter<"ReviewImage"> | number
    image_url?: StringFilter<"ReviewImage"> | string
    Reviews?: XOR<ReviewsScalarRelationFilter, ReviewsWhereInput>
  }

  export type ReviewImageOrderByWithRelationInput = {
    id?: SortOrder
    review_id?: SortOrder
    image_url?: SortOrder
    Reviews?: ReviewsOrderByWithRelationInput
    _relevance?: ReviewImageOrderByRelevanceInput
  }

  export type ReviewImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewImageWhereInput | ReviewImageWhereInput[]
    OR?: ReviewImageWhereInput[]
    NOT?: ReviewImageWhereInput | ReviewImageWhereInput[]
    review_id?: IntFilter<"ReviewImage"> | number
    image_url?: StringFilter<"ReviewImage"> | string
    Reviews?: XOR<ReviewsScalarRelationFilter, ReviewsWhereInput>
  }, "id">

  export type ReviewImageOrderByWithAggregationInput = {
    id?: SortOrder
    review_id?: SortOrder
    image_url?: SortOrder
    _count?: ReviewImageCountOrderByAggregateInput
    _avg?: ReviewImageAvgOrderByAggregateInput
    _max?: ReviewImageMaxOrderByAggregateInput
    _min?: ReviewImageMinOrderByAggregateInput
    _sum?: ReviewImageSumOrderByAggregateInput
  }

  export type ReviewImageScalarWhereWithAggregatesInput = {
    AND?: ReviewImageScalarWhereWithAggregatesInput | ReviewImageScalarWhereWithAggregatesInput[]
    OR?: ReviewImageScalarWhereWithAggregatesInput[]
    NOT?: ReviewImageScalarWhereWithAggregatesInput | ReviewImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReviewImage"> | number
    review_id?: IntWithAggregatesFilter<"ReviewImage"> | number
    image_url?: StringWithAggregatesFilter<"ReviewImage"> | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    review_id?: IntFilter<"Reviews"> | number
    user_id?: IntFilter<"Reviews"> | number
    tour_id?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    comment?: StringNullableFilter<"Reviews"> | string | null
    review_date?: DateTimeFilter<"Reviews"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Tours?: XOR<ToursScalarRelationFilter, ToursWhereInput>
    ReviewImages?: ReviewImageListRelationFilter
  }

  export type ReviewsOrderByWithRelationInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    review_date?: SortOrder
    Users?: UsersOrderByWithRelationInput
    Tours?: ToursOrderByWithRelationInput
    ReviewImages?: ReviewImageOrderByRelationAggregateInput
    _relevance?: ReviewsOrderByRelevanceInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    user_id?: IntFilter<"Reviews"> | number
    tour_id?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    comment?: StringNullableFilter<"Reviews"> | string | null
    review_date?: DateTimeFilter<"Reviews"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Tours?: XOR<ToursScalarRelationFilter, ToursWhereInput>
    ReviewImages?: ReviewImageListRelationFilter
  }, "review_id">

  export type ReviewsOrderByWithAggregationInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    review_date?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"Reviews"> | number
    user_id?: IntWithAggregatesFilter<"Reviews"> | number
    tour_id?: IntWithAggregatesFilter<"Reviews"> | number
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    comment?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    review_date?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    notification_id?: IntFilter<"Notifications"> | number
    user_id?: IntFilter<"Notifications"> | number
    message?: StringFilter<"Notifications"> | string
    notification_date?: DateTimeFilter<"Notifications"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type NotificationsOrderByWithRelationInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    notification_date?: SortOrder
    users?: UsersOrderByWithRelationInput
    _relevance?: NotificationsOrderByRelevanceInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    notification_id?: number
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    user_id?: IntFilter<"Notifications"> | number
    message?: StringFilter<"Notifications"> | string
    notification_date?: DateTimeFilter<"Notifications"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "notification_id">

  export type NotificationsOrderByWithAggregationInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    notification_date?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _avg?: NotificationsAvgOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
    _sum?: NotificationsSumOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    notification_id?: IntWithAggregatesFilter<"Notifications"> | number
    user_id?: IntWithAggregatesFilter<"Notifications"> | number
    message?: StringWithAggregatesFilter<"Notifications"> | string
    notification_date?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    payment_id?: IntFilter<"Payments"> | number
    booking_id?: IntFilter<"Payments"> | number
    payment_date?: DateTimeFilter<"Payments"> | Date | string
    amount?: DecimalFilter<"Payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringFilter<"Payments"> | string
    status?: StringFilter<"Payments"> | string
    bookings?: XOR<BookingsScalarRelationFilter, BookingsWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    payment_date?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
    bookings?: BookingsOrderByWithRelationInput
    _relevance?: PaymentsOrderByRelevanceInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    booking_id?: IntFilter<"Payments"> | number
    payment_date?: DateTimeFilter<"Payments"> | Date | string
    amount?: DecimalFilter<"Payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringFilter<"Payments"> | string
    status?: StringFilter<"Payments"> | string
    bookings?: XOR<BookingsScalarRelationFilter, BookingsWhereInput>
  }, "payment_id">

  export type PaymentsOrderByWithAggregationInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    payment_date?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"Payments"> | number
    booking_id?: IntWithAggregatesFilter<"Payments"> | number
    payment_date?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    amount?: DecimalWithAggregatesFilter<"Payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringWithAggregatesFilter<"Payments"> | string
    status?: StringWithAggregatesFilter<"Payments"> | string
  }

  export type HotelsWhereInput = {
    AND?: HotelsWhereInput | HotelsWhereInput[]
    OR?: HotelsWhereInput[]
    NOT?: HotelsWhereInput | HotelsWhereInput[]
    hotel_id?: IntFilter<"Hotels"> | number
    name?: StringFilter<"Hotels"> | string
    description?: StringNullableFilter<"Hotels"> | string | null
    price?: DecimalFilter<"Hotels"> | Decimal | DecimalJsLike | number | string
    location?: StringFilter<"Hotels"> | string
    image_url?: StringNullableFilter<"Hotels"> | string | null
    available_seats?: IntFilter<"Hotels"> | number
  }

  export type HotelsOrderByWithRelationInput = {
    hotel_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    location?: SortOrder
    image_url?: SortOrderInput | SortOrder
    available_seats?: SortOrder
    _relevance?: HotelsOrderByRelevanceInput
  }

  export type HotelsWhereUniqueInput = Prisma.AtLeast<{
    hotel_id?: number
    AND?: HotelsWhereInput | HotelsWhereInput[]
    OR?: HotelsWhereInput[]
    NOT?: HotelsWhereInput | HotelsWhereInput[]
    name?: StringFilter<"Hotels"> | string
    description?: StringNullableFilter<"Hotels"> | string | null
    price?: DecimalFilter<"Hotels"> | Decimal | DecimalJsLike | number | string
    location?: StringFilter<"Hotels"> | string
    image_url?: StringNullableFilter<"Hotels"> | string | null
    available_seats?: IntFilter<"Hotels"> | number
  }, "hotel_id">

  export type HotelsOrderByWithAggregationInput = {
    hotel_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    location?: SortOrder
    image_url?: SortOrderInput | SortOrder
    available_seats?: SortOrder
    _count?: HotelsCountOrderByAggregateInput
    _avg?: HotelsAvgOrderByAggregateInput
    _max?: HotelsMaxOrderByAggregateInput
    _min?: HotelsMinOrderByAggregateInput
    _sum?: HotelsSumOrderByAggregateInput
  }

  export type HotelsScalarWhereWithAggregatesInput = {
    AND?: HotelsScalarWhereWithAggregatesInput | HotelsScalarWhereWithAggregatesInput[]
    OR?: HotelsScalarWhereWithAggregatesInput[]
    NOT?: HotelsScalarWhereWithAggregatesInput | HotelsScalarWhereWithAggregatesInput[]
    hotel_id?: IntWithAggregatesFilter<"Hotels"> | number
    name?: StringWithAggregatesFilter<"Hotels"> | string
    description?: StringNullableWithAggregatesFilter<"Hotels"> | string | null
    price?: DecimalWithAggregatesFilter<"Hotels"> | Decimal | DecimalJsLike | number | string
    location?: StringWithAggregatesFilter<"Hotels"> | string
    image_url?: StringNullableWithAggregatesFilter<"Hotels"> | string | null
    available_seats?: IntWithAggregatesFilter<"Hotels"> | number
  }

  export type Tour_ImagesWhereInput = {
    AND?: Tour_ImagesWhereInput | Tour_ImagesWhereInput[]
    OR?: Tour_ImagesWhereInput[]
    NOT?: Tour_ImagesWhereInput | Tour_ImagesWhereInput[]
    image_id?: IntFilter<"Tour_Images"> | number
    tour_id?: IntFilter<"Tour_Images"> | number
    image_url?: StringFilter<"Tour_Images"> | string
    image_order?: IntFilter<"Tour_Images"> | number
    tours?: XOR<ToursScalarRelationFilter, ToursWhereInput>
  }

  export type Tour_ImagesOrderByWithRelationInput = {
    image_id?: SortOrder
    tour_id?: SortOrder
    image_url?: SortOrder
    image_order?: SortOrder
    tours?: ToursOrderByWithRelationInput
    _relevance?: Tour_ImagesOrderByRelevanceInput
  }

  export type Tour_ImagesWhereUniqueInput = Prisma.AtLeast<{
    image_id?: number
    AND?: Tour_ImagesWhereInput | Tour_ImagesWhereInput[]
    OR?: Tour_ImagesWhereInput[]
    NOT?: Tour_ImagesWhereInput | Tour_ImagesWhereInput[]
    tour_id?: IntFilter<"Tour_Images"> | number
    image_url?: StringFilter<"Tour_Images"> | string
    image_order?: IntFilter<"Tour_Images"> | number
    tours?: XOR<ToursScalarRelationFilter, ToursWhereInput>
  }, "image_id">

  export type Tour_ImagesOrderByWithAggregationInput = {
    image_id?: SortOrder
    tour_id?: SortOrder
    image_url?: SortOrder
    image_order?: SortOrder
    _count?: Tour_ImagesCountOrderByAggregateInput
    _avg?: Tour_ImagesAvgOrderByAggregateInput
    _max?: Tour_ImagesMaxOrderByAggregateInput
    _min?: Tour_ImagesMinOrderByAggregateInput
    _sum?: Tour_ImagesSumOrderByAggregateInput
  }

  export type Tour_ImagesScalarWhereWithAggregatesInput = {
    AND?: Tour_ImagesScalarWhereWithAggregatesInput | Tour_ImagesScalarWhereWithAggregatesInput[]
    OR?: Tour_ImagesScalarWhereWithAggregatesInput[]
    NOT?: Tour_ImagesScalarWhereWithAggregatesInput | Tour_ImagesScalarWhereWithAggregatesInput[]
    image_id?: IntWithAggregatesFilter<"Tour_Images"> | number
    tour_id?: IntWithAggregatesFilter<"Tour_Images"> | number
    image_url?: StringWithAggregatesFilter<"Tour_Images"> | string
    image_order?: IntWithAggregatesFilter<"Tour_Images"> | number
  }

  export type Tour_LogsWhereInput = {
    AND?: Tour_LogsWhereInput | Tour_LogsWhereInput[]
    OR?: Tour_LogsWhereInput[]
    NOT?: Tour_LogsWhereInput | Tour_LogsWhereInput[]
    log_id?: IntFilter<"Tour_Logs"> | number
    tour_id?: IntFilter<"Tour_Logs"> | number
    action?: StringFilter<"Tour_Logs"> | string
    action_date?: DateTimeFilter<"Tour_Logs"> | Date | string
    tours?: XOR<ToursScalarRelationFilter, ToursWhereInput>
  }

  export type Tour_LogsOrderByWithRelationInput = {
    log_id?: SortOrder
    tour_id?: SortOrder
    action?: SortOrder
    action_date?: SortOrder
    tours?: ToursOrderByWithRelationInput
    _relevance?: Tour_LogsOrderByRelevanceInput
  }

  export type Tour_LogsWhereUniqueInput = Prisma.AtLeast<{
    log_id?: number
    AND?: Tour_LogsWhereInput | Tour_LogsWhereInput[]
    OR?: Tour_LogsWhereInput[]
    NOT?: Tour_LogsWhereInput | Tour_LogsWhereInput[]
    tour_id?: IntFilter<"Tour_Logs"> | number
    action?: StringFilter<"Tour_Logs"> | string
    action_date?: DateTimeFilter<"Tour_Logs"> | Date | string
    tours?: XOR<ToursScalarRelationFilter, ToursWhereInput>
  }, "log_id">

  export type Tour_LogsOrderByWithAggregationInput = {
    log_id?: SortOrder
    tour_id?: SortOrder
    action?: SortOrder
    action_date?: SortOrder
    _count?: Tour_LogsCountOrderByAggregateInput
    _avg?: Tour_LogsAvgOrderByAggregateInput
    _max?: Tour_LogsMaxOrderByAggregateInput
    _min?: Tour_LogsMinOrderByAggregateInput
    _sum?: Tour_LogsSumOrderByAggregateInput
  }

  export type Tour_LogsScalarWhereWithAggregatesInput = {
    AND?: Tour_LogsScalarWhereWithAggregatesInput | Tour_LogsScalarWhereWithAggregatesInput[]
    OR?: Tour_LogsScalarWhereWithAggregatesInput[]
    NOT?: Tour_LogsScalarWhereWithAggregatesInput | Tour_LogsScalarWhereWithAggregatesInput[]
    log_id?: IntWithAggregatesFilter<"Tour_Logs"> | number
    tour_id?: IntWithAggregatesFilter<"Tour_Logs"> | number
    action?: StringWithAggregatesFilter<"Tour_Logs"> | string
    action_date?: DateTimeWithAggregatesFilter<"Tour_Logs"> | Date | string
  }

  export type Tour_ItinerarysWhereInput = {
    AND?: Tour_ItinerarysWhereInput | Tour_ItinerarysWhereInput[]
    OR?: Tour_ItinerarysWhereInput[]
    NOT?: Tour_ItinerarysWhereInput | Tour_ItinerarysWhereInput[]
    itinerary_id?: IntFilter<"Tour_Itinerarys"> | number
    tour_id?: IntFilter<"Tour_Itinerarys"> | number
    day_number?: IntFilter<"Tour_Itinerarys"> | number
    start_time?: DateTimeNullableFilter<"Tour_Itinerarys"> | Date | string | null
    activity?: StringNullableFilter<"Tour_Itinerarys"> | string | null
    location?: StringNullableFilter<"Tour_Itinerarys"> | string | null
    tours?: XOR<ToursScalarRelationFilter, ToursWhereInput>
  }

  export type Tour_ItinerarysOrderByWithRelationInput = {
    itinerary_id?: SortOrder
    tour_id?: SortOrder
    day_number?: SortOrder
    start_time?: SortOrderInput | SortOrder
    activity?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    tours?: ToursOrderByWithRelationInput
    _relevance?: Tour_ItinerarysOrderByRelevanceInput
  }

  export type Tour_ItinerarysWhereUniqueInput = Prisma.AtLeast<{
    itinerary_id?: number
    AND?: Tour_ItinerarysWhereInput | Tour_ItinerarysWhereInput[]
    OR?: Tour_ItinerarysWhereInput[]
    NOT?: Tour_ItinerarysWhereInput | Tour_ItinerarysWhereInput[]
    tour_id?: IntFilter<"Tour_Itinerarys"> | number
    day_number?: IntFilter<"Tour_Itinerarys"> | number
    start_time?: DateTimeNullableFilter<"Tour_Itinerarys"> | Date | string | null
    activity?: StringNullableFilter<"Tour_Itinerarys"> | string | null
    location?: StringNullableFilter<"Tour_Itinerarys"> | string | null
    tours?: XOR<ToursScalarRelationFilter, ToursWhereInput>
  }, "itinerary_id">

  export type Tour_ItinerarysOrderByWithAggregationInput = {
    itinerary_id?: SortOrder
    tour_id?: SortOrder
    day_number?: SortOrder
    start_time?: SortOrderInput | SortOrder
    activity?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    _count?: Tour_ItinerarysCountOrderByAggregateInput
    _avg?: Tour_ItinerarysAvgOrderByAggregateInput
    _max?: Tour_ItinerarysMaxOrderByAggregateInput
    _min?: Tour_ItinerarysMinOrderByAggregateInput
    _sum?: Tour_ItinerarysSumOrderByAggregateInput
  }

  export type Tour_ItinerarysScalarWhereWithAggregatesInput = {
    AND?: Tour_ItinerarysScalarWhereWithAggregatesInput | Tour_ItinerarysScalarWhereWithAggregatesInput[]
    OR?: Tour_ItinerarysScalarWhereWithAggregatesInput[]
    NOT?: Tour_ItinerarysScalarWhereWithAggregatesInput | Tour_ItinerarysScalarWhereWithAggregatesInput[]
    itinerary_id?: IntWithAggregatesFilter<"Tour_Itinerarys"> | number
    tour_id?: IntWithAggregatesFilter<"Tour_Itinerarys"> | number
    day_number?: IntWithAggregatesFilter<"Tour_Itinerarys"> | number
    start_time?: DateTimeNullableWithAggregatesFilter<"Tour_Itinerarys"> | Date | string | null
    activity?: StringNullableWithAggregatesFilter<"Tour_Itinerarys"> | string | null
    location?: StringNullableWithAggregatesFilter<"Tour_Itinerarys"> | string | null
  }

  export type Chatbot_HistoryWhereInput = {
    AND?: Chatbot_HistoryWhereInput | Chatbot_HistoryWhereInput[]
    OR?: Chatbot_HistoryWhereInput[]
    NOT?: Chatbot_HistoryWhereInput | Chatbot_HistoryWhereInput[]
    chat_id?: IntFilter<"Chatbot_History"> | number
    user_id?: IntNullableFilter<"Chatbot_History"> | number | null
    message?: StringFilter<"Chatbot_History"> | string
    sender?: StringFilter<"Chatbot_History"> | string
    timestamp?: DateTimeFilter<"Chatbot_History"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type Chatbot_HistoryOrderByWithRelationInput = {
    chat_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    message?: SortOrder
    sender?: SortOrder
    timestamp?: SortOrder
    Users?: UsersOrderByWithRelationInput
    _relevance?: Chatbot_HistoryOrderByRelevanceInput
  }

  export type Chatbot_HistoryWhereUniqueInput = Prisma.AtLeast<{
    chat_id?: number
    AND?: Chatbot_HistoryWhereInput | Chatbot_HistoryWhereInput[]
    OR?: Chatbot_HistoryWhereInput[]
    NOT?: Chatbot_HistoryWhereInput | Chatbot_HistoryWhereInput[]
    user_id?: IntNullableFilter<"Chatbot_History"> | number | null
    message?: StringFilter<"Chatbot_History"> | string
    sender?: StringFilter<"Chatbot_History"> | string
    timestamp?: DateTimeFilter<"Chatbot_History"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "chat_id">

  export type Chatbot_HistoryOrderByWithAggregationInput = {
    chat_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    message?: SortOrder
    sender?: SortOrder
    timestamp?: SortOrder
    _count?: Chatbot_HistoryCountOrderByAggregateInput
    _avg?: Chatbot_HistoryAvgOrderByAggregateInput
    _max?: Chatbot_HistoryMaxOrderByAggregateInput
    _min?: Chatbot_HistoryMinOrderByAggregateInput
    _sum?: Chatbot_HistorySumOrderByAggregateInput
  }

  export type Chatbot_HistoryScalarWhereWithAggregatesInput = {
    AND?: Chatbot_HistoryScalarWhereWithAggregatesInput | Chatbot_HistoryScalarWhereWithAggregatesInput[]
    OR?: Chatbot_HistoryScalarWhereWithAggregatesInput[]
    NOT?: Chatbot_HistoryScalarWhereWithAggregatesInput | Chatbot_HistoryScalarWhereWithAggregatesInput[]
    chat_id?: IntWithAggregatesFilter<"Chatbot_History"> | number
    user_id?: IntNullableWithAggregatesFilter<"Chatbot_History"> | number | null
    message?: StringWithAggregatesFilter<"Chatbot_History"> | string
    sender?: StringWithAggregatesFilter<"Chatbot_History"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Chatbot_History"> | Date | string
  }

  export type AI_RecommendationsWhereInput = {
    AND?: AI_RecommendationsWhereInput | AI_RecommendationsWhereInput[]
    OR?: AI_RecommendationsWhereInput[]
    NOT?: AI_RecommendationsWhereInput | AI_RecommendationsWhereInput[]
    recommendation_id?: IntFilter<"AI_Recommendations"> | number
    user_id?: IntNullableFilter<"AI_Recommendations"> | number | null
    recommendation_text?: StringFilter<"AI_Recommendations"> | string
    created_at?: DateTimeFilter<"AI_Recommendations"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type AI_RecommendationsOrderByWithRelationInput = {
    recommendation_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    recommendation_text?: SortOrder
    created_at?: SortOrder
    Users?: UsersOrderByWithRelationInput
    _relevance?: AI_RecommendationsOrderByRelevanceInput
  }

  export type AI_RecommendationsWhereUniqueInput = Prisma.AtLeast<{
    recommendation_id?: number
    AND?: AI_RecommendationsWhereInput | AI_RecommendationsWhereInput[]
    OR?: AI_RecommendationsWhereInput[]
    NOT?: AI_RecommendationsWhereInput | AI_RecommendationsWhereInput[]
    user_id?: IntNullableFilter<"AI_Recommendations"> | number | null
    recommendation_text?: StringFilter<"AI_Recommendations"> | string
    created_at?: DateTimeFilter<"AI_Recommendations"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "recommendation_id">

  export type AI_RecommendationsOrderByWithAggregationInput = {
    recommendation_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    recommendation_text?: SortOrder
    created_at?: SortOrder
    _count?: AI_RecommendationsCountOrderByAggregateInput
    _avg?: AI_RecommendationsAvgOrderByAggregateInput
    _max?: AI_RecommendationsMaxOrderByAggregateInput
    _min?: AI_RecommendationsMinOrderByAggregateInput
    _sum?: AI_RecommendationsSumOrderByAggregateInput
  }

  export type AI_RecommendationsScalarWhereWithAggregatesInput = {
    AND?: AI_RecommendationsScalarWhereWithAggregatesInput | AI_RecommendationsScalarWhereWithAggregatesInput[]
    OR?: AI_RecommendationsScalarWhereWithAggregatesInput[]
    NOT?: AI_RecommendationsScalarWhereWithAggregatesInput | AI_RecommendationsScalarWhereWithAggregatesInput[]
    recommendation_id?: IntWithAggregatesFilter<"AI_Recommendations"> | number
    user_id?: IntNullableWithAggregatesFilter<"AI_Recommendations"> | number | null
    recommendation_text?: StringWithAggregatesFilter<"AI_Recommendations"> | string
    created_at?: DateTimeWithAggregatesFilter<"AI_Recommendations"> | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Bookings?: BookingsCreateNestedManyWithoutUsersInput
    Reviews?: ReviewsCreateNestedManyWithoutUsersInput
    Notifications?: NotificationsCreateNestedManyWithoutUsersInput
    Admin_Logs?: Admin_LogsCreateNestedManyWithoutAdminInput
    AI_Recommendations?: AI_RecommendationsCreateNestedManyWithoutUsersInput
    Chatbot_History?: Chatbot_HistoryCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Bookings?: BookingsUncheckedCreateNestedManyWithoutUsersInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
    Notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    Admin_Logs?: Admin_LogsUncheckedCreateNestedManyWithoutAdminInput
    AI_Recommendations?: AI_RecommendationsUncheckedCreateNestedManyWithoutUsersInput
    Chatbot_History?: Chatbot_HistoryUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Bookings?: BookingsUpdateManyWithoutUsersNestedInput
    Reviews?: ReviewsUpdateManyWithoutUsersNestedInput
    Notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    Admin_Logs?: Admin_LogsUpdateManyWithoutAdminNestedInput
    AI_Recommendations?: AI_RecommendationsUpdateManyWithoutUsersNestedInput
    Chatbot_History?: Chatbot_HistoryUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Bookings?: BookingsUncheckedUpdateManyWithoutUsersNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
    Notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    Admin_Logs?: Admin_LogsUncheckedUpdateManyWithoutAdminNestedInput
    AI_Recommendations?: AI_RecommendationsUncheckedUpdateManyWithoutUsersNestedInput
    Chatbot_History?: Chatbot_HistoryUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ToursCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    locations?: Tours_LocationCreateNestedManyWithoutToursInput
    Bookings?: BookingsCreateNestedManyWithoutToursInput
    Reviews?: ReviewsCreateNestedManyWithoutToursInput
    Tour_Images?: Tour_ImagesCreateNestedManyWithoutToursInput
    Tour_Logs?: Tour_LogsCreateNestedManyWithoutToursInput
    Tour_Itinerarys?: Tour_ItinerarysCreateNestedManyWithoutToursInput
  }

  export type ToursUncheckedCreateInput = {
    tour_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    locations?: Tours_LocationUncheckedCreateNestedManyWithoutToursInput
    Bookings?: BookingsUncheckedCreateNestedManyWithoutToursInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutToursInput
    Tour_Images?: Tour_ImagesUncheckedCreateNestedManyWithoutToursInput
    Tour_Logs?: Tour_LogsUncheckedCreateNestedManyWithoutToursInput
    Tour_Itinerarys?: Tour_ItinerarysUncheckedCreateNestedManyWithoutToursInput
  }

  export type ToursUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    locations?: Tours_LocationUpdateManyWithoutToursNestedInput
    Bookings?: BookingsUpdateManyWithoutToursNestedInput
    Reviews?: ReviewsUpdateManyWithoutToursNestedInput
    Tour_Images?: Tour_ImagesUpdateManyWithoutToursNestedInput
    Tour_Logs?: Tour_LogsUpdateManyWithoutToursNestedInput
    Tour_Itinerarys?: Tour_ItinerarysUpdateManyWithoutToursNestedInput
  }

  export type ToursUncheckedUpdateInput = {
    tour_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    locations?: Tours_LocationUncheckedUpdateManyWithoutToursNestedInput
    Bookings?: BookingsUncheckedUpdateManyWithoutToursNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutToursNestedInput
    Tour_Images?: Tour_ImagesUncheckedUpdateManyWithoutToursNestedInput
    Tour_Logs?: Tour_LogsUncheckedUpdateManyWithoutToursNestedInput
    Tour_Itinerarys?: Tour_ItinerarysUncheckedUpdateManyWithoutToursNestedInput
  }

  export type ToursCreateManyInput = {
    tour_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
  }

  export type ToursUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
  }

  export type ToursUncheckedUpdateManyInput = {
    tour_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
  }

  export type Admin_LogsCreateInput = {
    action: string
    action_date?: Date | string
    admin: UsersCreateNestedOneWithoutAdmin_LogsInput
  }

  export type Admin_LogsUncheckedCreateInput = {
    log_id?: number
    admin_id: number
    action: string
    action_date?: Date | string
  }

  export type Admin_LogsUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UsersUpdateOneRequiredWithoutAdmin_LogsNestedInput
  }

  export type Admin_LogsUncheckedUpdateInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Admin_LogsCreateManyInput = {
    log_id?: number
    admin_id: number
    action: string
    action_date?: Date | string
  }

  export type Admin_LogsUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Admin_LogsUncheckedUpdateManyInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    admin_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Tours_LocationCreateInput = {
    location_name: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    description?: string | null
    Tours: ToursCreateNestedOneWithoutLocationsInput
  }

  export type Tours_LocationUncheckedCreateInput = {
    location_id?: number
    tour_id: number
    location_name: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    description?: string | null
  }

  export type Tours_LocationUpdateInput = {
    location_name?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Tours?: ToursUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type Tours_LocationUncheckedUpdateInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    location_name?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tours_LocationCreateManyInput = {
    location_id?: number
    tour_id: number
    location_name: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    description?: string | null
  }

  export type Tours_LocationUpdateManyMutationInput = {
    location_name?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tours_LocationUncheckedUpdateManyInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    location_name?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingsCreateInput = {
    number_of_people: number
    booking_date?: Date | string
    status?: string
    Users: UsersCreateNestedOneWithoutBookingsInput
    Tours: ToursCreateNestedOneWithoutBookingsInput
    Payments?: PaymentsCreateNestedManyWithoutBookingsInput
  }

  export type BookingsUncheckedCreateInput = {
    booking_id?: number
    user_id: number
    tour_id: number
    number_of_people: number
    booking_date?: Date | string
    status?: string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutBookingsInput
  }

  export type BookingsUpdateInput = {
    number_of_people?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Users?: UsersUpdateOneRequiredWithoutBookingsNestedInput
    Tours?: ToursUpdateOneRequiredWithoutBookingsNestedInput
    Payments?: PaymentsUpdateManyWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    number_of_people?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Payments?: PaymentsUncheckedUpdateManyWithoutBookingsNestedInput
  }

  export type BookingsCreateManyInput = {
    booking_id?: number
    user_id: number
    tour_id: number
    number_of_people: number
    booking_date?: Date | string
    status?: string
  }

  export type BookingsUpdateManyMutationInput = {
    number_of_people?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsUncheckedUpdateManyInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    number_of_people?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewImageCreateInput = {
    image_url: string
    Reviews: ReviewsCreateNestedOneWithoutReviewImagesInput
  }

  export type ReviewImageUncheckedCreateInput = {
    id?: number
    review_id: number
    image_url: string
  }

  export type ReviewImageUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    Reviews?: ReviewsUpdateOneRequiredWithoutReviewImagesNestedInput
  }

  export type ReviewImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    review_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewImageCreateManyInput = {
    id?: number
    review_id: number
    image_url: string
  }

  export type ReviewImageUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    review_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsCreateInput = {
    rating: number
    comment?: string | null
    review_date?: Date | string
    Users: UsersCreateNestedOneWithoutReviewsInput
    Tours: ToursCreateNestedOneWithoutReviewsInput
    ReviewImages?: ReviewImageCreateNestedManyWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    review_id?: number
    user_id: number
    tour_id: number
    rating: number
    comment?: string | null
    review_date?: Date | string
    ReviewImages?: ReviewImageUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    Tours?: ToursUpdateOneRequiredWithoutReviewsNestedInput
    ReviewImages?: ReviewImageUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewImages?: ReviewImageUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewsCreateManyInput = {
    review_id?: number
    user_id: number
    tour_id: number
    rating: number
    comment?: string | null
    review_date?: Date | string
  }

  export type ReviewsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateInput = {
    message: string
    notification_date?: Date | string
    users: UsersCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateInput = {
    notification_id?: number
    user_id: number
    message: string
    notification_date?: Date | string
  }

  export type NotificationsUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    notification_date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    notification_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateManyInput = {
    notification_id?: number
    user_id: number
    message: string
    notification_date?: Date | string
  }

  export type NotificationsUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    notification_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    notification_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateInput = {
    payment_date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    status?: string
    bookings: BookingsCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateInput = {
    payment_id?: number
    booking_id: number
    payment_date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    status?: string
  }

  export type PaymentsUpdateInput = {
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bookings?: BookingsUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentsCreateManyInput = {
    payment_id?: number
    booking_id: number
    payment_date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    status?: string
  }

  export type PaymentsUpdateManyMutationInput = {
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type HotelsCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    location: string
    image_url?: string | null
    available_seats: number
  }

  export type HotelsUncheckedCreateInput = {
    hotel_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    location: string
    image_url?: string | null
    available_seats: number
  }

  export type HotelsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
  }

  export type HotelsUncheckedUpdateInput = {
    hotel_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
  }

  export type HotelsCreateManyInput = {
    hotel_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    location: string
    image_url?: string | null
    available_seats: number
  }

  export type HotelsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
  }

  export type HotelsUncheckedUpdateManyInput = {
    hotel_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
  }

  export type Tour_ImagesCreateInput = {
    image_url: string
    image_order?: number
    tours: ToursCreateNestedOneWithoutTour_ImagesInput
  }

  export type Tour_ImagesUncheckedCreateInput = {
    image_id?: number
    tour_id: number
    image_url: string
    image_order?: number
  }

  export type Tour_ImagesUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    image_order?: IntFieldUpdateOperationsInput | number
    tours?: ToursUpdateOneRequiredWithoutTour_ImagesNestedInput
  }

  export type Tour_ImagesUncheckedUpdateInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    image_order?: IntFieldUpdateOperationsInput | number
  }

  export type Tour_ImagesCreateManyInput = {
    image_id?: number
    tour_id: number
    image_url: string
    image_order?: number
  }

  export type Tour_ImagesUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    image_order?: IntFieldUpdateOperationsInput | number
  }

  export type Tour_ImagesUncheckedUpdateManyInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    image_order?: IntFieldUpdateOperationsInput | number
  }

  export type Tour_LogsCreateInput = {
    action: string
    action_date?: Date | string
    tours: ToursCreateNestedOneWithoutTour_LogsInput
  }

  export type Tour_LogsUncheckedCreateInput = {
    log_id?: number
    tour_id: number
    action: string
    action_date?: Date | string
  }

  export type Tour_LogsUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
    tours?: ToursUpdateOneRequiredWithoutTour_LogsNestedInput
  }

  export type Tour_LogsUncheckedUpdateInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Tour_LogsCreateManyInput = {
    log_id?: number
    tour_id: number
    action: string
    action_date?: Date | string
  }

  export type Tour_LogsUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Tour_LogsUncheckedUpdateManyInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Tour_ItinerarysCreateInput = {
    day_number: number
    start_time?: Date | string | null
    activity?: string | null
    location?: string | null
    tours: ToursCreateNestedOneWithoutTour_ItinerarysInput
  }

  export type Tour_ItinerarysUncheckedCreateInput = {
    itinerary_id?: number
    tour_id: number
    day_number: number
    start_time?: Date | string | null
    activity?: string | null
    location?: string | null
  }

  export type Tour_ItinerarysUpdateInput = {
    day_number?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    tours?: ToursUpdateOneRequiredWithoutTour_ItinerarysNestedInput
  }

  export type Tour_ItinerarysUncheckedUpdateInput = {
    itinerary_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    day_number?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tour_ItinerarysCreateManyInput = {
    itinerary_id?: number
    tour_id: number
    day_number: number
    start_time?: Date | string | null
    activity?: string | null
    location?: string | null
  }

  export type Tour_ItinerarysUpdateManyMutationInput = {
    day_number?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tour_ItinerarysUncheckedUpdateManyInput = {
    itinerary_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    day_number?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Chatbot_HistoryCreateInput = {
    message: string
    sender: string
    timestamp?: Date | string
    Users?: UsersCreateNestedOneWithoutChatbot_HistoryInput
  }

  export type Chatbot_HistoryUncheckedCreateInput = {
    chat_id?: number
    user_id?: number | null
    message: string
    sender: string
    timestamp?: Date | string
  }

  export type Chatbot_HistoryUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutChatbot_HistoryNestedInput
  }

  export type Chatbot_HistoryUncheckedUpdateInput = {
    chat_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Chatbot_HistoryCreateManyInput = {
    chat_id?: number
    user_id?: number | null
    message: string
    sender: string
    timestamp?: Date | string
  }

  export type Chatbot_HistoryUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Chatbot_HistoryUncheckedUpdateManyInput = {
    chat_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    message?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AI_RecommendationsCreateInput = {
    recommendation_text: string
    created_at?: Date | string
    Users?: UsersCreateNestedOneWithoutAI_RecommendationsInput
  }

  export type AI_RecommendationsUncheckedCreateInput = {
    recommendation_id?: number
    user_id?: number | null
    recommendation_text: string
    created_at?: Date | string
  }

  export type AI_RecommendationsUpdateInput = {
    recommendation_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutAI_RecommendationsNestedInput
  }

  export type AI_RecommendationsUncheckedUpdateInput = {
    recommendation_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    recommendation_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AI_RecommendationsCreateManyInput = {
    recommendation_id?: number
    user_id?: number | null
    recommendation_text: string
    created_at?: Date | string
  }

  export type AI_RecommendationsUpdateManyMutationInput = {
    recommendation_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AI_RecommendationsUncheckedUpdateManyInput = {
    recommendation_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    recommendation_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BookingsListRelationFilter = {
    every?: BookingsWhereInput
    some?: BookingsWhereInput
    none?: BookingsWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type Admin_LogsListRelationFilter = {
    every?: Admin_LogsWhereInput
    some?: Admin_LogsWhereInput
    none?: Admin_LogsWhereInput
  }

  export type AI_RecommendationsListRelationFilter = {
    every?: AI_RecommendationsWhereInput
    some?: AI_RecommendationsWhereInput
    none?: AI_RecommendationsWhereInput
  }

  export type Chatbot_HistoryListRelationFilter = {
    every?: Chatbot_HistoryWhereInput
    some?: Chatbot_HistoryWhereInput
    none?: Chatbot_HistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Admin_LogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AI_RecommendationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Chatbot_HistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    preferences?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    preferences?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isBlocked?: SortOrder
    preferences?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Tours_LocationListRelationFilter = {
    every?: Tours_LocationWhereInput
    some?: Tours_LocationWhereInput
    none?: Tours_LocationWhereInput
  }

  export type Tour_ImagesListRelationFilter = {
    every?: Tour_ImagesWhereInput
    some?: Tour_ImagesWhereInput
    none?: Tour_ImagesWhereInput
  }

  export type Tour_LogsListRelationFilter = {
    every?: Tour_LogsWhereInput
    some?: Tour_LogsWhereInput
    none?: Tour_LogsWhereInput
  }

  export type Tour_ItinerarysListRelationFilter = {
    every?: Tour_ItinerarysWhereInput
    some?: Tour_ItinerarysWhereInput
    none?: Tour_ItinerarysWhereInput
  }

  export type Tours_LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Tour_ImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Tour_LogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Tour_ItinerarysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToursOrderByRelevanceInput = {
    fields: ToursOrderByRelevanceFieldEnum | ToursOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ToursCountOrderByAggregateInput = {
    tour_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    image_url?: SortOrder
    available_seats?: SortOrder
  }

  export type ToursAvgOrderByAggregateInput = {
    tour_id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    available_seats?: SortOrder
  }

  export type ToursMaxOrderByAggregateInput = {
    tour_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    image_url?: SortOrder
    available_seats?: SortOrder
  }

  export type ToursMinOrderByAggregateInput = {
    tour_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    image_url?: SortOrder
    available_seats?: SortOrder
  }

  export type ToursSumOrderByAggregateInput = {
    tour_id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    available_seats?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type Admin_LogsOrderByRelevanceInput = {
    fields: Admin_LogsOrderByRelevanceFieldEnum | Admin_LogsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Admin_LogsCountOrderByAggregateInput = {
    log_id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    action_date?: SortOrder
  }

  export type Admin_LogsAvgOrderByAggregateInput = {
    log_id?: SortOrder
    admin_id?: SortOrder
  }

  export type Admin_LogsMaxOrderByAggregateInput = {
    log_id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    action_date?: SortOrder
  }

  export type Admin_LogsMinOrderByAggregateInput = {
    log_id?: SortOrder
    admin_id?: SortOrder
    action?: SortOrder
    action_date?: SortOrder
  }

  export type Admin_LogsSumOrderByAggregateInput = {
    log_id?: SortOrder
    admin_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ToursScalarRelationFilter = {
    is?: ToursWhereInput
    isNot?: ToursWhereInput
  }

  export type Tours_LocationOrderByRelevanceInput = {
    fields: Tours_LocationOrderByRelevanceFieldEnum | Tours_LocationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Tours_LocationCountOrderByAggregateInput = {
    location_id?: SortOrder
    tour_id?: SortOrder
    location_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
  }

  export type Tours_LocationAvgOrderByAggregateInput = {
    location_id?: SortOrder
    tour_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type Tours_LocationMaxOrderByAggregateInput = {
    location_id?: SortOrder
    tour_id?: SortOrder
    location_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
  }

  export type Tours_LocationMinOrderByAggregateInput = {
    location_id?: SortOrder
    tour_id?: SortOrder
    location_name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
  }

  export type Tours_LocationSumOrderByAggregateInput = {
    location_id?: SortOrder
    tour_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PaymentsListRelationFilter = {
    every?: PaymentsWhereInput
    some?: PaymentsWhereInput
    none?: PaymentsWhereInput
  }

  export type PaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingsOrderByRelevanceInput = {
    fields: BookingsOrderByRelevanceFieldEnum | BookingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingsCountOrderByAggregateInput = {
    booking_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    number_of_people?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
  }

  export type BookingsAvgOrderByAggregateInput = {
    booking_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    number_of_people?: SortOrder
  }

  export type BookingsMaxOrderByAggregateInput = {
    booking_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    number_of_people?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
  }

  export type BookingsMinOrderByAggregateInput = {
    booking_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    number_of_people?: SortOrder
    booking_date?: SortOrder
    status?: SortOrder
  }

  export type BookingsSumOrderByAggregateInput = {
    booking_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    number_of_people?: SortOrder
  }

  export type ReviewsScalarRelationFilter = {
    is?: ReviewsWhereInput
    isNot?: ReviewsWhereInput
  }

  export type ReviewImageOrderByRelevanceInput = {
    fields: ReviewImageOrderByRelevanceFieldEnum | ReviewImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewImageCountOrderByAggregateInput = {
    id?: SortOrder
    review_id?: SortOrder
    image_url?: SortOrder
  }

  export type ReviewImageAvgOrderByAggregateInput = {
    id?: SortOrder
    review_id?: SortOrder
  }

  export type ReviewImageMaxOrderByAggregateInput = {
    id?: SortOrder
    review_id?: SortOrder
    image_url?: SortOrder
  }

  export type ReviewImageMinOrderByAggregateInput = {
    id?: SortOrder
    review_id?: SortOrder
    image_url?: SortOrder
  }

  export type ReviewImageSumOrderByAggregateInput = {
    id?: SortOrder
    review_id?: SortOrder
  }

  export type ReviewImageListRelationFilter = {
    every?: ReviewImageWhereInput
    some?: ReviewImageWhereInput
    none?: ReviewImageWhereInput
  }

  export type ReviewImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelevanceInput = {
    fields: ReviewsOrderByRelevanceFieldEnum | ReviewsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewsCountOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    review_date?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    review_date?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    review_date?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    review_id?: SortOrder
    user_id?: SortOrder
    tour_id?: SortOrder
    rating?: SortOrder
  }

  export type NotificationsOrderByRelevanceInput = {
    fields: NotificationsOrderByRelevanceFieldEnum | NotificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationsCountOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    notification_date?: SortOrder
  }

  export type NotificationsAvgOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    notification_date?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    notification_date?: SortOrder
  }

  export type NotificationsSumOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
  }

  export type BookingsScalarRelationFilter = {
    is?: BookingsWhereInput
    isNot?: BookingsWhereInput
  }

  export type PaymentsOrderByRelevanceInput = {
    fields: PaymentsOrderByRelevanceFieldEnum | PaymentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentsCountOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    payment_date?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    payment_date?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    payment_date?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    status?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
  }

  export type HotelsOrderByRelevanceInput = {
    fields: HotelsOrderByRelevanceFieldEnum | HotelsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HotelsCountOrderByAggregateInput = {
    hotel_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    image_url?: SortOrder
    available_seats?: SortOrder
  }

  export type HotelsAvgOrderByAggregateInput = {
    hotel_id?: SortOrder
    price?: SortOrder
    available_seats?: SortOrder
  }

  export type HotelsMaxOrderByAggregateInput = {
    hotel_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    image_url?: SortOrder
    available_seats?: SortOrder
  }

  export type HotelsMinOrderByAggregateInput = {
    hotel_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    location?: SortOrder
    image_url?: SortOrder
    available_seats?: SortOrder
  }

  export type HotelsSumOrderByAggregateInput = {
    hotel_id?: SortOrder
    price?: SortOrder
    available_seats?: SortOrder
  }

  export type Tour_ImagesOrderByRelevanceInput = {
    fields: Tour_ImagesOrderByRelevanceFieldEnum | Tour_ImagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Tour_ImagesCountOrderByAggregateInput = {
    image_id?: SortOrder
    tour_id?: SortOrder
    image_url?: SortOrder
    image_order?: SortOrder
  }

  export type Tour_ImagesAvgOrderByAggregateInput = {
    image_id?: SortOrder
    tour_id?: SortOrder
    image_order?: SortOrder
  }

  export type Tour_ImagesMaxOrderByAggregateInput = {
    image_id?: SortOrder
    tour_id?: SortOrder
    image_url?: SortOrder
    image_order?: SortOrder
  }

  export type Tour_ImagesMinOrderByAggregateInput = {
    image_id?: SortOrder
    tour_id?: SortOrder
    image_url?: SortOrder
    image_order?: SortOrder
  }

  export type Tour_ImagesSumOrderByAggregateInput = {
    image_id?: SortOrder
    tour_id?: SortOrder
    image_order?: SortOrder
  }

  export type Tour_LogsOrderByRelevanceInput = {
    fields: Tour_LogsOrderByRelevanceFieldEnum | Tour_LogsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Tour_LogsCountOrderByAggregateInput = {
    log_id?: SortOrder
    tour_id?: SortOrder
    action?: SortOrder
    action_date?: SortOrder
  }

  export type Tour_LogsAvgOrderByAggregateInput = {
    log_id?: SortOrder
    tour_id?: SortOrder
  }

  export type Tour_LogsMaxOrderByAggregateInput = {
    log_id?: SortOrder
    tour_id?: SortOrder
    action?: SortOrder
    action_date?: SortOrder
  }

  export type Tour_LogsMinOrderByAggregateInput = {
    log_id?: SortOrder
    tour_id?: SortOrder
    action?: SortOrder
    action_date?: SortOrder
  }

  export type Tour_LogsSumOrderByAggregateInput = {
    log_id?: SortOrder
    tour_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Tour_ItinerarysOrderByRelevanceInput = {
    fields: Tour_ItinerarysOrderByRelevanceFieldEnum | Tour_ItinerarysOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Tour_ItinerarysCountOrderByAggregateInput = {
    itinerary_id?: SortOrder
    tour_id?: SortOrder
    day_number?: SortOrder
    start_time?: SortOrder
    activity?: SortOrder
    location?: SortOrder
  }

  export type Tour_ItinerarysAvgOrderByAggregateInput = {
    itinerary_id?: SortOrder
    tour_id?: SortOrder
    day_number?: SortOrder
  }

  export type Tour_ItinerarysMaxOrderByAggregateInput = {
    itinerary_id?: SortOrder
    tour_id?: SortOrder
    day_number?: SortOrder
    start_time?: SortOrder
    activity?: SortOrder
    location?: SortOrder
  }

  export type Tour_ItinerarysMinOrderByAggregateInput = {
    itinerary_id?: SortOrder
    tour_id?: SortOrder
    day_number?: SortOrder
    start_time?: SortOrder
    activity?: SortOrder
    location?: SortOrder
  }

  export type Tour_ItinerarysSumOrderByAggregateInput = {
    itinerary_id?: SortOrder
    tour_id?: SortOrder
    day_number?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type Chatbot_HistoryOrderByRelevanceInput = {
    fields: Chatbot_HistoryOrderByRelevanceFieldEnum | Chatbot_HistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Chatbot_HistoryCountOrderByAggregateInput = {
    chat_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    sender?: SortOrder
    timestamp?: SortOrder
  }

  export type Chatbot_HistoryAvgOrderByAggregateInput = {
    chat_id?: SortOrder
    user_id?: SortOrder
  }

  export type Chatbot_HistoryMaxOrderByAggregateInput = {
    chat_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    sender?: SortOrder
    timestamp?: SortOrder
  }

  export type Chatbot_HistoryMinOrderByAggregateInput = {
    chat_id?: SortOrder
    user_id?: SortOrder
    message?: SortOrder
    sender?: SortOrder
    timestamp?: SortOrder
  }

  export type Chatbot_HistorySumOrderByAggregateInput = {
    chat_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AI_RecommendationsOrderByRelevanceInput = {
    fields: AI_RecommendationsOrderByRelevanceFieldEnum | AI_RecommendationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AI_RecommendationsCountOrderByAggregateInput = {
    recommendation_id?: SortOrder
    user_id?: SortOrder
    recommendation_text?: SortOrder
    created_at?: SortOrder
  }

  export type AI_RecommendationsAvgOrderByAggregateInput = {
    recommendation_id?: SortOrder
    user_id?: SortOrder
  }

  export type AI_RecommendationsMaxOrderByAggregateInput = {
    recommendation_id?: SortOrder
    user_id?: SortOrder
    recommendation_text?: SortOrder
    created_at?: SortOrder
  }

  export type AI_RecommendationsMinOrderByAggregateInput = {
    recommendation_id?: SortOrder
    user_id?: SortOrder
    recommendation_text?: SortOrder
    created_at?: SortOrder
  }

  export type AI_RecommendationsSumOrderByAggregateInput = {
    recommendation_id?: SortOrder
    user_id?: SortOrder
  }

  export type BookingsCreateNestedManyWithoutUsersInput = {
    create?: XOR<BookingsCreateWithoutUsersInput, BookingsUncheckedCreateWithoutUsersInput> | BookingsCreateWithoutUsersInput[] | BookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUsersInput | BookingsCreateOrConnectWithoutUsersInput[]
    createMany?: BookingsCreateManyUsersInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutUsersInput = {
    create?: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput> | ReviewsCreateWithoutUsersInput[] | ReviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUsersInput | ReviewsCreateOrConnectWithoutUsersInput[]
    createMany?: ReviewsCreateManyUsersInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput> | NotificationsCreateWithoutUsersInput[] | NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput | NotificationsCreateOrConnectWithoutUsersInput[]
    createMany?: NotificationsCreateManyUsersInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type Admin_LogsCreateNestedManyWithoutAdminInput = {
    create?: XOR<Admin_LogsCreateWithoutAdminInput, Admin_LogsUncheckedCreateWithoutAdminInput> | Admin_LogsCreateWithoutAdminInput[] | Admin_LogsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Admin_LogsCreateOrConnectWithoutAdminInput | Admin_LogsCreateOrConnectWithoutAdminInput[]
    createMany?: Admin_LogsCreateManyAdminInputEnvelope
    connect?: Admin_LogsWhereUniqueInput | Admin_LogsWhereUniqueInput[]
  }

  export type AI_RecommendationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<AI_RecommendationsCreateWithoutUsersInput, AI_RecommendationsUncheckedCreateWithoutUsersInput> | AI_RecommendationsCreateWithoutUsersInput[] | AI_RecommendationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AI_RecommendationsCreateOrConnectWithoutUsersInput | AI_RecommendationsCreateOrConnectWithoutUsersInput[]
    createMany?: AI_RecommendationsCreateManyUsersInputEnvelope
    connect?: AI_RecommendationsWhereUniqueInput | AI_RecommendationsWhereUniqueInput[]
  }

  export type Chatbot_HistoryCreateNestedManyWithoutUsersInput = {
    create?: XOR<Chatbot_HistoryCreateWithoutUsersInput, Chatbot_HistoryUncheckedCreateWithoutUsersInput> | Chatbot_HistoryCreateWithoutUsersInput[] | Chatbot_HistoryUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Chatbot_HistoryCreateOrConnectWithoutUsersInput | Chatbot_HistoryCreateOrConnectWithoutUsersInput[]
    createMany?: Chatbot_HistoryCreateManyUsersInputEnvelope
    connect?: Chatbot_HistoryWhereUniqueInput | Chatbot_HistoryWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<BookingsCreateWithoutUsersInput, BookingsUncheckedCreateWithoutUsersInput> | BookingsCreateWithoutUsersInput[] | BookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUsersInput | BookingsCreateOrConnectWithoutUsersInput[]
    createMany?: BookingsCreateManyUsersInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput> | ReviewsCreateWithoutUsersInput[] | ReviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUsersInput | ReviewsCreateOrConnectWithoutUsersInput[]
    createMany?: ReviewsCreateManyUsersInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput> | NotificationsCreateWithoutUsersInput[] | NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput | NotificationsCreateOrConnectWithoutUsersInput[]
    createMany?: NotificationsCreateManyUsersInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type Admin_LogsUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Admin_LogsCreateWithoutAdminInput, Admin_LogsUncheckedCreateWithoutAdminInput> | Admin_LogsCreateWithoutAdminInput[] | Admin_LogsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Admin_LogsCreateOrConnectWithoutAdminInput | Admin_LogsCreateOrConnectWithoutAdminInput[]
    createMany?: Admin_LogsCreateManyAdminInputEnvelope
    connect?: Admin_LogsWhereUniqueInput | Admin_LogsWhereUniqueInput[]
  }

  export type AI_RecommendationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<AI_RecommendationsCreateWithoutUsersInput, AI_RecommendationsUncheckedCreateWithoutUsersInput> | AI_RecommendationsCreateWithoutUsersInput[] | AI_RecommendationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AI_RecommendationsCreateOrConnectWithoutUsersInput | AI_RecommendationsCreateOrConnectWithoutUsersInput[]
    createMany?: AI_RecommendationsCreateManyUsersInputEnvelope
    connect?: AI_RecommendationsWhereUniqueInput | AI_RecommendationsWhereUniqueInput[]
  }

  export type Chatbot_HistoryUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Chatbot_HistoryCreateWithoutUsersInput, Chatbot_HistoryUncheckedCreateWithoutUsersInput> | Chatbot_HistoryCreateWithoutUsersInput[] | Chatbot_HistoryUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Chatbot_HistoryCreateOrConnectWithoutUsersInput | Chatbot_HistoryCreateOrConnectWithoutUsersInput[]
    createMany?: Chatbot_HistoryCreateManyUsersInputEnvelope
    connect?: Chatbot_HistoryWhereUniqueInput | Chatbot_HistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookingsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<BookingsCreateWithoutUsersInput, BookingsUncheckedCreateWithoutUsersInput> | BookingsCreateWithoutUsersInput[] | BookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUsersInput | BookingsCreateOrConnectWithoutUsersInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutUsersInput | BookingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: BookingsCreateManyUsersInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutUsersInput | BookingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutUsersInput | BookingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput> | ReviewsCreateWithoutUsersInput[] | ReviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUsersInput | ReviewsCreateOrConnectWithoutUsersInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUsersInput | ReviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ReviewsCreateManyUsersInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUsersInput | ReviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUsersInput | ReviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput> | NotificationsCreateWithoutUsersInput[] | NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput | NotificationsCreateOrConnectWithoutUsersInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUsersInput | NotificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: NotificationsCreateManyUsersInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUsersInput | NotificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUsersInput | NotificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type Admin_LogsUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Admin_LogsCreateWithoutAdminInput, Admin_LogsUncheckedCreateWithoutAdminInput> | Admin_LogsCreateWithoutAdminInput[] | Admin_LogsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Admin_LogsCreateOrConnectWithoutAdminInput | Admin_LogsCreateOrConnectWithoutAdminInput[]
    upsert?: Admin_LogsUpsertWithWhereUniqueWithoutAdminInput | Admin_LogsUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: Admin_LogsCreateManyAdminInputEnvelope
    set?: Admin_LogsWhereUniqueInput | Admin_LogsWhereUniqueInput[]
    disconnect?: Admin_LogsWhereUniqueInput | Admin_LogsWhereUniqueInput[]
    delete?: Admin_LogsWhereUniqueInput | Admin_LogsWhereUniqueInput[]
    connect?: Admin_LogsWhereUniqueInput | Admin_LogsWhereUniqueInput[]
    update?: Admin_LogsUpdateWithWhereUniqueWithoutAdminInput | Admin_LogsUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: Admin_LogsUpdateManyWithWhereWithoutAdminInput | Admin_LogsUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: Admin_LogsScalarWhereInput | Admin_LogsScalarWhereInput[]
  }

  export type AI_RecommendationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<AI_RecommendationsCreateWithoutUsersInput, AI_RecommendationsUncheckedCreateWithoutUsersInput> | AI_RecommendationsCreateWithoutUsersInput[] | AI_RecommendationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AI_RecommendationsCreateOrConnectWithoutUsersInput | AI_RecommendationsCreateOrConnectWithoutUsersInput[]
    upsert?: AI_RecommendationsUpsertWithWhereUniqueWithoutUsersInput | AI_RecommendationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: AI_RecommendationsCreateManyUsersInputEnvelope
    set?: AI_RecommendationsWhereUniqueInput | AI_RecommendationsWhereUniqueInput[]
    disconnect?: AI_RecommendationsWhereUniqueInput | AI_RecommendationsWhereUniqueInput[]
    delete?: AI_RecommendationsWhereUniqueInput | AI_RecommendationsWhereUniqueInput[]
    connect?: AI_RecommendationsWhereUniqueInput | AI_RecommendationsWhereUniqueInput[]
    update?: AI_RecommendationsUpdateWithWhereUniqueWithoutUsersInput | AI_RecommendationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: AI_RecommendationsUpdateManyWithWhereWithoutUsersInput | AI_RecommendationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: AI_RecommendationsScalarWhereInput | AI_RecommendationsScalarWhereInput[]
  }

  export type Chatbot_HistoryUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Chatbot_HistoryCreateWithoutUsersInput, Chatbot_HistoryUncheckedCreateWithoutUsersInput> | Chatbot_HistoryCreateWithoutUsersInput[] | Chatbot_HistoryUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Chatbot_HistoryCreateOrConnectWithoutUsersInput | Chatbot_HistoryCreateOrConnectWithoutUsersInput[]
    upsert?: Chatbot_HistoryUpsertWithWhereUniqueWithoutUsersInput | Chatbot_HistoryUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Chatbot_HistoryCreateManyUsersInputEnvelope
    set?: Chatbot_HistoryWhereUniqueInput | Chatbot_HistoryWhereUniqueInput[]
    disconnect?: Chatbot_HistoryWhereUniqueInput | Chatbot_HistoryWhereUniqueInput[]
    delete?: Chatbot_HistoryWhereUniqueInput | Chatbot_HistoryWhereUniqueInput[]
    connect?: Chatbot_HistoryWhereUniqueInput | Chatbot_HistoryWhereUniqueInput[]
    update?: Chatbot_HistoryUpdateWithWhereUniqueWithoutUsersInput | Chatbot_HistoryUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Chatbot_HistoryUpdateManyWithWhereWithoutUsersInput | Chatbot_HistoryUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Chatbot_HistoryScalarWhereInput | Chatbot_HistoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<BookingsCreateWithoutUsersInput, BookingsUncheckedCreateWithoutUsersInput> | BookingsCreateWithoutUsersInput[] | BookingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUsersInput | BookingsCreateOrConnectWithoutUsersInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutUsersInput | BookingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: BookingsCreateManyUsersInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutUsersInput | BookingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutUsersInput | BookingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput> | ReviewsCreateWithoutUsersInput[] | ReviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUsersInput | ReviewsCreateOrConnectWithoutUsersInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUsersInput | ReviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ReviewsCreateManyUsersInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUsersInput | ReviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUsersInput | ReviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput> | NotificationsCreateWithoutUsersInput[] | NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput | NotificationsCreateOrConnectWithoutUsersInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUsersInput | NotificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: NotificationsCreateManyUsersInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUsersInput | NotificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUsersInput | NotificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type Admin_LogsUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Admin_LogsCreateWithoutAdminInput, Admin_LogsUncheckedCreateWithoutAdminInput> | Admin_LogsCreateWithoutAdminInput[] | Admin_LogsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Admin_LogsCreateOrConnectWithoutAdminInput | Admin_LogsCreateOrConnectWithoutAdminInput[]
    upsert?: Admin_LogsUpsertWithWhereUniqueWithoutAdminInput | Admin_LogsUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: Admin_LogsCreateManyAdminInputEnvelope
    set?: Admin_LogsWhereUniqueInput | Admin_LogsWhereUniqueInput[]
    disconnect?: Admin_LogsWhereUniqueInput | Admin_LogsWhereUniqueInput[]
    delete?: Admin_LogsWhereUniqueInput | Admin_LogsWhereUniqueInput[]
    connect?: Admin_LogsWhereUniqueInput | Admin_LogsWhereUniqueInput[]
    update?: Admin_LogsUpdateWithWhereUniqueWithoutAdminInput | Admin_LogsUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: Admin_LogsUpdateManyWithWhereWithoutAdminInput | Admin_LogsUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: Admin_LogsScalarWhereInput | Admin_LogsScalarWhereInput[]
  }

  export type AI_RecommendationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<AI_RecommendationsCreateWithoutUsersInput, AI_RecommendationsUncheckedCreateWithoutUsersInput> | AI_RecommendationsCreateWithoutUsersInput[] | AI_RecommendationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AI_RecommendationsCreateOrConnectWithoutUsersInput | AI_RecommendationsCreateOrConnectWithoutUsersInput[]
    upsert?: AI_RecommendationsUpsertWithWhereUniqueWithoutUsersInput | AI_RecommendationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: AI_RecommendationsCreateManyUsersInputEnvelope
    set?: AI_RecommendationsWhereUniqueInput | AI_RecommendationsWhereUniqueInput[]
    disconnect?: AI_RecommendationsWhereUniqueInput | AI_RecommendationsWhereUniqueInput[]
    delete?: AI_RecommendationsWhereUniqueInput | AI_RecommendationsWhereUniqueInput[]
    connect?: AI_RecommendationsWhereUniqueInput | AI_RecommendationsWhereUniqueInput[]
    update?: AI_RecommendationsUpdateWithWhereUniqueWithoutUsersInput | AI_RecommendationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: AI_RecommendationsUpdateManyWithWhereWithoutUsersInput | AI_RecommendationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: AI_RecommendationsScalarWhereInput | AI_RecommendationsScalarWhereInput[]
  }

  export type Chatbot_HistoryUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Chatbot_HistoryCreateWithoutUsersInput, Chatbot_HistoryUncheckedCreateWithoutUsersInput> | Chatbot_HistoryCreateWithoutUsersInput[] | Chatbot_HistoryUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: Chatbot_HistoryCreateOrConnectWithoutUsersInput | Chatbot_HistoryCreateOrConnectWithoutUsersInput[]
    upsert?: Chatbot_HistoryUpsertWithWhereUniqueWithoutUsersInput | Chatbot_HistoryUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: Chatbot_HistoryCreateManyUsersInputEnvelope
    set?: Chatbot_HistoryWhereUniqueInput | Chatbot_HistoryWhereUniqueInput[]
    disconnect?: Chatbot_HistoryWhereUniqueInput | Chatbot_HistoryWhereUniqueInput[]
    delete?: Chatbot_HistoryWhereUniqueInput | Chatbot_HistoryWhereUniqueInput[]
    connect?: Chatbot_HistoryWhereUniqueInput | Chatbot_HistoryWhereUniqueInput[]
    update?: Chatbot_HistoryUpdateWithWhereUniqueWithoutUsersInput | Chatbot_HistoryUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: Chatbot_HistoryUpdateManyWithWhereWithoutUsersInput | Chatbot_HistoryUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: Chatbot_HistoryScalarWhereInput | Chatbot_HistoryScalarWhereInput[]
  }

  export type Tours_LocationCreateNestedManyWithoutToursInput = {
    create?: XOR<Tours_LocationCreateWithoutToursInput, Tours_LocationUncheckedCreateWithoutToursInput> | Tours_LocationCreateWithoutToursInput[] | Tours_LocationUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tours_LocationCreateOrConnectWithoutToursInput | Tours_LocationCreateOrConnectWithoutToursInput[]
    createMany?: Tours_LocationCreateManyToursInputEnvelope
    connect?: Tours_LocationWhereUniqueInput | Tours_LocationWhereUniqueInput[]
  }

  export type BookingsCreateNestedManyWithoutToursInput = {
    create?: XOR<BookingsCreateWithoutToursInput, BookingsUncheckedCreateWithoutToursInput> | BookingsCreateWithoutToursInput[] | BookingsUncheckedCreateWithoutToursInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutToursInput | BookingsCreateOrConnectWithoutToursInput[]
    createMany?: BookingsCreateManyToursInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutToursInput = {
    create?: XOR<ReviewsCreateWithoutToursInput, ReviewsUncheckedCreateWithoutToursInput> | ReviewsCreateWithoutToursInput[] | ReviewsUncheckedCreateWithoutToursInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutToursInput | ReviewsCreateOrConnectWithoutToursInput[]
    createMany?: ReviewsCreateManyToursInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type Tour_ImagesCreateNestedManyWithoutToursInput = {
    create?: XOR<Tour_ImagesCreateWithoutToursInput, Tour_ImagesUncheckedCreateWithoutToursInput> | Tour_ImagesCreateWithoutToursInput[] | Tour_ImagesUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tour_ImagesCreateOrConnectWithoutToursInput | Tour_ImagesCreateOrConnectWithoutToursInput[]
    createMany?: Tour_ImagesCreateManyToursInputEnvelope
    connect?: Tour_ImagesWhereUniqueInput | Tour_ImagesWhereUniqueInput[]
  }

  export type Tour_LogsCreateNestedManyWithoutToursInput = {
    create?: XOR<Tour_LogsCreateWithoutToursInput, Tour_LogsUncheckedCreateWithoutToursInput> | Tour_LogsCreateWithoutToursInput[] | Tour_LogsUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tour_LogsCreateOrConnectWithoutToursInput | Tour_LogsCreateOrConnectWithoutToursInput[]
    createMany?: Tour_LogsCreateManyToursInputEnvelope
    connect?: Tour_LogsWhereUniqueInput | Tour_LogsWhereUniqueInput[]
  }

  export type Tour_ItinerarysCreateNestedManyWithoutToursInput = {
    create?: XOR<Tour_ItinerarysCreateWithoutToursInput, Tour_ItinerarysUncheckedCreateWithoutToursInput> | Tour_ItinerarysCreateWithoutToursInput[] | Tour_ItinerarysUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tour_ItinerarysCreateOrConnectWithoutToursInput | Tour_ItinerarysCreateOrConnectWithoutToursInput[]
    createMany?: Tour_ItinerarysCreateManyToursInputEnvelope
    connect?: Tour_ItinerarysWhereUniqueInput | Tour_ItinerarysWhereUniqueInput[]
  }

  export type Tours_LocationUncheckedCreateNestedManyWithoutToursInput = {
    create?: XOR<Tours_LocationCreateWithoutToursInput, Tours_LocationUncheckedCreateWithoutToursInput> | Tours_LocationCreateWithoutToursInput[] | Tours_LocationUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tours_LocationCreateOrConnectWithoutToursInput | Tours_LocationCreateOrConnectWithoutToursInput[]
    createMany?: Tours_LocationCreateManyToursInputEnvelope
    connect?: Tours_LocationWhereUniqueInput | Tours_LocationWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutToursInput = {
    create?: XOR<BookingsCreateWithoutToursInput, BookingsUncheckedCreateWithoutToursInput> | BookingsCreateWithoutToursInput[] | BookingsUncheckedCreateWithoutToursInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutToursInput | BookingsCreateOrConnectWithoutToursInput[]
    createMany?: BookingsCreateManyToursInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutToursInput = {
    create?: XOR<ReviewsCreateWithoutToursInput, ReviewsUncheckedCreateWithoutToursInput> | ReviewsCreateWithoutToursInput[] | ReviewsUncheckedCreateWithoutToursInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutToursInput | ReviewsCreateOrConnectWithoutToursInput[]
    createMany?: ReviewsCreateManyToursInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type Tour_ImagesUncheckedCreateNestedManyWithoutToursInput = {
    create?: XOR<Tour_ImagesCreateWithoutToursInput, Tour_ImagesUncheckedCreateWithoutToursInput> | Tour_ImagesCreateWithoutToursInput[] | Tour_ImagesUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tour_ImagesCreateOrConnectWithoutToursInput | Tour_ImagesCreateOrConnectWithoutToursInput[]
    createMany?: Tour_ImagesCreateManyToursInputEnvelope
    connect?: Tour_ImagesWhereUniqueInput | Tour_ImagesWhereUniqueInput[]
  }

  export type Tour_LogsUncheckedCreateNestedManyWithoutToursInput = {
    create?: XOR<Tour_LogsCreateWithoutToursInput, Tour_LogsUncheckedCreateWithoutToursInput> | Tour_LogsCreateWithoutToursInput[] | Tour_LogsUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tour_LogsCreateOrConnectWithoutToursInput | Tour_LogsCreateOrConnectWithoutToursInput[]
    createMany?: Tour_LogsCreateManyToursInputEnvelope
    connect?: Tour_LogsWhereUniqueInput | Tour_LogsWhereUniqueInput[]
  }

  export type Tour_ItinerarysUncheckedCreateNestedManyWithoutToursInput = {
    create?: XOR<Tour_ItinerarysCreateWithoutToursInput, Tour_ItinerarysUncheckedCreateWithoutToursInput> | Tour_ItinerarysCreateWithoutToursInput[] | Tour_ItinerarysUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tour_ItinerarysCreateOrConnectWithoutToursInput | Tour_ItinerarysCreateOrConnectWithoutToursInput[]
    createMany?: Tour_ItinerarysCreateManyToursInputEnvelope
    connect?: Tour_ItinerarysWhereUniqueInput | Tour_ItinerarysWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Tours_LocationUpdateManyWithoutToursNestedInput = {
    create?: XOR<Tours_LocationCreateWithoutToursInput, Tours_LocationUncheckedCreateWithoutToursInput> | Tours_LocationCreateWithoutToursInput[] | Tours_LocationUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tours_LocationCreateOrConnectWithoutToursInput | Tours_LocationCreateOrConnectWithoutToursInput[]
    upsert?: Tours_LocationUpsertWithWhereUniqueWithoutToursInput | Tours_LocationUpsertWithWhereUniqueWithoutToursInput[]
    createMany?: Tours_LocationCreateManyToursInputEnvelope
    set?: Tours_LocationWhereUniqueInput | Tours_LocationWhereUniqueInput[]
    disconnect?: Tours_LocationWhereUniqueInput | Tours_LocationWhereUniqueInput[]
    delete?: Tours_LocationWhereUniqueInput | Tours_LocationWhereUniqueInput[]
    connect?: Tours_LocationWhereUniqueInput | Tours_LocationWhereUniqueInput[]
    update?: Tours_LocationUpdateWithWhereUniqueWithoutToursInput | Tours_LocationUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: Tours_LocationUpdateManyWithWhereWithoutToursInput | Tours_LocationUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: Tours_LocationScalarWhereInput | Tours_LocationScalarWhereInput[]
  }

  export type BookingsUpdateManyWithoutToursNestedInput = {
    create?: XOR<BookingsCreateWithoutToursInput, BookingsUncheckedCreateWithoutToursInput> | BookingsCreateWithoutToursInput[] | BookingsUncheckedCreateWithoutToursInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutToursInput | BookingsCreateOrConnectWithoutToursInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutToursInput | BookingsUpsertWithWhereUniqueWithoutToursInput[]
    createMany?: BookingsCreateManyToursInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutToursInput | BookingsUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutToursInput | BookingsUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutToursNestedInput = {
    create?: XOR<ReviewsCreateWithoutToursInput, ReviewsUncheckedCreateWithoutToursInput> | ReviewsCreateWithoutToursInput[] | ReviewsUncheckedCreateWithoutToursInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutToursInput | ReviewsCreateOrConnectWithoutToursInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutToursInput | ReviewsUpsertWithWhereUniqueWithoutToursInput[]
    createMany?: ReviewsCreateManyToursInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutToursInput | ReviewsUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutToursInput | ReviewsUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type Tour_ImagesUpdateManyWithoutToursNestedInput = {
    create?: XOR<Tour_ImagesCreateWithoutToursInput, Tour_ImagesUncheckedCreateWithoutToursInput> | Tour_ImagesCreateWithoutToursInput[] | Tour_ImagesUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tour_ImagesCreateOrConnectWithoutToursInput | Tour_ImagesCreateOrConnectWithoutToursInput[]
    upsert?: Tour_ImagesUpsertWithWhereUniqueWithoutToursInput | Tour_ImagesUpsertWithWhereUniqueWithoutToursInput[]
    createMany?: Tour_ImagesCreateManyToursInputEnvelope
    set?: Tour_ImagesWhereUniqueInput | Tour_ImagesWhereUniqueInput[]
    disconnect?: Tour_ImagesWhereUniqueInput | Tour_ImagesWhereUniqueInput[]
    delete?: Tour_ImagesWhereUniqueInput | Tour_ImagesWhereUniqueInput[]
    connect?: Tour_ImagesWhereUniqueInput | Tour_ImagesWhereUniqueInput[]
    update?: Tour_ImagesUpdateWithWhereUniqueWithoutToursInput | Tour_ImagesUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: Tour_ImagesUpdateManyWithWhereWithoutToursInput | Tour_ImagesUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: Tour_ImagesScalarWhereInput | Tour_ImagesScalarWhereInput[]
  }

  export type Tour_LogsUpdateManyWithoutToursNestedInput = {
    create?: XOR<Tour_LogsCreateWithoutToursInput, Tour_LogsUncheckedCreateWithoutToursInput> | Tour_LogsCreateWithoutToursInput[] | Tour_LogsUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tour_LogsCreateOrConnectWithoutToursInput | Tour_LogsCreateOrConnectWithoutToursInput[]
    upsert?: Tour_LogsUpsertWithWhereUniqueWithoutToursInput | Tour_LogsUpsertWithWhereUniqueWithoutToursInput[]
    createMany?: Tour_LogsCreateManyToursInputEnvelope
    set?: Tour_LogsWhereUniqueInput | Tour_LogsWhereUniqueInput[]
    disconnect?: Tour_LogsWhereUniqueInput | Tour_LogsWhereUniqueInput[]
    delete?: Tour_LogsWhereUniqueInput | Tour_LogsWhereUniqueInput[]
    connect?: Tour_LogsWhereUniqueInput | Tour_LogsWhereUniqueInput[]
    update?: Tour_LogsUpdateWithWhereUniqueWithoutToursInput | Tour_LogsUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: Tour_LogsUpdateManyWithWhereWithoutToursInput | Tour_LogsUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: Tour_LogsScalarWhereInput | Tour_LogsScalarWhereInput[]
  }

  export type Tour_ItinerarysUpdateManyWithoutToursNestedInput = {
    create?: XOR<Tour_ItinerarysCreateWithoutToursInput, Tour_ItinerarysUncheckedCreateWithoutToursInput> | Tour_ItinerarysCreateWithoutToursInput[] | Tour_ItinerarysUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tour_ItinerarysCreateOrConnectWithoutToursInput | Tour_ItinerarysCreateOrConnectWithoutToursInput[]
    upsert?: Tour_ItinerarysUpsertWithWhereUniqueWithoutToursInput | Tour_ItinerarysUpsertWithWhereUniqueWithoutToursInput[]
    createMany?: Tour_ItinerarysCreateManyToursInputEnvelope
    set?: Tour_ItinerarysWhereUniqueInput | Tour_ItinerarysWhereUniqueInput[]
    disconnect?: Tour_ItinerarysWhereUniqueInput | Tour_ItinerarysWhereUniqueInput[]
    delete?: Tour_ItinerarysWhereUniqueInput | Tour_ItinerarysWhereUniqueInput[]
    connect?: Tour_ItinerarysWhereUniqueInput | Tour_ItinerarysWhereUniqueInput[]
    update?: Tour_ItinerarysUpdateWithWhereUniqueWithoutToursInput | Tour_ItinerarysUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: Tour_ItinerarysUpdateManyWithWhereWithoutToursInput | Tour_ItinerarysUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: Tour_ItinerarysScalarWhereInput | Tour_ItinerarysScalarWhereInput[]
  }

  export type Tours_LocationUncheckedUpdateManyWithoutToursNestedInput = {
    create?: XOR<Tours_LocationCreateWithoutToursInput, Tours_LocationUncheckedCreateWithoutToursInput> | Tours_LocationCreateWithoutToursInput[] | Tours_LocationUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tours_LocationCreateOrConnectWithoutToursInput | Tours_LocationCreateOrConnectWithoutToursInput[]
    upsert?: Tours_LocationUpsertWithWhereUniqueWithoutToursInput | Tours_LocationUpsertWithWhereUniqueWithoutToursInput[]
    createMany?: Tours_LocationCreateManyToursInputEnvelope
    set?: Tours_LocationWhereUniqueInput | Tours_LocationWhereUniqueInput[]
    disconnect?: Tours_LocationWhereUniqueInput | Tours_LocationWhereUniqueInput[]
    delete?: Tours_LocationWhereUniqueInput | Tours_LocationWhereUniqueInput[]
    connect?: Tours_LocationWhereUniqueInput | Tours_LocationWhereUniqueInput[]
    update?: Tours_LocationUpdateWithWhereUniqueWithoutToursInput | Tours_LocationUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: Tours_LocationUpdateManyWithWhereWithoutToursInput | Tours_LocationUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: Tours_LocationScalarWhereInput | Tours_LocationScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutToursNestedInput = {
    create?: XOR<BookingsCreateWithoutToursInput, BookingsUncheckedCreateWithoutToursInput> | BookingsCreateWithoutToursInput[] | BookingsUncheckedCreateWithoutToursInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutToursInput | BookingsCreateOrConnectWithoutToursInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutToursInput | BookingsUpsertWithWhereUniqueWithoutToursInput[]
    createMany?: BookingsCreateManyToursInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutToursInput | BookingsUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutToursInput | BookingsUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutToursNestedInput = {
    create?: XOR<ReviewsCreateWithoutToursInput, ReviewsUncheckedCreateWithoutToursInput> | ReviewsCreateWithoutToursInput[] | ReviewsUncheckedCreateWithoutToursInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutToursInput | ReviewsCreateOrConnectWithoutToursInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutToursInput | ReviewsUpsertWithWhereUniqueWithoutToursInput[]
    createMany?: ReviewsCreateManyToursInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutToursInput | ReviewsUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutToursInput | ReviewsUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type Tour_ImagesUncheckedUpdateManyWithoutToursNestedInput = {
    create?: XOR<Tour_ImagesCreateWithoutToursInput, Tour_ImagesUncheckedCreateWithoutToursInput> | Tour_ImagesCreateWithoutToursInput[] | Tour_ImagesUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tour_ImagesCreateOrConnectWithoutToursInput | Tour_ImagesCreateOrConnectWithoutToursInput[]
    upsert?: Tour_ImagesUpsertWithWhereUniqueWithoutToursInput | Tour_ImagesUpsertWithWhereUniqueWithoutToursInput[]
    createMany?: Tour_ImagesCreateManyToursInputEnvelope
    set?: Tour_ImagesWhereUniqueInput | Tour_ImagesWhereUniqueInput[]
    disconnect?: Tour_ImagesWhereUniqueInput | Tour_ImagesWhereUniqueInput[]
    delete?: Tour_ImagesWhereUniqueInput | Tour_ImagesWhereUniqueInput[]
    connect?: Tour_ImagesWhereUniqueInput | Tour_ImagesWhereUniqueInput[]
    update?: Tour_ImagesUpdateWithWhereUniqueWithoutToursInput | Tour_ImagesUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: Tour_ImagesUpdateManyWithWhereWithoutToursInput | Tour_ImagesUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: Tour_ImagesScalarWhereInput | Tour_ImagesScalarWhereInput[]
  }

  export type Tour_LogsUncheckedUpdateManyWithoutToursNestedInput = {
    create?: XOR<Tour_LogsCreateWithoutToursInput, Tour_LogsUncheckedCreateWithoutToursInput> | Tour_LogsCreateWithoutToursInput[] | Tour_LogsUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tour_LogsCreateOrConnectWithoutToursInput | Tour_LogsCreateOrConnectWithoutToursInput[]
    upsert?: Tour_LogsUpsertWithWhereUniqueWithoutToursInput | Tour_LogsUpsertWithWhereUniqueWithoutToursInput[]
    createMany?: Tour_LogsCreateManyToursInputEnvelope
    set?: Tour_LogsWhereUniqueInput | Tour_LogsWhereUniqueInput[]
    disconnect?: Tour_LogsWhereUniqueInput | Tour_LogsWhereUniqueInput[]
    delete?: Tour_LogsWhereUniqueInput | Tour_LogsWhereUniqueInput[]
    connect?: Tour_LogsWhereUniqueInput | Tour_LogsWhereUniqueInput[]
    update?: Tour_LogsUpdateWithWhereUniqueWithoutToursInput | Tour_LogsUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: Tour_LogsUpdateManyWithWhereWithoutToursInput | Tour_LogsUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: Tour_LogsScalarWhereInput | Tour_LogsScalarWhereInput[]
  }

  export type Tour_ItinerarysUncheckedUpdateManyWithoutToursNestedInput = {
    create?: XOR<Tour_ItinerarysCreateWithoutToursInput, Tour_ItinerarysUncheckedCreateWithoutToursInput> | Tour_ItinerarysCreateWithoutToursInput[] | Tour_ItinerarysUncheckedCreateWithoutToursInput[]
    connectOrCreate?: Tour_ItinerarysCreateOrConnectWithoutToursInput | Tour_ItinerarysCreateOrConnectWithoutToursInput[]
    upsert?: Tour_ItinerarysUpsertWithWhereUniqueWithoutToursInput | Tour_ItinerarysUpsertWithWhereUniqueWithoutToursInput[]
    createMany?: Tour_ItinerarysCreateManyToursInputEnvelope
    set?: Tour_ItinerarysWhereUniqueInput | Tour_ItinerarysWhereUniqueInput[]
    disconnect?: Tour_ItinerarysWhereUniqueInput | Tour_ItinerarysWhereUniqueInput[]
    delete?: Tour_ItinerarysWhereUniqueInput | Tour_ItinerarysWhereUniqueInput[]
    connect?: Tour_ItinerarysWhereUniqueInput | Tour_ItinerarysWhereUniqueInput[]
    update?: Tour_ItinerarysUpdateWithWhereUniqueWithoutToursInput | Tour_ItinerarysUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: Tour_ItinerarysUpdateManyWithWhereWithoutToursInput | Tour_ItinerarysUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: Tour_ItinerarysScalarWhereInput | Tour_ItinerarysScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutAdmin_LogsInput = {
    create?: XOR<UsersCreateWithoutAdmin_LogsInput, UsersUncheckedCreateWithoutAdmin_LogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAdmin_LogsInput
    connect?: UsersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneRequiredWithoutAdmin_LogsNestedInput = {
    create?: XOR<UsersCreateWithoutAdmin_LogsInput, UsersUncheckedCreateWithoutAdmin_LogsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAdmin_LogsInput
    upsert?: UsersUpsertWithoutAdmin_LogsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAdmin_LogsInput, UsersUpdateWithoutAdmin_LogsInput>, UsersUncheckedUpdateWithoutAdmin_LogsInput>
  }

  export type ToursCreateNestedOneWithoutLocationsInput = {
    create?: XOR<ToursCreateWithoutLocationsInput, ToursUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: ToursCreateOrConnectWithoutLocationsInput
    connect?: ToursWhereUniqueInput
  }

  export type ToursUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<ToursCreateWithoutLocationsInput, ToursUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: ToursCreateOrConnectWithoutLocationsInput
    upsert?: ToursUpsertWithoutLocationsInput
    connect?: ToursWhereUniqueInput
    update?: XOR<XOR<ToursUpdateToOneWithWhereWithoutLocationsInput, ToursUpdateWithoutLocationsInput>, ToursUncheckedUpdateWithoutLocationsInput>
  }

  export type UsersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookingsInput
    connect?: UsersWhereUniqueInput
  }

  export type ToursCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ToursCreateWithoutBookingsInput, ToursUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ToursCreateOrConnectWithoutBookingsInput
    connect?: ToursWhereUniqueInput
  }

  export type PaymentsCreateNestedManyWithoutBookingsInput = {
    create?: XOR<PaymentsCreateWithoutBookingsInput, PaymentsUncheckedCreateWithoutBookingsInput> | PaymentsCreateWithoutBookingsInput[] | PaymentsUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingsInput | PaymentsCreateOrConnectWithoutBookingsInput[]
    createMany?: PaymentsCreateManyBookingsInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutBookingsInput = {
    create?: XOR<PaymentsCreateWithoutBookingsInput, PaymentsUncheckedCreateWithoutBookingsInput> | PaymentsCreateWithoutBookingsInput[] | PaymentsUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingsInput | PaymentsCreateOrConnectWithoutBookingsInput[]
    createMany?: PaymentsCreateManyBookingsInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookingsInput
    upsert?: UsersUpsertWithoutBookingsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBookingsInput, UsersUpdateWithoutBookingsInput>, UsersUncheckedUpdateWithoutBookingsInput>
  }

  export type ToursUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ToursCreateWithoutBookingsInput, ToursUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ToursCreateOrConnectWithoutBookingsInput
    upsert?: ToursUpsertWithoutBookingsInput
    connect?: ToursWhereUniqueInput
    update?: XOR<XOR<ToursUpdateToOneWithWhereWithoutBookingsInput, ToursUpdateWithoutBookingsInput>, ToursUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentsUpdateManyWithoutBookingsNestedInput = {
    create?: XOR<PaymentsCreateWithoutBookingsInput, PaymentsUncheckedCreateWithoutBookingsInput> | PaymentsCreateWithoutBookingsInput[] | PaymentsUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingsInput | PaymentsCreateOrConnectWithoutBookingsInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutBookingsInput | PaymentsUpsertWithWhereUniqueWithoutBookingsInput[]
    createMany?: PaymentsCreateManyBookingsInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutBookingsInput | PaymentsUpdateWithWhereUniqueWithoutBookingsInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutBookingsInput | PaymentsUpdateManyWithWhereWithoutBookingsInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutBookingsNestedInput = {
    create?: XOR<PaymentsCreateWithoutBookingsInput, PaymentsUncheckedCreateWithoutBookingsInput> | PaymentsCreateWithoutBookingsInput[] | PaymentsUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutBookingsInput | PaymentsCreateOrConnectWithoutBookingsInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutBookingsInput | PaymentsUpsertWithWhereUniqueWithoutBookingsInput[]
    createMany?: PaymentsCreateManyBookingsInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutBookingsInput | PaymentsUpdateWithWhereUniqueWithoutBookingsInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutBookingsInput | PaymentsUpdateManyWithWhereWithoutBookingsInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type ReviewsCreateNestedOneWithoutReviewImagesInput = {
    create?: XOR<ReviewsCreateWithoutReviewImagesInput, ReviewsUncheckedCreateWithoutReviewImagesInput>
    connectOrCreate?: ReviewsCreateOrConnectWithoutReviewImagesInput
    connect?: ReviewsWhereUniqueInput
  }

  export type ReviewsUpdateOneRequiredWithoutReviewImagesNestedInput = {
    create?: XOR<ReviewsCreateWithoutReviewImagesInput, ReviewsUncheckedCreateWithoutReviewImagesInput>
    connectOrCreate?: ReviewsCreateOrConnectWithoutReviewImagesInput
    upsert?: ReviewsUpsertWithoutReviewImagesInput
    connect?: ReviewsWhereUniqueInput
    update?: XOR<XOR<ReviewsUpdateToOneWithWhereWithoutReviewImagesInput, ReviewsUpdateWithoutReviewImagesInput>, ReviewsUncheckedUpdateWithoutReviewImagesInput>
  }

  export type UsersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    connect?: UsersWhereUniqueInput
  }

  export type ToursCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ToursCreateWithoutReviewsInput, ToursUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ToursCreateOrConnectWithoutReviewsInput
    connect?: ToursWhereUniqueInput
  }

  export type ReviewImageCreateNestedManyWithoutReviewsInput = {
    create?: XOR<ReviewImageCreateWithoutReviewsInput, ReviewImageUncheckedCreateWithoutReviewsInput> | ReviewImageCreateWithoutReviewsInput[] | ReviewImageUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: ReviewImageCreateOrConnectWithoutReviewsInput | ReviewImageCreateOrConnectWithoutReviewsInput[]
    createMany?: ReviewImageCreateManyReviewsInputEnvelope
    connect?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
  }

  export type ReviewImageUncheckedCreateNestedManyWithoutReviewsInput = {
    create?: XOR<ReviewImageCreateWithoutReviewsInput, ReviewImageUncheckedCreateWithoutReviewsInput> | ReviewImageCreateWithoutReviewsInput[] | ReviewImageUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: ReviewImageCreateOrConnectWithoutReviewsInput | ReviewImageCreateOrConnectWithoutReviewsInput[]
    createMany?: ReviewImageCreateManyReviewsInputEnvelope
    connect?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    upsert?: UsersUpsertWithoutReviewsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReviewsInput, UsersUpdateWithoutReviewsInput>, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type ToursUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ToursCreateWithoutReviewsInput, ToursUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ToursCreateOrConnectWithoutReviewsInput
    upsert?: ToursUpsertWithoutReviewsInput
    connect?: ToursWhereUniqueInput
    update?: XOR<XOR<ToursUpdateToOneWithWhereWithoutReviewsInput, ToursUpdateWithoutReviewsInput>, ToursUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewImageUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<ReviewImageCreateWithoutReviewsInput, ReviewImageUncheckedCreateWithoutReviewsInput> | ReviewImageCreateWithoutReviewsInput[] | ReviewImageUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: ReviewImageCreateOrConnectWithoutReviewsInput | ReviewImageCreateOrConnectWithoutReviewsInput[]
    upsert?: ReviewImageUpsertWithWhereUniqueWithoutReviewsInput | ReviewImageUpsertWithWhereUniqueWithoutReviewsInput[]
    createMany?: ReviewImageCreateManyReviewsInputEnvelope
    set?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    disconnect?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    delete?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    connect?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    update?: ReviewImageUpdateWithWhereUniqueWithoutReviewsInput | ReviewImageUpdateWithWhereUniqueWithoutReviewsInput[]
    updateMany?: ReviewImageUpdateManyWithWhereWithoutReviewsInput | ReviewImageUpdateManyWithWhereWithoutReviewsInput[]
    deleteMany?: ReviewImageScalarWhereInput | ReviewImageScalarWhereInput[]
  }

  export type ReviewImageUncheckedUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<ReviewImageCreateWithoutReviewsInput, ReviewImageUncheckedCreateWithoutReviewsInput> | ReviewImageCreateWithoutReviewsInput[] | ReviewImageUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: ReviewImageCreateOrConnectWithoutReviewsInput | ReviewImageCreateOrConnectWithoutReviewsInput[]
    upsert?: ReviewImageUpsertWithWhereUniqueWithoutReviewsInput | ReviewImageUpsertWithWhereUniqueWithoutReviewsInput[]
    createMany?: ReviewImageCreateManyReviewsInputEnvelope
    set?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    disconnect?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    delete?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    connect?: ReviewImageWhereUniqueInput | ReviewImageWhereUniqueInput[]
    update?: ReviewImageUpdateWithWhereUniqueWithoutReviewsInput | ReviewImageUpdateWithWhereUniqueWithoutReviewsInput[]
    updateMany?: ReviewImageUpdateManyWithWhereWithoutReviewsInput | ReviewImageUpdateManyWithWhereWithoutReviewsInput[]
    deleteMany?: ReviewImageScalarWhereInput | ReviewImageScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    upsert?: UsersUpsertWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutNotificationsInput, UsersUpdateWithoutNotificationsInput>, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type BookingsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BookingsCreateWithoutPaymentsInput, BookingsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingsCreateOrConnectWithoutPaymentsInput
    connect?: BookingsWhereUniqueInput
  }

  export type BookingsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<BookingsCreateWithoutPaymentsInput, BookingsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingsCreateOrConnectWithoutPaymentsInput
    upsert?: BookingsUpsertWithoutPaymentsInput
    connect?: BookingsWhereUniqueInput
    update?: XOR<XOR<BookingsUpdateToOneWithWhereWithoutPaymentsInput, BookingsUpdateWithoutPaymentsInput>, BookingsUncheckedUpdateWithoutPaymentsInput>
  }

  export type ToursCreateNestedOneWithoutTour_ImagesInput = {
    create?: XOR<ToursCreateWithoutTour_ImagesInput, ToursUncheckedCreateWithoutTour_ImagesInput>
    connectOrCreate?: ToursCreateOrConnectWithoutTour_ImagesInput
    connect?: ToursWhereUniqueInput
  }

  export type ToursUpdateOneRequiredWithoutTour_ImagesNestedInput = {
    create?: XOR<ToursCreateWithoutTour_ImagesInput, ToursUncheckedCreateWithoutTour_ImagesInput>
    connectOrCreate?: ToursCreateOrConnectWithoutTour_ImagesInput
    upsert?: ToursUpsertWithoutTour_ImagesInput
    connect?: ToursWhereUniqueInput
    update?: XOR<XOR<ToursUpdateToOneWithWhereWithoutTour_ImagesInput, ToursUpdateWithoutTour_ImagesInput>, ToursUncheckedUpdateWithoutTour_ImagesInput>
  }

  export type ToursCreateNestedOneWithoutTour_LogsInput = {
    create?: XOR<ToursCreateWithoutTour_LogsInput, ToursUncheckedCreateWithoutTour_LogsInput>
    connectOrCreate?: ToursCreateOrConnectWithoutTour_LogsInput
    connect?: ToursWhereUniqueInput
  }

  export type ToursUpdateOneRequiredWithoutTour_LogsNestedInput = {
    create?: XOR<ToursCreateWithoutTour_LogsInput, ToursUncheckedCreateWithoutTour_LogsInput>
    connectOrCreate?: ToursCreateOrConnectWithoutTour_LogsInput
    upsert?: ToursUpsertWithoutTour_LogsInput
    connect?: ToursWhereUniqueInput
    update?: XOR<XOR<ToursUpdateToOneWithWhereWithoutTour_LogsInput, ToursUpdateWithoutTour_LogsInput>, ToursUncheckedUpdateWithoutTour_LogsInput>
  }

  export type ToursCreateNestedOneWithoutTour_ItinerarysInput = {
    create?: XOR<ToursCreateWithoutTour_ItinerarysInput, ToursUncheckedCreateWithoutTour_ItinerarysInput>
    connectOrCreate?: ToursCreateOrConnectWithoutTour_ItinerarysInput
    connect?: ToursWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ToursUpdateOneRequiredWithoutTour_ItinerarysNestedInput = {
    create?: XOR<ToursCreateWithoutTour_ItinerarysInput, ToursUncheckedCreateWithoutTour_ItinerarysInput>
    connectOrCreate?: ToursCreateOrConnectWithoutTour_ItinerarysInput
    upsert?: ToursUpsertWithoutTour_ItinerarysInput
    connect?: ToursWhereUniqueInput
    update?: XOR<XOR<ToursUpdateToOneWithWhereWithoutTour_ItinerarysInput, ToursUpdateWithoutTour_ItinerarysInput>, ToursUncheckedUpdateWithoutTour_ItinerarysInput>
  }

  export type UsersCreateNestedOneWithoutChatbot_HistoryInput = {
    create?: XOR<UsersCreateWithoutChatbot_HistoryInput, UsersUncheckedCreateWithoutChatbot_HistoryInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatbot_HistoryInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneWithoutChatbot_HistoryNestedInput = {
    create?: XOR<UsersCreateWithoutChatbot_HistoryInput, UsersUncheckedCreateWithoutChatbot_HistoryInput>
    connectOrCreate?: UsersCreateOrConnectWithoutChatbot_HistoryInput
    upsert?: UsersUpsertWithoutChatbot_HistoryInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutChatbot_HistoryInput, UsersUpdateWithoutChatbot_HistoryInput>, UsersUncheckedUpdateWithoutChatbot_HistoryInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCreateNestedOneWithoutAI_RecommendationsInput = {
    create?: XOR<UsersCreateWithoutAI_RecommendationsInput, UsersUncheckedCreateWithoutAI_RecommendationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAI_RecommendationsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneWithoutAI_RecommendationsNestedInput = {
    create?: XOR<UsersCreateWithoutAI_RecommendationsInput, UsersUncheckedCreateWithoutAI_RecommendationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAI_RecommendationsInput
    upsert?: UsersUpsertWithoutAI_RecommendationsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAI_RecommendationsInput, UsersUpdateWithoutAI_RecommendationsInput>, UsersUncheckedUpdateWithoutAI_RecommendationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BookingsCreateWithoutUsersInput = {
    number_of_people: number
    booking_date?: Date | string
    status?: string
    Tours: ToursCreateNestedOneWithoutBookingsInput
    Payments?: PaymentsCreateNestedManyWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutUsersInput = {
    booking_id?: number
    tour_id: number
    number_of_people: number
    booking_date?: Date | string
    status?: string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutBookingsInput
  }

  export type BookingsCreateOrConnectWithoutUsersInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutUsersInput, BookingsUncheckedCreateWithoutUsersInput>
  }

  export type BookingsCreateManyUsersInputEnvelope = {
    data: BookingsCreateManyUsersInput | BookingsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutUsersInput = {
    rating: number
    comment?: string | null
    review_date?: Date | string
    Tours: ToursCreateNestedOneWithoutReviewsInput
    ReviewImages?: ReviewImageCreateNestedManyWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutUsersInput = {
    review_id?: number
    tour_id: number
    rating: number
    comment?: string | null
    review_date?: Date | string
    ReviewImages?: ReviewImageUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewsCreateOrConnectWithoutUsersInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput>
  }

  export type ReviewsCreateManyUsersInputEnvelope = {
    data: ReviewsCreateManyUsersInput | ReviewsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutUsersInput = {
    message: string
    notification_date?: Date | string
  }

  export type NotificationsUncheckedCreateWithoutUsersInput = {
    notification_id?: number
    message: string
    notification_date?: Date | string
  }

  export type NotificationsCreateOrConnectWithoutUsersInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput>
  }

  export type NotificationsCreateManyUsersInputEnvelope = {
    data: NotificationsCreateManyUsersInput | NotificationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type Admin_LogsCreateWithoutAdminInput = {
    action: string
    action_date?: Date | string
  }

  export type Admin_LogsUncheckedCreateWithoutAdminInput = {
    log_id?: number
    action: string
    action_date?: Date | string
  }

  export type Admin_LogsCreateOrConnectWithoutAdminInput = {
    where: Admin_LogsWhereUniqueInput
    create: XOR<Admin_LogsCreateWithoutAdminInput, Admin_LogsUncheckedCreateWithoutAdminInput>
  }

  export type Admin_LogsCreateManyAdminInputEnvelope = {
    data: Admin_LogsCreateManyAdminInput | Admin_LogsCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type AI_RecommendationsCreateWithoutUsersInput = {
    recommendation_text: string
    created_at?: Date | string
  }

  export type AI_RecommendationsUncheckedCreateWithoutUsersInput = {
    recommendation_id?: number
    recommendation_text: string
    created_at?: Date | string
  }

  export type AI_RecommendationsCreateOrConnectWithoutUsersInput = {
    where: AI_RecommendationsWhereUniqueInput
    create: XOR<AI_RecommendationsCreateWithoutUsersInput, AI_RecommendationsUncheckedCreateWithoutUsersInput>
  }

  export type AI_RecommendationsCreateManyUsersInputEnvelope = {
    data: AI_RecommendationsCreateManyUsersInput | AI_RecommendationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type Chatbot_HistoryCreateWithoutUsersInput = {
    message: string
    sender: string
    timestamp?: Date | string
  }

  export type Chatbot_HistoryUncheckedCreateWithoutUsersInput = {
    chat_id?: number
    message: string
    sender: string
    timestamp?: Date | string
  }

  export type Chatbot_HistoryCreateOrConnectWithoutUsersInput = {
    where: Chatbot_HistoryWhereUniqueInput
    create: XOR<Chatbot_HistoryCreateWithoutUsersInput, Chatbot_HistoryUncheckedCreateWithoutUsersInput>
  }

  export type Chatbot_HistoryCreateManyUsersInputEnvelope = {
    data: Chatbot_HistoryCreateManyUsersInput | Chatbot_HistoryCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type BookingsUpsertWithWhereUniqueWithoutUsersInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutUsersInput, BookingsUncheckedUpdateWithoutUsersInput>
    create: XOR<BookingsCreateWithoutUsersInput, BookingsUncheckedCreateWithoutUsersInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutUsersInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutUsersInput, BookingsUncheckedUpdateWithoutUsersInput>
  }

  export type BookingsUpdateManyWithWhereWithoutUsersInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutUsersInput>
  }

  export type BookingsScalarWhereInput = {
    AND?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    OR?: BookingsScalarWhereInput[]
    NOT?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    booking_id?: IntFilter<"Bookings"> | number
    user_id?: IntFilter<"Bookings"> | number
    tour_id?: IntFilter<"Bookings"> | number
    number_of_people?: IntFilter<"Bookings"> | number
    booking_date?: DateTimeFilter<"Bookings"> | Date | string
    status?: StringFilter<"Bookings"> | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUsersInput, ReviewsUncheckedUpdateWithoutUsersInput>
    create: XOR<ReviewsCreateWithoutUsersInput, ReviewsUncheckedCreateWithoutUsersInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUsersInput, ReviewsUncheckedUpdateWithoutUsersInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUsersInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    review_id?: IntFilter<"Reviews"> | number
    user_id?: IntFilter<"Reviews"> | number
    tour_id?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    comment?: StringNullableFilter<"Reviews"> | string | null
    review_date?: DateTimeFilter<"Reviews"> | Date | string
  }

  export type NotificationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutUsersInput, NotificationsUncheckedUpdateWithoutUsersInput>
    create: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutUsersInput, NotificationsUncheckedUpdateWithoutUsersInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutUsersInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    notification_id?: IntFilter<"Notifications"> | number
    user_id?: IntFilter<"Notifications"> | number
    message?: StringFilter<"Notifications"> | string
    notification_date?: DateTimeFilter<"Notifications"> | Date | string
  }

  export type Admin_LogsUpsertWithWhereUniqueWithoutAdminInput = {
    where: Admin_LogsWhereUniqueInput
    update: XOR<Admin_LogsUpdateWithoutAdminInput, Admin_LogsUncheckedUpdateWithoutAdminInput>
    create: XOR<Admin_LogsCreateWithoutAdminInput, Admin_LogsUncheckedCreateWithoutAdminInput>
  }

  export type Admin_LogsUpdateWithWhereUniqueWithoutAdminInput = {
    where: Admin_LogsWhereUniqueInput
    data: XOR<Admin_LogsUpdateWithoutAdminInput, Admin_LogsUncheckedUpdateWithoutAdminInput>
  }

  export type Admin_LogsUpdateManyWithWhereWithoutAdminInput = {
    where: Admin_LogsScalarWhereInput
    data: XOR<Admin_LogsUpdateManyMutationInput, Admin_LogsUncheckedUpdateManyWithoutAdminInput>
  }

  export type Admin_LogsScalarWhereInput = {
    AND?: Admin_LogsScalarWhereInput | Admin_LogsScalarWhereInput[]
    OR?: Admin_LogsScalarWhereInput[]
    NOT?: Admin_LogsScalarWhereInput | Admin_LogsScalarWhereInput[]
    log_id?: IntFilter<"Admin_Logs"> | number
    admin_id?: IntFilter<"Admin_Logs"> | number
    action?: StringFilter<"Admin_Logs"> | string
    action_date?: DateTimeFilter<"Admin_Logs"> | Date | string
  }

  export type AI_RecommendationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: AI_RecommendationsWhereUniqueInput
    update: XOR<AI_RecommendationsUpdateWithoutUsersInput, AI_RecommendationsUncheckedUpdateWithoutUsersInput>
    create: XOR<AI_RecommendationsCreateWithoutUsersInput, AI_RecommendationsUncheckedCreateWithoutUsersInput>
  }

  export type AI_RecommendationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: AI_RecommendationsWhereUniqueInput
    data: XOR<AI_RecommendationsUpdateWithoutUsersInput, AI_RecommendationsUncheckedUpdateWithoutUsersInput>
  }

  export type AI_RecommendationsUpdateManyWithWhereWithoutUsersInput = {
    where: AI_RecommendationsScalarWhereInput
    data: XOR<AI_RecommendationsUpdateManyMutationInput, AI_RecommendationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type AI_RecommendationsScalarWhereInput = {
    AND?: AI_RecommendationsScalarWhereInput | AI_RecommendationsScalarWhereInput[]
    OR?: AI_RecommendationsScalarWhereInput[]
    NOT?: AI_RecommendationsScalarWhereInput | AI_RecommendationsScalarWhereInput[]
    recommendation_id?: IntFilter<"AI_Recommendations"> | number
    user_id?: IntNullableFilter<"AI_Recommendations"> | number | null
    recommendation_text?: StringFilter<"AI_Recommendations"> | string
    created_at?: DateTimeFilter<"AI_Recommendations"> | Date | string
  }

  export type Chatbot_HistoryUpsertWithWhereUniqueWithoutUsersInput = {
    where: Chatbot_HistoryWhereUniqueInput
    update: XOR<Chatbot_HistoryUpdateWithoutUsersInput, Chatbot_HistoryUncheckedUpdateWithoutUsersInput>
    create: XOR<Chatbot_HistoryCreateWithoutUsersInput, Chatbot_HistoryUncheckedCreateWithoutUsersInput>
  }

  export type Chatbot_HistoryUpdateWithWhereUniqueWithoutUsersInput = {
    where: Chatbot_HistoryWhereUniqueInput
    data: XOR<Chatbot_HistoryUpdateWithoutUsersInput, Chatbot_HistoryUncheckedUpdateWithoutUsersInput>
  }

  export type Chatbot_HistoryUpdateManyWithWhereWithoutUsersInput = {
    where: Chatbot_HistoryScalarWhereInput
    data: XOR<Chatbot_HistoryUpdateManyMutationInput, Chatbot_HistoryUncheckedUpdateManyWithoutUsersInput>
  }

  export type Chatbot_HistoryScalarWhereInput = {
    AND?: Chatbot_HistoryScalarWhereInput | Chatbot_HistoryScalarWhereInput[]
    OR?: Chatbot_HistoryScalarWhereInput[]
    NOT?: Chatbot_HistoryScalarWhereInput | Chatbot_HistoryScalarWhereInput[]
    chat_id?: IntFilter<"Chatbot_History"> | number
    user_id?: IntNullableFilter<"Chatbot_History"> | number | null
    message?: StringFilter<"Chatbot_History"> | string
    sender?: StringFilter<"Chatbot_History"> | string
    timestamp?: DateTimeFilter<"Chatbot_History"> | Date | string
  }

  export type Tours_LocationCreateWithoutToursInput = {
    location_name: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    description?: string | null
  }

  export type Tours_LocationUncheckedCreateWithoutToursInput = {
    location_id?: number
    location_name: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    description?: string | null
  }

  export type Tours_LocationCreateOrConnectWithoutToursInput = {
    where: Tours_LocationWhereUniqueInput
    create: XOR<Tours_LocationCreateWithoutToursInput, Tours_LocationUncheckedCreateWithoutToursInput>
  }

  export type Tours_LocationCreateManyToursInputEnvelope = {
    data: Tours_LocationCreateManyToursInput | Tours_LocationCreateManyToursInput[]
    skipDuplicates?: boolean
  }

  export type BookingsCreateWithoutToursInput = {
    number_of_people: number
    booking_date?: Date | string
    status?: string
    Users: UsersCreateNestedOneWithoutBookingsInput
    Payments?: PaymentsCreateNestedManyWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutToursInput = {
    booking_id?: number
    user_id: number
    number_of_people: number
    booking_date?: Date | string
    status?: string
    Payments?: PaymentsUncheckedCreateNestedManyWithoutBookingsInput
  }

  export type BookingsCreateOrConnectWithoutToursInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutToursInput, BookingsUncheckedCreateWithoutToursInput>
  }

  export type BookingsCreateManyToursInputEnvelope = {
    data: BookingsCreateManyToursInput | BookingsCreateManyToursInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutToursInput = {
    rating: number
    comment?: string | null
    review_date?: Date | string
    Users: UsersCreateNestedOneWithoutReviewsInput
    ReviewImages?: ReviewImageCreateNestedManyWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutToursInput = {
    review_id?: number
    user_id: number
    rating: number
    comment?: string | null
    review_date?: Date | string
    ReviewImages?: ReviewImageUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewsCreateOrConnectWithoutToursInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutToursInput, ReviewsUncheckedCreateWithoutToursInput>
  }

  export type ReviewsCreateManyToursInputEnvelope = {
    data: ReviewsCreateManyToursInput | ReviewsCreateManyToursInput[]
    skipDuplicates?: boolean
  }

  export type Tour_ImagesCreateWithoutToursInput = {
    image_url: string
    image_order?: number
  }

  export type Tour_ImagesUncheckedCreateWithoutToursInput = {
    image_id?: number
    image_url: string
    image_order?: number
  }

  export type Tour_ImagesCreateOrConnectWithoutToursInput = {
    where: Tour_ImagesWhereUniqueInput
    create: XOR<Tour_ImagesCreateWithoutToursInput, Tour_ImagesUncheckedCreateWithoutToursInput>
  }

  export type Tour_ImagesCreateManyToursInputEnvelope = {
    data: Tour_ImagesCreateManyToursInput | Tour_ImagesCreateManyToursInput[]
    skipDuplicates?: boolean
  }

  export type Tour_LogsCreateWithoutToursInput = {
    action: string
    action_date?: Date | string
  }

  export type Tour_LogsUncheckedCreateWithoutToursInput = {
    log_id?: number
    action: string
    action_date?: Date | string
  }

  export type Tour_LogsCreateOrConnectWithoutToursInput = {
    where: Tour_LogsWhereUniqueInput
    create: XOR<Tour_LogsCreateWithoutToursInput, Tour_LogsUncheckedCreateWithoutToursInput>
  }

  export type Tour_LogsCreateManyToursInputEnvelope = {
    data: Tour_LogsCreateManyToursInput | Tour_LogsCreateManyToursInput[]
    skipDuplicates?: boolean
  }

  export type Tour_ItinerarysCreateWithoutToursInput = {
    day_number: number
    start_time?: Date | string | null
    activity?: string | null
    location?: string | null
  }

  export type Tour_ItinerarysUncheckedCreateWithoutToursInput = {
    itinerary_id?: number
    day_number: number
    start_time?: Date | string | null
    activity?: string | null
    location?: string | null
  }

  export type Tour_ItinerarysCreateOrConnectWithoutToursInput = {
    where: Tour_ItinerarysWhereUniqueInput
    create: XOR<Tour_ItinerarysCreateWithoutToursInput, Tour_ItinerarysUncheckedCreateWithoutToursInput>
  }

  export type Tour_ItinerarysCreateManyToursInputEnvelope = {
    data: Tour_ItinerarysCreateManyToursInput | Tour_ItinerarysCreateManyToursInput[]
    skipDuplicates?: boolean
  }

  export type Tours_LocationUpsertWithWhereUniqueWithoutToursInput = {
    where: Tours_LocationWhereUniqueInput
    update: XOR<Tours_LocationUpdateWithoutToursInput, Tours_LocationUncheckedUpdateWithoutToursInput>
    create: XOR<Tours_LocationCreateWithoutToursInput, Tours_LocationUncheckedCreateWithoutToursInput>
  }

  export type Tours_LocationUpdateWithWhereUniqueWithoutToursInput = {
    where: Tours_LocationWhereUniqueInput
    data: XOR<Tours_LocationUpdateWithoutToursInput, Tours_LocationUncheckedUpdateWithoutToursInput>
  }

  export type Tours_LocationUpdateManyWithWhereWithoutToursInput = {
    where: Tours_LocationScalarWhereInput
    data: XOR<Tours_LocationUpdateManyMutationInput, Tours_LocationUncheckedUpdateManyWithoutToursInput>
  }

  export type Tours_LocationScalarWhereInput = {
    AND?: Tours_LocationScalarWhereInput | Tours_LocationScalarWhereInput[]
    OR?: Tours_LocationScalarWhereInput[]
    NOT?: Tours_LocationScalarWhereInput | Tours_LocationScalarWhereInput[]
    location_id?: IntFilter<"Tours_Location"> | number
    tour_id?: IntFilter<"Tours_Location"> | number
    location_name?: StringFilter<"Tours_Location"> | string
    latitude?: DecimalFilter<"Tours_Location"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Tours_Location"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Tours_Location"> | string | null
  }

  export type BookingsUpsertWithWhereUniqueWithoutToursInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutToursInput, BookingsUncheckedUpdateWithoutToursInput>
    create: XOR<BookingsCreateWithoutToursInput, BookingsUncheckedCreateWithoutToursInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutToursInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutToursInput, BookingsUncheckedUpdateWithoutToursInput>
  }

  export type BookingsUpdateManyWithWhereWithoutToursInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutToursInput>
  }

  export type ReviewsUpsertWithWhereUniqueWithoutToursInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutToursInput, ReviewsUncheckedUpdateWithoutToursInput>
    create: XOR<ReviewsCreateWithoutToursInput, ReviewsUncheckedCreateWithoutToursInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutToursInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutToursInput, ReviewsUncheckedUpdateWithoutToursInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutToursInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutToursInput>
  }

  export type Tour_ImagesUpsertWithWhereUniqueWithoutToursInput = {
    where: Tour_ImagesWhereUniqueInput
    update: XOR<Tour_ImagesUpdateWithoutToursInput, Tour_ImagesUncheckedUpdateWithoutToursInput>
    create: XOR<Tour_ImagesCreateWithoutToursInput, Tour_ImagesUncheckedCreateWithoutToursInput>
  }

  export type Tour_ImagesUpdateWithWhereUniqueWithoutToursInput = {
    where: Tour_ImagesWhereUniqueInput
    data: XOR<Tour_ImagesUpdateWithoutToursInput, Tour_ImagesUncheckedUpdateWithoutToursInput>
  }

  export type Tour_ImagesUpdateManyWithWhereWithoutToursInput = {
    where: Tour_ImagesScalarWhereInput
    data: XOR<Tour_ImagesUpdateManyMutationInput, Tour_ImagesUncheckedUpdateManyWithoutToursInput>
  }

  export type Tour_ImagesScalarWhereInput = {
    AND?: Tour_ImagesScalarWhereInput | Tour_ImagesScalarWhereInput[]
    OR?: Tour_ImagesScalarWhereInput[]
    NOT?: Tour_ImagesScalarWhereInput | Tour_ImagesScalarWhereInput[]
    image_id?: IntFilter<"Tour_Images"> | number
    tour_id?: IntFilter<"Tour_Images"> | number
    image_url?: StringFilter<"Tour_Images"> | string
    image_order?: IntFilter<"Tour_Images"> | number
  }

  export type Tour_LogsUpsertWithWhereUniqueWithoutToursInput = {
    where: Tour_LogsWhereUniqueInput
    update: XOR<Tour_LogsUpdateWithoutToursInput, Tour_LogsUncheckedUpdateWithoutToursInput>
    create: XOR<Tour_LogsCreateWithoutToursInput, Tour_LogsUncheckedCreateWithoutToursInput>
  }

  export type Tour_LogsUpdateWithWhereUniqueWithoutToursInput = {
    where: Tour_LogsWhereUniqueInput
    data: XOR<Tour_LogsUpdateWithoutToursInput, Tour_LogsUncheckedUpdateWithoutToursInput>
  }

  export type Tour_LogsUpdateManyWithWhereWithoutToursInput = {
    where: Tour_LogsScalarWhereInput
    data: XOR<Tour_LogsUpdateManyMutationInput, Tour_LogsUncheckedUpdateManyWithoutToursInput>
  }

  export type Tour_LogsScalarWhereInput = {
    AND?: Tour_LogsScalarWhereInput | Tour_LogsScalarWhereInput[]
    OR?: Tour_LogsScalarWhereInput[]
    NOT?: Tour_LogsScalarWhereInput | Tour_LogsScalarWhereInput[]
    log_id?: IntFilter<"Tour_Logs"> | number
    tour_id?: IntFilter<"Tour_Logs"> | number
    action?: StringFilter<"Tour_Logs"> | string
    action_date?: DateTimeFilter<"Tour_Logs"> | Date | string
  }

  export type Tour_ItinerarysUpsertWithWhereUniqueWithoutToursInput = {
    where: Tour_ItinerarysWhereUniqueInput
    update: XOR<Tour_ItinerarysUpdateWithoutToursInput, Tour_ItinerarysUncheckedUpdateWithoutToursInput>
    create: XOR<Tour_ItinerarysCreateWithoutToursInput, Tour_ItinerarysUncheckedCreateWithoutToursInput>
  }

  export type Tour_ItinerarysUpdateWithWhereUniqueWithoutToursInput = {
    where: Tour_ItinerarysWhereUniqueInput
    data: XOR<Tour_ItinerarysUpdateWithoutToursInput, Tour_ItinerarysUncheckedUpdateWithoutToursInput>
  }

  export type Tour_ItinerarysUpdateManyWithWhereWithoutToursInput = {
    where: Tour_ItinerarysScalarWhereInput
    data: XOR<Tour_ItinerarysUpdateManyMutationInput, Tour_ItinerarysUncheckedUpdateManyWithoutToursInput>
  }

  export type Tour_ItinerarysScalarWhereInput = {
    AND?: Tour_ItinerarysScalarWhereInput | Tour_ItinerarysScalarWhereInput[]
    OR?: Tour_ItinerarysScalarWhereInput[]
    NOT?: Tour_ItinerarysScalarWhereInput | Tour_ItinerarysScalarWhereInput[]
    itinerary_id?: IntFilter<"Tour_Itinerarys"> | number
    tour_id?: IntFilter<"Tour_Itinerarys"> | number
    day_number?: IntFilter<"Tour_Itinerarys"> | number
    start_time?: DateTimeNullableFilter<"Tour_Itinerarys"> | Date | string | null
    activity?: StringNullableFilter<"Tour_Itinerarys"> | string | null
    location?: StringNullableFilter<"Tour_Itinerarys"> | string | null
  }

  export type UsersCreateWithoutAdmin_LogsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Bookings?: BookingsCreateNestedManyWithoutUsersInput
    Reviews?: ReviewsCreateNestedManyWithoutUsersInput
    Notifications?: NotificationsCreateNestedManyWithoutUsersInput
    AI_Recommendations?: AI_RecommendationsCreateNestedManyWithoutUsersInput
    Chatbot_History?: Chatbot_HistoryCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutAdmin_LogsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Bookings?: BookingsUncheckedCreateNestedManyWithoutUsersInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
    Notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    AI_Recommendations?: AI_RecommendationsUncheckedCreateNestedManyWithoutUsersInput
    Chatbot_History?: Chatbot_HistoryUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutAdmin_LogsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAdmin_LogsInput, UsersUncheckedCreateWithoutAdmin_LogsInput>
  }

  export type UsersUpsertWithoutAdmin_LogsInput = {
    update: XOR<UsersUpdateWithoutAdmin_LogsInput, UsersUncheckedUpdateWithoutAdmin_LogsInput>
    create: XOR<UsersCreateWithoutAdmin_LogsInput, UsersUncheckedCreateWithoutAdmin_LogsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAdmin_LogsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAdmin_LogsInput, UsersUncheckedUpdateWithoutAdmin_LogsInput>
  }

  export type UsersUpdateWithoutAdmin_LogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Bookings?: BookingsUpdateManyWithoutUsersNestedInput
    Reviews?: ReviewsUpdateManyWithoutUsersNestedInput
    Notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    AI_Recommendations?: AI_RecommendationsUpdateManyWithoutUsersNestedInput
    Chatbot_History?: Chatbot_HistoryUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutAdmin_LogsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Bookings?: BookingsUncheckedUpdateManyWithoutUsersNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
    Notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    AI_Recommendations?: AI_RecommendationsUncheckedUpdateManyWithoutUsersNestedInput
    Chatbot_History?: Chatbot_HistoryUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ToursCreateWithoutLocationsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    Bookings?: BookingsCreateNestedManyWithoutToursInput
    Reviews?: ReviewsCreateNestedManyWithoutToursInput
    Tour_Images?: Tour_ImagesCreateNestedManyWithoutToursInput
    Tour_Logs?: Tour_LogsCreateNestedManyWithoutToursInput
    Tour_Itinerarys?: Tour_ItinerarysCreateNestedManyWithoutToursInput
  }

  export type ToursUncheckedCreateWithoutLocationsInput = {
    tour_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    Bookings?: BookingsUncheckedCreateNestedManyWithoutToursInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutToursInput
    Tour_Images?: Tour_ImagesUncheckedCreateNestedManyWithoutToursInput
    Tour_Logs?: Tour_LogsUncheckedCreateNestedManyWithoutToursInput
    Tour_Itinerarys?: Tour_ItinerarysUncheckedCreateNestedManyWithoutToursInput
  }

  export type ToursCreateOrConnectWithoutLocationsInput = {
    where: ToursWhereUniqueInput
    create: XOR<ToursCreateWithoutLocationsInput, ToursUncheckedCreateWithoutLocationsInput>
  }

  export type ToursUpsertWithoutLocationsInput = {
    update: XOR<ToursUpdateWithoutLocationsInput, ToursUncheckedUpdateWithoutLocationsInput>
    create: XOR<ToursCreateWithoutLocationsInput, ToursUncheckedCreateWithoutLocationsInput>
    where?: ToursWhereInput
  }

  export type ToursUpdateToOneWithWhereWithoutLocationsInput = {
    where?: ToursWhereInput
    data: XOR<ToursUpdateWithoutLocationsInput, ToursUncheckedUpdateWithoutLocationsInput>
  }

  export type ToursUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    Bookings?: BookingsUpdateManyWithoutToursNestedInput
    Reviews?: ReviewsUpdateManyWithoutToursNestedInput
    Tour_Images?: Tour_ImagesUpdateManyWithoutToursNestedInput
    Tour_Logs?: Tour_LogsUpdateManyWithoutToursNestedInput
    Tour_Itinerarys?: Tour_ItinerarysUpdateManyWithoutToursNestedInput
  }

  export type ToursUncheckedUpdateWithoutLocationsInput = {
    tour_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    Bookings?: BookingsUncheckedUpdateManyWithoutToursNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutToursNestedInput
    Tour_Images?: Tour_ImagesUncheckedUpdateManyWithoutToursNestedInput
    Tour_Logs?: Tour_LogsUncheckedUpdateManyWithoutToursNestedInput
    Tour_Itinerarys?: Tour_ItinerarysUncheckedUpdateManyWithoutToursNestedInput
  }

  export type UsersCreateWithoutBookingsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Reviews?: ReviewsCreateNestedManyWithoutUsersInput
    Notifications?: NotificationsCreateNestedManyWithoutUsersInput
    Admin_Logs?: Admin_LogsCreateNestedManyWithoutAdminInput
    AI_Recommendations?: AI_RecommendationsCreateNestedManyWithoutUsersInput
    Chatbot_History?: Chatbot_HistoryCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutBookingsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
    Notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    Admin_Logs?: Admin_LogsUncheckedCreateNestedManyWithoutAdminInput
    AI_Recommendations?: AI_RecommendationsUncheckedCreateNestedManyWithoutUsersInput
    Chatbot_History?: Chatbot_HistoryUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutBookingsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
  }

  export type ToursCreateWithoutBookingsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    locations?: Tours_LocationCreateNestedManyWithoutToursInput
    Reviews?: ReviewsCreateNestedManyWithoutToursInput
    Tour_Images?: Tour_ImagesCreateNestedManyWithoutToursInput
    Tour_Logs?: Tour_LogsCreateNestedManyWithoutToursInput
    Tour_Itinerarys?: Tour_ItinerarysCreateNestedManyWithoutToursInput
  }

  export type ToursUncheckedCreateWithoutBookingsInput = {
    tour_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    locations?: Tours_LocationUncheckedCreateNestedManyWithoutToursInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutToursInput
    Tour_Images?: Tour_ImagesUncheckedCreateNestedManyWithoutToursInput
    Tour_Logs?: Tour_LogsUncheckedCreateNestedManyWithoutToursInput
    Tour_Itinerarys?: Tour_ItinerarysUncheckedCreateNestedManyWithoutToursInput
  }

  export type ToursCreateOrConnectWithoutBookingsInput = {
    where: ToursWhereUniqueInput
    create: XOR<ToursCreateWithoutBookingsInput, ToursUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentsCreateWithoutBookingsInput = {
    payment_date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    status?: string
  }

  export type PaymentsUncheckedCreateWithoutBookingsInput = {
    payment_id?: number
    payment_date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    status?: string
  }

  export type PaymentsCreateOrConnectWithoutBookingsInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutBookingsInput, PaymentsUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentsCreateManyBookingsInputEnvelope = {
    data: PaymentsCreateManyBookingsInput | PaymentsCreateManyBookingsInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutBookingsInput = {
    update: XOR<UsersUpdateWithoutBookingsInput, UsersUncheckedUpdateWithoutBookingsInput>
    create: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBookingsInput, UsersUncheckedUpdateWithoutBookingsInput>
  }

  export type UsersUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Reviews?: ReviewsUpdateManyWithoutUsersNestedInput
    Notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    Admin_Logs?: Admin_LogsUpdateManyWithoutAdminNestedInput
    AI_Recommendations?: AI_RecommendationsUpdateManyWithoutUsersNestedInput
    Chatbot_History?: Chatbot_HistoryUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutBookingsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
    Notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    Admin_Logs?: Admin_LogsUncheckedUpdateManyWithoutAdminNestedInput
    AI_Recommendations?: AI_RecommendationsUncheckedUpdateManyWithoutUsersNestedInput
    Chatbot_History?: Chatbot_HistoryUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ToursUpsertWithoutBookingsInput = {
    update: XOR<ToursUpdateWithoutBookingsInput, ToursUncheckedUpdateWithoutBookingsInput>
    create: XOR<ToursCreateWithoutBookingsInput, ToursUncheckedCreateWithoutBookingsInput>
    where?: ToursWhereInput
  }

  export type ToursUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ToursWhereInput
    data: XOR<ToursUpdateWithoutBookingsInput, ToursUncheckedUpdateWithoutBookingsInput>
  }

  export type ToursUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    locations?: Tours_LocationUpdateManyWithoutToursNestedInput
    Reviews?: ReviewsUpdateManyWithoutToursNestedInput
    Tour_Images?: Tour_ImagesUpdateManyWithoutToursNestedInput
    Tour_Logs?: Tour_LogsUpdateManyWithoutToursNestedInput
    Tour_Itinerarys?: Tour_ItinerarysUpdateManyWithoutToursNestedInput
  }

  export type ToursUncheckedUpdateWithoutBookingsInput = {
    tour_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    locations?: Tours_LocationUncheckedUpdateManyWithoutToursNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutToursNestedInput
    Tour_Images?: Tour_ImagesUncheckedUpdateManyWithoutToursNestedInput
    Tour_Logs?: Tour_LogsUncheckedUpdateManyWithoutToursNestedInput
    Tour_Itinerarys?: Tour_ItinerarysUncheckedUpdateManyWithoutToursNestedInput
  }

  export type PaymentsUpsertWithWhereUniqueWithoutBookingsInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutBookingsInput, PaymentsUncheckedUpdateWithoutBookingsInput>
    create: XOR<PaymentsCreateWithoutBookingsInput, PaymentsUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutBookingsInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutBookingsInput, PaymentsUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutBookingsInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutBookingsInput>
  }

  export type PaymentsScalarWhereInput = {
    AND?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    OR?: PaymentsScalarWhereInput[]
    NOT?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    payment_id?: IntFilter<"Payments"> | number
    booking_id?: IntFilter<"Payments"> | number
    payment_date?: DateTimeFilter<"Payments"> | Date | string
    amount?: DecimalFilter<"Payments"> | Decimal | DecimalJsLike | number | string
    payment_method?: StringFilter<"Payments"> | string
    status?: StringFilter<"Payments"> | string
  }

  export type ReviewsCreateWithoutReviewImagesInput = {
    rating: number
    comment?: string | null
    review_date?: Date | string
    Users: UsersCreateNestedOneWithoutReviewsInput
    Tours: ToursCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutReviewImagesInput = {
    review_id?: number
    user_id: number
    tour_id: number
    rating: number
    comment?: string | null
    review_date?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutReviewImagesInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutReviewImagesInput, ReviewsUncheckedCreateWithoutReviewImagesInput>
  }

  export type ReviewsUpsertWithoutReviewImagesInput = {
    update: XOR<ReviewsUpdateWithoutReviewImagesInput, ReviewsUncheckedUpdateWithoutReviewImagesInput>
    create: XOR<ReviewsCreateWithoutReviewImagesInput, ReviewsUncheckedCreateWithoutReviewImagesInput>
    where?: ReviewsWhereInput
  }

  export type ReviewsUpdateToOneWithWhereWithoutReviewImagesInput = {
    where?: ReviewsWhereInput
    data: XOR<ReviewsUpdateWithoutReviewImagesInput, ReviewsUncheckedUpdateWithoutReviewImagesInput>
  }

  export type ReviewsUpdateWithoutReviewImagesInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    Tours?: ToursUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutReviewImagesInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateWithoutReviewsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Bookings?: BookingsCreateNestedManyWithoutUsersInput
    Notifications?: NotificationsCreateNestedManyWithoutUsersInput
    Admin_Logs?: Admin_LogsCreateNestedManyWithoutAdminInput
    AI_Recommendations?: AI_RecommendationsCreateNestedManyWithoutUsersInput
    Chatbot_History?: Chatbot_HistoryCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutReviewsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Bookings?: BookingsUncheckedCreateNestedManyWithoutUsersInput
    Notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    Admin_Logs?: Admin_LogsUncheckedCreateNestedManyWithoutAdminInput
    AI_Recommendations?: AI_RecommendationsUncheckedCreateNestedManyWithoutUsersInput
    Chatbot_History?: Chatbot_HistoryUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutReviewsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
  }

  export type ToursCreateWithoutReviewsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    locations?: Tours_LocationCreateNestedManyWithoutToursInput
    Bookings?: BookingsCreateNestedManyWithoutToursInput
    Tour_Images?: Tour_ImagesCreateNestedManyWithoutToursInput
    Tour_Logs?: Tour_LogsCreateNestedManyWithoutToursInput
    Tour_Itinerarys?: Tour_ItinerarysCreateNestedManyWithoutToursInput
  }

  export type ToursUncheckedCreateWithoutReviewsInput = {
    tour_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    locations?: Tours_LocationUncheckedCreateNestedManyWithoutToursInput
    Bookings?: BookingsUncheckedCreateNestedManyWithoutToursInput
    Tour_Images?: Tour_ImagesUncheckedCreateNestedManyWithoutToursInput
    Tour_Logs?: Tour_LogsUncheckedCreateNestedManyWithoutToursInput
    Tour_Itinerarys?: Tour_ItinerarysUncheckedCreateNestedManyWithoutToursInput
  }

  export type ToursCreateOrConnectWithoutReviewsInput = {
    where: ToursWhereUniqueInput
    create: XOR<ToursCreateWithoutReviewsInput, ToursUncheckedCreateWithoutReviewsInput>
  }

  export type ReviewImageCreateWithoutReviewsInput = {
    image_url: string
  }

  export type ReviewImageUncheckedCreateWithoutReviewsInput = {
    id?: number
    image_url: string
  }

  export type ReviewImageCreateOrConnectWithoutReviewsInput = {
    where: ReviewImageWhereUniqueInput
    create: XOR<ReviewImageCreateWithoutReviewsInput, ReviewImageUncheckedCreateWithoutReviewsInput>
  }

  export type ReviewImageCreateManyReviewsInputEnvelope = {
    data: ReviewImageCreateManyReviewsInput | ReviewImageCreateManyReviewsInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutReviewsInput = {
    update: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Bookings?: BookingsUpdateManyWithoutUsersNestedInput
    Notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    Admin_Logs?: Admin_LogsUpdateManyWithoutAdminNestedInput
    AI_Recommendations?: AI_RecommendationsUpdateManyWithoutUsersNestedInput
    Chatbot_History?: Chatbot_HistoryUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutReviewsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Bookings?: BookingsUncheckedUpdateManyWithoutUsersNestedInput
    Notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    Admin_Logs?: Admin_LogsUncheckedUpdateManyWithoutAdminNestedInput
    AI_Recommendations?: AI_RecommendationsUncheckedUpdateManyWithoutUsersNestedInput
    Chatbot_History?: Chatbot_HistoryUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ToursUpsertWithoutReviewsInput = {
    update: XOR<ToursUpdateWithoutReviewsInput, ToursUncheckedUpdateWithoutReviewsInput>
    create: XOR<ToursCreateWithoutReviewsInput, ToursUncheckedCreateWithoutReviewsInput>
    where?: ToursWhereInput
  }

  export type ToursUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ToursWhereInput
    data: XOR<ToursUpdateWithoutReviewsInput, ToursUncheckedUpdateWithoutReviewsInput>
  }

  export type ToursUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    locations?: Tours_LocationUpdateManyWithoutToursNestedInput
    Bookings?: BookingsUpdateManyWithoutToursNestedInput
    Tour_Images?: Tour_ImagesUpdateManyWithoutToursNestedInput
    Tour_Logs?: Tour_LogsUpdateManyWithoutToursNestedInput
    Tour_Itinerarys?: Tour_ItinerarysUpdateManyWithoutToursNestedInput
  }

  export type ToursUncheckedUpdateWithoutReviewsInput = {
    tour_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    locations?: Tours_LocationUncheckedUpdateManyWithoutToursNestedInput
    Bookings?: BookingsUncheckedUpdateManyWithoutToursNestedInput
    Tour_Images?: Tour_ImagesUncheckedUpdateManyWithoutToursNestedInput
    Tour_Logs?: Tour_LogsUncheckedUpdateManyWithoutToursNestedInput
    Tour_Itinerarys?: Tour_ItinerarysUncheckedUpdateManyWithoutToursNestedInput
  }

  export type ReviewImageUpsertWithWhereUniqueWithoutReviewsInput = {
    where: ReviewImageWhereUniqueInput
    update: XOR<ReviewImageUpdateWithoutReviewsInput, ReviewImageUncheckedUpdateWithoutReviewsInput>
    create: XOR<ReviewImageCreateWithoutReviewsInput, ReviewImageUncheckedCreateWithoutReviewsInput>
  }

  export type ReviewImageUpdateWithWhereUniqueWithoutReviewsInput = {
    where: ReviewImageWhereUniqueInput
    data: XOR<ReviewImageUpdateWithoutReviewsInput, ReviewImageUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewImageUpdateManyWithWhereWithoutReviewsInput = {
    where: ReviewImageScalarWhereInput
    data: XOR<ReviewImageUpdateManyMutationInput, ReviewImageUncheckedUpdateManyWithoutReviewsInput>
  }

  export type ReviewImageScalarWhereInput = {
    AND?: ReviewImageScalarWhereInput | ReviewImageScalarWhereInput[]
    OR?: ReviewImageScalarWhereInput[]
    NOT?: ReviewImageScalarWhereInput | ReviewImageScalarWhereInput[]
    id?: IntFilter<"ReviewImage"> | number
    review_id?: IntFilter<"ReviewImage"> | number
    image_url?: StringFilter<"ReviewImage"> | string
  }

  export type UsersCreateWithoutNotificationsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Bookings?: BookingsCreateNestedManyWithoutUsersInput
    Reviews?: ReviewsCreateNestedManyWithoutUsersInput
    Admin_Logs?: Admin_LogsCreateNestedManyWithoutAdminInput
    AI_Recommendations?: AI_RecommendationsCreateNestedManyWithoutUsersInput
    Chatbot_History?: Chatbot_HistoryCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutNotificationsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Bookings?: BookingsUncheckedCreateNestedManyWithoutUsersInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
    Admin_Logs?: Admin_LogsUncheckedCreateNestedManyWithoutAdminInput
    AI_Recommendations?: AI_RecommendationsUncheckedCreateNestedManyWithoutUsersInput
    Chatbot_History?: Chatbot_HistoryUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutNotificationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
  }

  export type UsersUpsertWithoutNotificationsInput = {
    update: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type UsersUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Bookings?: BookingsUpdateManyWithoutUsersNestedInput
    Reviews?: ReviewsUpdateManyWithoutUsersNestedInput
    Admin_Logs?: Admin_LogsUpdateManyWithoutAdminNestedInput
    AI_Recommendations?: AI_RecommendationsUpdateManyWithoutUsersNestedInput
    Chatbot_History?: Chatbot_HistoryUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutNotificationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Bookings?: BookingsUncheckedUpdateManyWithoutUsersNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
    Admin_Logs?: Admin_LogsUncheckedUpdateManyWithoutAdminNestedInput
    AI_Recommendations?: AI_RecommendationsUncheckedUpdateManyWithoutUsersNestedInput
    Chatbot_History?: Chatbot_HistoryUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type BookingsCreateWithoutPaymentsInput = {
    number_of_people: number
    booking_date?: Date | string
    status?: string
    Users: UsersCreateNestedOneWithoutBookingsInput
    Tours: ToursCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutPaymentsInput = {
    booking_id?: number
    user_id: number
    tour_id: number
    number_of_people: number
    booking_date?: Date | string
    status?: string
  }

  export type BookingsCreateOrConnectWithoutPaymentsInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutPaymentsInput, BookingsUncheckedCreateWithoutPaymentsInput>
  }

  export type BookingsUpsertWithoutPaymentsInput = {
    update: XOR<BookingsUpdateWithoutPaymentsInput, BookingsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BookingsCreateWithoutPaymentsInput, BookingsUncheckedCreateWithoutPaymentsInput>
    where?: BookingsWhereInput
  }

  export type BookingsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BookingsWhereInput
    data: XOR<BookingsUpdateWithoutPaymentsInput, BookingsUncheckedUpdateWithoutPaymentsInput>
  }

  export type BookingsUpdateWithoutPaymentsInput = {
    number_of_people?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Users?: UsersUpdateOneRequiredWithoutBookingsNestedInput
    Tours?: ToursUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutPaymentsInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    number_of_people?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ToursCreateWithoutTour_ImagesInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    locations?: Tours_LocationCreateNestedManyWithoutToursInput
    Bookings?: BookingsCreateNestedManyWithoutToursInput
    Reviews?: ReviewsCreateNestedManyWithoutToursInput
    Tour_Logs?: Tour_LogsCreateNestedManyWithoutToursInput
    Tour_Itinerarys?: Tour_ItinerarysCreateNestedManyWithoutToursInput
  }

  export type ToursUncheckedCreateWithoutTour_ImagesInput = {
    tour_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    locations?: Tours_LocationUncheckedCreateNestedManyWithoutToursInput
    Bookings?: BookingsUncheckedCreateNestedManyWithoutToursInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutToursInput
    Tour_Logs?: Tour_LogsUncheckedCreateNestedManyWithoutToursInput
    Tour_Itinerarys?: Tour_ItinerarysUncheckedCreateNestedManyWithoutToursInput
  }

  export type ToursCreateOrConnectWithoutTour_ImagesInput = {
    where: ToursWhereUniqueInput
    create: XOR<ToursCreateWithoutTour_ImagesInput, ToursUncheckedCreateWithoutTour_ImagesInput>
  }

  export type ToursUpsertWithoutTour_ImagesInput = {
    update: XOR<ToursUpdateWithoutTour_ImagesInput, ToursUncheckedUpdateWithoutTour_ImagesInput>
    create: XOR<ToursCreateWithoutTour_ImagesInput, ToursUncheckedCreateWithoutTour_ImagesInput>
    where?: ToursWhereInput
  }

  export type ToursUpdateToOneWithWhereWithoutTour_ImagesInput = {
    where?: ToursWhereInput
    data: XOR<ToursUpdateWithoutTour_ImagesInput, ToursUncheckedUpdateWithoutTour_ImagesInput>
  }

  export type ToursUpdateWithoutTour_ImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    locations?: Tours_LocationUpdateManyWithoutToursNestedInput
    Bookings?: BookingsUpdateManyWithoutToursNestedInput
    Reviews?: ReviewsUpdateManyWithoutToursNestedInput
    Tour_Logs?: Tour_LogsUpdateManyWithoutToursNestedInput
    Tour_Itinerarys?: Tour_ItinerarysUpdateManyWithoutToursNestedInput
  }

  export type ToursUncheckedUpdateWithoutTour_ImagesInput = {
    tour_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    locations?: Tours_LocationUncheckedUpdateManyWithoutToursNestedInput
    Bookings?: BookingsUncheckedUpdateManyWithoutToursNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutToursNestedInput
    Tour_Logs?: Tour_LogsUncheckedUpdateManyWithoutToursNestedInput
    Tour_Itinerarys?: Tour_ItinerarysUncheckedUpdateManyWithoutToursNestedInput
  }

  export type ToursCreateWithoutTour_LogsInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    locations?: Tours_LocationCreateNestedManyWithoutToursInput
    Bookings?: BookingsCreateNestedManyWithoutToursInput
    Reviews?: ReviewsCreateNestedManyWithoutToursInput
    Tour_Images?: Tour_ImagesCreateNestedManyWithoutToursInput
    Tour_Itinerarys?: Tour_ItinerarysCreateNestedManyWithoutToursInput
  }

  export type ToursUncheckedCreateWithoutTour_LogsInput = {
    tour_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    locations?: Tours_LocationUncheckedCreateNestedManyWithoutToursInput
    Bookings?: BookingsUncheckedCreateNestedManyWithoutToursInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutToursInput
    Tour_Images?: Tour_ImagesUncheckedCreateNestedManyWithoutToursInput
    Tour_Itinerarys?: Tour_ItinerarysUncheckedCreateNestedManyWithoutToursInput
  }

  export type ToursCreateOrConnectWithoutTour_LogsInput = {
    where: ToursWhereUniqueInput
    create: XOR<ToursCreateWithoutTour_LogsInput, ToursUncheckedCreateWithoutTour_LogsInput>
  }

  export type ToursUpsertWithoutTour_LogsInput = {
    update: XOR<ToursUpdateWithoutTour_LogsInput, ToursUncheckedUpdateWithoutTour_LogsInput>
    create: XOR<ToursCreateWithoutTour_LogsInput, ToursUncheckedCreateWithoutTour_LogsInput>
    where?: ToursWhereInput
  }

  export type ToursUpdateToOneWithWhereWithoutTour_LogsInput = {
    where?: ToursWhereInput
    data: XOR<ToursUpdateWithoutTour_LogsInput, ToursUncheckedUpdateWithoutTour_LogsInput>
  }

  export type ToursUpdateWithoutTour_LogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    locations?: Tours_LocationUpdateManyWithoutToursNestedInput
    Bookings?: BookingsUpdateManyWithoutToursNestedInput
    Reviews?: ReviewsUpdateManyWithoutToursNestedInput
    Tour_Images?: Tour_ImagesUpdateManyWithoutToursNestedInput
    Tour_Itinerarys?: Tour_ItinerarysUpdateManyWithoutToursNestedInput
  }

  export type ToursUncheckedUpdateWithoutTour_LogsInput = {
    tour_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    locations?: Tours_LocationUncheckedUpdateManyWithoutToursNestedInput
    Bookings?: BookingsUncheckedUpdateManyWithoutToursNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutToursNestedInput
    Tour_Images?: Tour_ImagesUncheckedUpdateManyWithoutToursNestedInput
    Tour_Itinerarys?: Tour_ItinerarysUncheckedUpdateManyWithoutToursNestedInput
  }

  export type ToursCreateWithoutTour_ItinerarysInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    locations?: Tours_LocationCreateNestedManyWithoutToursInput
    Bookings?: BookingsCreateNestedManyWithoutToursInput
    Reviews?: ReviewsCreateNestedManyWithoutToursInput
    Tour_Images?: Tour_ImagesCreateNestedManyWithoutToursInput
    Tour_Logs?: Tour_LogsCreateNestedManyWithoutToursInput
  }

  export type ToursUncheckedCreateWithoutTour_ItinerarysInput = {
    tour_id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    duration: number
    location: string
    image_url?: string | null
    available_seats: number
    locations?: Tours_LocationUncheckedCreateNestedManyWithoutToursInput
    Bookings?: BookingsUncheckedCreateNestedManyWithoutToursInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutToursInput
    Tour_Images?: Tour_ImagesUncheckedCreateNestedManyWithoutToursInput
    Tour_Logs?: Tour_LogsUncheckedCreateNestedManyWithoutToursInput
  }

  export type ToursCreateOrConnectWithoutTour_ItinerarysInput = {
    where: ToursWhereUniqueInput
    create: XOR<ToursCreateWithoutTour_ItinerarysInput, ToursUncheckedCreateWithoutTour_ItinerarysInput>
  }

  export type ToursUpsertWithoutTour_ItinerarysInput = {
    update: XOR<ToursUpdateWithoutTour_ItinerarysInput, ToursUncheckedUpdateWithoutTour_ItinerarysInput>
    create: XOR<ToursCreateWithoutTour_ItinerarysInput, ToursUncheckedCreateWithoutTour_ItinerarysInput>
    where?: ToursWhereInput
  }

  export type ToursUpdateToOneWithWhereWithoutTour_ItinerarysInput = {
    where?: ToursWhereInput
    data: XOR<ToursUpdateWithoutTour_ItinerarysInput, ToursUncheckedUpdateWithoutTour_ItinerarysInput>
  }

  export type ToursUpdateWithoutTour_ItinerarysInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    locations?: Tours_LocationUpdateManyWithoutToursNestedInput
    Bookings?: BookingsUpdateManyWithoutToursNestedInput
    Reviews?: ReviewsUpdateManyWithoutToursNestedInput
    Tour_Images?: Tour_ImagesUpdateManyWithoutToursNestedInput
    Tour_Logs?: Tour_LogsUpdateManyWithoutToursNestedInput
  }

  export type ToursUncheckedUpdateWithoutTour_ItinerarysInput = {
    tour_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    available_seats?: IntFieldUpdateOperationsInput | number
    locations?: Tours_LocationUncheckedUpdateManyWithoutToursNestedInput
    Bookings?: BookingsUncheckedUpdateManyWithoutToursNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutToursNestedInput
    Tour_Images?: Tour_ImagesUncheckedUpdateManyWithoutToursNestedInput
    Tour_Logs?: Tour_LogsUncheckedUpdateManyWithoutToursNestedInput
  }

  export type UsersCreateWithoutChatbot_HistoryInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Bookings?: BookingsCreateNestedManyWithoutUsersInput
    Reviews?: ReviewsCreateNestedManyWithoutUsersInput
    Notifications?: NotificationsCreateNestedManyWithoutUsersInput
    Admin_Logs?: Admin_LogsCreateNestedManyWithoutAdminInput
    AI_Recommendations?: AI_RecommendationsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutChatbot_HistoryInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Bookings?: BookingsUncheckedCreateNestedManyWithoutUsersInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
    Notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    Admin_Logs?: Admin_LogsUncheckedCreateNestedManyWithoutAdminInput
    AI_Recommendations?: AI_RecommendationsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutChatbot_HistoryInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutChatbot_HistoryInput, UsersUncheckedCreateWithoutChatbot_HistoryInput>
  }

  export type UsersUpsertWithoutChatbot_HistoryInput = {
    update: XOR<UsersUpdateWithoutChatbot_HistoryInput, UsersUncheckedUpdateWithoutChatbot_HistoryInput>
    create: XOR<UsersCreateWithoutChatbot_HistoryInput, UsersUncheckedCreateWithoutChatbot_HistoryInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutChatbot_HistoryInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutChatbot_HistoryInput, UsersUncheckedUpdateWithoutChatbot_HistoryInput>
  }

  export type UsersUpdateWithoutChatbot_HistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Bookings?: BookingsUpdateManyWithoutUsersNestedInput
    Reviews?: ReviewsUpdateManyWithoutUsersNestedInput
    Notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    Admin_Logs?: Admin_LogsUpdateManyWithoutAdminNestedInput
    AI_Recommendations?: AI_RecommendationsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutChatbot_HistoryInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Bookings?: BookingsUncheckedUpdateManyWithoutUsersNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
    Notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    Admin_Logs?: Admin_LogsUncheckedUpdateManyWithoutAdminNestedInput
    AI_Recommendations?: AI_RecommendationsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateWithoutAI_RecommendationsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Bookings?: BookingsCreateNestedManyWithoutUsersInput
    Reviews?: ReviewsCreateNestedManyWithoutUsersInput
    Notifications?: NotificationsCreateNestedManyWithoutUsersInput
    Admin_Logs?: Admin_LogsCreateNestedManyWithoutAdminInput
    Chatbot_History?: Chatbot_HistoryCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutAI_RecommendationsInput = {
    user_id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    role?: string
    isBlocked?: boolean
    preferences?: string | null
    Bookings?: BookingsUncheckedCreateNestedManyWithoutUsersInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutUsersInput
    Notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    Admin_Logs?: Admin_LogsUncheckedCreateNestedManyWithoutAdminInput
    Chatbot_History?: Chatbot_HistoryUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutAI_RecommendationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAI_RecommendationsInput, UsersUncheckedCreateWithoutAI_RecommendationsInput>
  }

  export type UsersUpsertWithoutAI_RecommendationsInput = {
    update: XOR<UsersUpdateWithoutAI_RecommendationsInput, UsersUncheckedUpdateWithoutAI_RecommendationsInput>
    create: XOR<UsersCreateWithoutAI_RecommendationsInput, UsersUncheckedCreateWithoutAI_RecommendationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAI_RecommendationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAI_RecommendationsInput, UsersUncheckedUpdateWithoutAI_RecommendationsInput>
  }

  export type UsersUpdateWithoutAI_RecommendationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Bookings?: BookingsUpdateManyWithoutUsersNestedInput
    Reviews?: ReviewsUpdateManyWithoutUsersNestedInput
    Notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    Admin_Logs?: Admin_LogsUpdateManyWithoutAdminNestedInput
    Chatbot_History?: Chatbot_HistoryUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutAI_RecommendationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    preferences?: NullableStringFieldUpdateOperationsInput | string | null
    Bookings?: BookingsUncheckedUpdateManyWithoutUsersNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutUsersNestedInput
    Notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    Admin_Logs?: Admin_LogsUncheckedUpdateManyWithoutAdminNestedInput
    Chatbot_History?: Chatbot_HistoryUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type BookingsCreateManyUsersInput = {
    booking_id?: number
    tour_id: number
    number_of_people: number
    booking_date?: Date | string
    status?: string
  }

  export type ReviewsCreateManyUsersInput = {
    review_id?: number
    tour_id: number
    rating: number
    comment?: string | null
    review_date?: Date | string
  }

  export type NotificationsCreateManyUsersInput = {
    notification_id?: number
    message: string
    notification_date?: Date | string
  }

  export type Admin_LogsCreateManyAdminInput = {
    log_id?: number
    action: string
    action_date?: Date | string
  }

  export type AI_RecommendationsCreateManyUsersInput = {
    recommendation_id?: number
    recommendation_text: string
    created_at?: Date | string
  }

  export type Chatbot_HistoryCreateManyUsersInput = {
    chat_id?: number
    message: string
    sender: string
    timestamp?: Date | string
  }

  export type BookingsUpdateWithoutUsersInput = {
    number_of_people?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Tours?: ToursUpdateOneRequiredWithoutBookingsNestedInput
    Payments?: PaymentsUpdateManyWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutUsersInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    number_of_people?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Payments?: PaymentsUncheckedUpdateManyWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateManyWithoutUsersInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    number_of_people?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUpdateWithoutUsersInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Tours?: ToursUpdateOneRequiredWithoutReviewsNestedInput
    ReviewImages?: ReviewImageUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUsersInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewImages?: ReviewImageUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateManyWithoutUsersInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    tour_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUpdateWithoutUsersInput = {
    message?: StringFieldUpdateOperationsInput | string
    notification_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateWithoutUsersInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    notification_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyWithoutUsersInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    notification_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Admin_LogsUpdateWithoutAdminInput = {
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Admin_LogsUncheckedUpdateWithoutAdminInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Admin_LogsUncheckedUpdateManyWithoutAdminInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AI_RecommendationsUpdateWithoutUsersInput = {
    recommendation_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AI_RecommendationsUncheckedUpdateWithoutUsersInput = {
    recommendation_id?: IntFieldUpdateOperationsInput | number
    recommendation_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AI_RecommendationsUncheckedUpdateManyWithoutUsersInput = {
    recommendation_id?: IntFieldUpdateOperationsInput | number
    recommendation_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Chatbot_HistoryUpdateWithoutUsersInput = {
    message?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Chatbot_HistoryUncheckedUpdateWithoutUsersInput = {
    chat_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Chatbot_HistoryUncheckedUpdateManyWithoutUsersInput = {
    chat_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    sender?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Tours_LocationCreateManyToursInput = {
    location_id?: number
    location_name: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    description?: string | null
  }

  export type BookingsCreateManyToursInput = {
    booking_id?: number
    user_id: number
    number_of_people: number
    booking_date?: Date | string
    status?: string
  }

  export type ReviewsCreateManyToursInput = {
    review_id?: number
    user_id: number
    rating: number
    comment?: string | null
    review_date?: Date | string
  }

  export type Tour_ImagesCreateManyToursInput = {
    image_id?: number
    image_url: string
    image_order?: number
  }

  export type Tour_LogsCreateManyToursInput = {
    log_id?: number
    action: string
    action_date?: Date | string
  }

  export type Tour_ItinerarysCreateManyToursInput = {
    itinerary_id?: number
    day_number: number
    start_time?: Date | string | null
    activity?: string | null
    location?: string | null
  }

  export type Tours_LocationUpdateWithoutToursInput = {
    location_name?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tours_LocationUncheckedUpdateWithoutToursInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    location_name?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tours_LocationUncheckedUpdateManyWithoutToursInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    location_name?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingsUpdateWithoutToursInput = {
    number_of_people?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Users?: UsersUpdateOneRequiredWithoutBookingsNestedInput
    Payments?: PaymentsUpdateManyWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutToursInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    number_of_people?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    Payments?: PaymentsUncheckedUpdateManyWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateManyWithoutToursInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    number_of_people?: IntFieldUpdateOperationsInput | number
    booking_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUpdateWithoutToursInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    ReviewImages?: ReviewImageUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutToursInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
    ReviewImages?: ReviewImageUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateManyWithoutToursInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    review_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Tour_ImagesUpdateWithoutToursInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    image_order?: IntFieldUpdateOperationsInput | number
  }

  export type Tour_ImagesUncheckedUpdateWithoutToursInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    image_order?: IntFieldUpdateOperationsInput | number
  }

  export type Tour_ImagesUncheckedUpdateManyWithoutToursInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    image_order?: IntFieldUpdateOperationsInput | number
  }

  export type Tour_LogsUpdateWithoutToursInput = {
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Tour_LogsUncheckedUpdateWithoutToursInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Tour_LogsUncheckedUpdateManyWithoutToursInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Tour_ItinerarysUpdateWithoutToursInput = {
    day_number?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tour_ItinerarysUncheckedUpdateWithoutToursInput = {
    itinerary_id?: IntFieldUpdateOperationsInput | number
    day_number?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tour_ItinerarysUncheckedUpdateManyWithoutToursInput = {
    itinerary_id?: IntFieldUpdateOperationsInput | number
    day_number?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activity?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentsCreateManyBookingsInput = {
    payment_id?: number
    payment_date?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    status?: string
  }

  export type PaymentsUpdateWithoutBookingsInput = {
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentsUncheckedUpdateWithoutBookingsInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentsUncheckedUpdateManyWithoutBookingsInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    payment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewImageCreateManyReviewsInput = {
    id?: number
    image_url: string
  }

  export type ReviewImageUpdateWithoutReviewsInput = {
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewImageUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewImageUncheckedUpdateManyWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
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