const express = require("express");
const router = express.Router();
const {
  registerUser,
  updateUser,
} = require("./controllers/client/registerController");
const { loginUser } = require("./controllers/client/loginController");
const { logoutUser } = require("./controllers/client/logoutController");
const { authMiddleware, checkAdmin } = require("./middleware/Auth");
const {
  forgotPassword,
  resetPassword,
} = require("./controllers/client/authController");
const {
  getAllUsers,
  updateUserRole,
  deleteUser,
  toggleBlockUser,
} = require("./controllers/admin/adminController");
const {
  listAllTours,
  updateTourController,
  deleteTourController,
  createTours,
} = require("./controllers/admin/tourController");
const {
  listAllHotels,
  updateHotelController,
  deleteHotelController,
  createHotels,
} = require("./controllers/admin/hotelController");
const {
  getToursByCity,
  listAllToursFE,
  getTourDetail,
} = require("./controllers/client/tourController");
const {
  createReview,
  getReviewsByTourId,
} = require("./controllers/client/reviewController");
const multer = require("multer");
const path = require("path");
const {
  getAllReviews,
  updateReviewController,
  deleteReviewController,
} = require("./controllers/admin/reviewController");
const { getHotelsByCity } = require("./controllers/client/hotelController");

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               phone:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: Register Successfull
 */
router.post("/register", registerUser);

/**
 * @swagger
 * /update/{userId}:
 *   put:
 *     summary: Update user information
 *     tags: [User]
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Update Successful
 */
router.post("/update", authMiddleware, updateUser);

/**
 * @swagger
 * /login:
 *   get:
 *     summary: Login
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login Successfull
 */
router.post("/login", loginUser);
router.post("/logout", authMiddleware, logoutUser);

/**
 * @swagger
 * /forgot-password:
 *   post:
 *     summary: Forgot
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Forgot Successfull
 */
router.post("/forgot-password", forgotPassword);

/**
 * @swagger
 * /reset-password:
 *   post:
 *     summary: Reset
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               newPassword:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reset Successfull
 */
router.post("/reset-password", resetPassword);

//client
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).array("images", 3);

router.get("/hotels/by-city", authMiddleware, getHotelsByCity);
router.get("/get-tours", authMiddleware, listAllToursFE);
router.get("/tours/by-city", authMiddleware, getToursByCity);
router.post("/tours/review", authMiddleware, upload, createReview);
router.get("/tours-details/:tourId", authMiddleware, getTourDetail);
router.get("/tours/review/:tour_id", authMiddleware, getReviewsByTourId);

//admin
router.get("/list-review", authMiddleware, checkAdmin, getAllReviews);
router.post(
  "/update-review",
  authMiddleware,
  checkAdmin,
  upload,
  updateReviewController
);
router.delete(
  "/reviews/:reviewId",
  authMiddleware,
  checkAdmin,
  deleteReviewController
);

router.get("/list-tour", authMiddleware, checkAdmin, listAllTours);
router.post("/update-tour", authMiddleware, checkAdmin, updateTourController);
router.post("/create-tour", authMiddleware, checkAdmin, createTours);
router.delete(
  "/delete-tour/:tourId",
  authMiddleware,
  checkAdmin,
  deleteTourController
);

router.get("/list-hotel", authMiddleware, checkAdmin, listAllHotels);
router.post("/create-hotel", authMiddleware, checkAdmin, createHotels);
router.post("/update-hotel", authMiddleware, checkAdmin, updateHotelController);
router.delete(
  "/delete-hotel/:hotelId",
  authMiddleware,
  checkAdmin,
  deleteHotelController
);

router.get("/list-user", authMiddleware, checkAdmin, getAllUsers);
router.post("/update-user", authMiddleware, checkAdmin, updateUserRole);
router.post("/block-user", authMiddleware, checkAdmin, toggleBlockUser);
router.delete("/delete-user/:userId", authMiddleware, checkAdmin, deleteUser);

module.exports = router;
