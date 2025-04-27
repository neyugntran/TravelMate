
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  user_id: 'user_id',
  name: 'name',
  email: 'email',
  password: 'password',
  phone: 'phone',
  role: 'role',
  isBlocked: 'isBlocked',
  preferences: 'preferences'
};

exports.Prisma.ToursScalarFieldEnum = {
  tour_id: 'tour_id',
  name: 'name',
  description: 'description',
  price: 'price',
  duration: 'duration',
  location: 'location',
  image_url: 'image_url',
  available_seats: 'available_seats'
};

exports.Prisma.Admin_LogsScalarFieldEnum = {
  log_id: 'log_id',
  admin_id: 'admin_id',
  action: 'action',
  action_date: 'action_date'
};

exports.Prisma.Tours_LocationScalarFieldEnum = {
  location_id: 'location_id',
  tour_id: 'tour_id',
  location_name: 'location_name',
  latitude: 'latitude',
  longitude: 'longitude',
  description: 'description'
};

exports.Prisma.BookingsScalarFieldEnum = {
  booking_id: 'booking_id',
  user_id: 'user_id',
  tour_id: 'tour_id',
  number_of_people: 'number_of_people',
  booking_date: 'booking_date',
  status: 'status'
};

exports.Prisma.ReviewImageScalarFieldEnum = {
  id: 'id',
  review_id: 'review_id',
  image_url: 'image_url'
};

exports.Prisma.ReviewsScalarFieldEnum = {
  review_id: 'review_id',
  user_id: 'user_id',
  tour_id: 'tour_id',
  rating: 'rating',
  comment: 'comment',
  review_date: 'review_date'
};

exports.Prisma.NotificationsScalarFieldEnum = {
  notification_id: 'notification_id',
  user_id: 'user_id',
  message: 'message',
  notification_date: 'notification_date'
};

exports.Prisma.PaymentsScalarFieldEnum = {
  payment_id: 'payment_id',
  booking_id: 'booking_id',
  payment_date: 'payment_date',
  amount: 'amount',
  payment_method: 'payment_method',
  status: 'status'
};

exports.Prisma.HotelsScalarFieldEnum = {
  hotel_id: 'hotel_id',
  name: 'name',
  description: 'description',
  price: 'price',
  location: 'location',
  image_url: 'image_url',
  available_seats: 'available_seats'
};

exports.Prisma.Tour_ImagesScalarFieldEnum = {
  image_id: 'image_id',
  tour_id: 'tour_id',
  image_url: 'image_url',
  image_order: 'image_order'
};

exports.Prisma.Tour_LogsScalarFieldEnum = {
  log_id: 'log_id',
  tour_id: 'tour_id',
  action: 'action',
  action_date: 'action_date'
};

exports.Prisma.Tour_ItinerarysScalarFieldEnum = {
  itinerary_id: 'itinerary_id',
  tour_id: 'tour_id',
  day_number: 'day_number',
  start_time: 'start_time',
  activity: 'activity',
  location: 'location'
};

exports.Prisma.Chatbot_HistoryScalarFieldEnum = {
  chat_id: 'chat_id',
  user_id: 'user_id',
  message: 'message',
  sender: 'sender',
  timestamp: 'timestamp'
};

exports.Prisma.AI_RecommendationsScalarFieldEnum = {
  recommendation_id: 'recommendation_id',
  user_id: 'user_id',
  recommendation_text: 'recommendation_text',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UsersOrderByRelevanceFieldEnum = {
  name: 'name',
  email: 'email',
  password: 'password',
  phone: 'phone',
  role: 'role',
  preferences: 'preferences'
};

exports.Prisma.ToursOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  location: 'location',
  image_url: 'image_url'
};

exports.Prisma.Admin_LogsOrderByRelevanceFieldEnum = {
  action: 'action'
};

exports.Prisma.Tours_LocationOrderByRelevanceFieldEnum = {
  location_name: 'location_name',
  description: 'description'
};

exports.Prisma.BookingsOrderByRelevanceFieldEnum = {
  status: 'status'
};

exports.Prisma.ReviewImageOrderByRelevanceFieldEnum = {
  image_url: 'image_url'
};

exports.Prisma.ReviewsOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.NotificationsOrderByRelevanceFieldEnum = {
  message: 'message'
};

exports.Prisma.PaymentsOrderByRelevanceFieldEnum = {
  payment_method: 'payment_method',
  status: 'status'
};

exports.Prisma.HotelsOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  location: 'location',
  image_url: 'image_url'
};

exports.Prisma.Tour_ImagesOrderByRelevanceFieldEnum = {
  image_url: 'image_url'
};

exports.Prisma.Tour_LogsOrderByRelevanceFieldEnum = {
  action: 'action'
};

exports.Prisma.Tour_ItinerarysOrderByRelevanceFieldEnum = {
  activity: 'activity',
  location: 'location'
};

exports.Prisma.Chatbot_HistoryOrderByRelevanceFieldEnum = {
  message: 'message',
  sender: 'sender'
};

exports.Prisma.AI_RecommendationsOrderByRelevanceFieldEnum = {
  recommendation_text: 'recommendation_text'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
