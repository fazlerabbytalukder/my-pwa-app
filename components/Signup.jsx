import {
  AtSign,
  Calendar,
  Eye,
  Facebook,
  Lock,
  Mail,
  Phone,
  User,
} from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Signup Card */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-2xl p-8 border border-gray-200">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-black rounded-lg mb-4">
              <User className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-2">
              Create Account
            </h1>
            <p className="text-gray-600">Sign up to get started</p>
          </div>

          {/* Social Signup Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-black py-3 px-4 rounded-lg transition-colors border border-gray-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-black py-3 px-4 rounded-lg transition-colors border border-gray-300">
              <Facebook className="w-5 h-5" />
              <span className="font-medium">Facebook</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-gray-500 bg-white">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Signup Form */}
          <div className="space-y-4">
            {/* Full Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="name"
                  type="text"
                  className="w-full bg-white border border-gray-300 text-black placeholder-gray-400 rounded-lg py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Username Input */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="username"
                  type="text"
                  className="w-full bg-white border border-gray-300 text-black placeholder-gray-400 rounded-lg py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="johndoe"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  className="w-full bg-white border border-gray-300 text-black placeholder-gray-400 rounded-lg py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="phone"
                  type="tel"
                  className="w-full bg-white border border-gray-300 text-black placeholder-gray-400 rounded-lg py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Birth Date Input */}
            <div>
              <label
                htmlFor="birthdate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Birth Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="birthdate"
                  type="date"
                  className="w-full bg-white border border-gray-300 text-black placeholder-gray-400 rounded-lg py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  className="w-full bg-white border border-gray-300 text-black placeholder-gray-400 rounded-lg py-3 pl-11 pr-12 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="confirm-password"
                  type="password"
                  className="w-full bg-white border border-gray-300 text-black placeholder-gray-400 rounded-lg py-3 pl-11 pr-12 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black mt-1"
              />
              <label className="ml-2 text-sm text-gray-700">
                I agree to the{" "}
                <a
                  href="#"
                  className="font-medium text-black hover:text-gray-700 transition-colors"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-medium text-black hover:text-gray-700 transition-colors"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Create Account
            </button>
          </div>

          {/* Sign In Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="font-semibold text-black hover:text-gray-700 transition-colors"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
