import { ArrowLeft, Lock, Mail } from "lucide-react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Forgot Password Card */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-2xl p-8 border border-gray-200">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-black rounded-lg mb-4">
              <Lock className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-2">
              Forgot Password?
            </h1>
            <p className="text-gray-600">
              No worries, we'll send you reset instructions
            </p>
          </div>

          {/* Forgot Password Form */}
          <div className="space-y-5">
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
              <p className="mt-2 text-sm text-gray-500">
                Enter the email address associated with your account
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Send Reset Link
            </button>

            {/* Back to Login Link */}
            <a
              href="/auth/login"
              className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to login
            </a>
          </div>

          {/* Additional Help */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="/auth/signup"
                className="font-semibold text-black hover:text-gray-700 transition-colors"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
