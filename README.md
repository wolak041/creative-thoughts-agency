# Creative Thoughts Agency

A modern blog application built with Next.js 14, featuring user authentication, blog management, and a clean responsive design.

> **Note**: This project is created for training purposes and is based on the [Lama Dev Next.js tutorial](https://www.youtube.com/watch?v=vCOSTG10Y4o&ab_channel=LamaDev).

## 🚀 Features

- **Modern Next.js 14**: Built with the latest App Router and React Server Components
- **Authentication**: Multiple authentication methods including GitHub OAuth and credentials-based login
- **Blog Management**: Full CRUD operations for blog posts with admin panel
- **User Management**: User registration, login, and profile management
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Database Integration**: MongoDB integration with Mongoose ODM
- **TypeScript**: Fully typed codebase for better development experience
- **Admin Dashboard**: Admin panel for managing posts and users

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js v5
- **Database**: MongoDB with Mongoose
- **Password Hashing**: bcrypt
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database
- GitHub OAuth App (for GitHub authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/wolak041/creative-thoughts-agency.git
   cd creative-thoughts-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # NextAuth
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   
   # GitHub OAuth (optional)
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 Authentication

The application supports two authentication methods:

1. **GitHub OAuth**: Quick sign-in with GitHub account
2. **Credentials**: Email/password authentication with bcrypt hashing

## 📝 Blog Features

- Create, read, update, and delete blog posts
- User-specific post authoring
- Admin panel for content management
- Responsive post cards and layouts
- Individual post pages with full content

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Responsive design patterns
- Custom color scheme
- Modern UI components
- Mobile-first approach

## 🛡️ Security Features

- Password hashing with bcrypt
- NextAuth.js security best practices
- Environment variable protection
- TypeScript for type safety

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

## 📚 Learning Resources

This project was built following the [Lama Dev Next.js tutorial](https://www.youtube.com/watch?v=vCOSTG10Y4o&ab_channel=LamaDev), which covers:

- Next.js 14 App Router
- Server Components and Server Actions
- Authentication with NextAuth.js
- Database integration with MongoDB
- Modern React patterns
- TypeScript best practices

## 🤝 Contributing

As this is a training project, feel free to:
- Experiment with new features
- Improve the UI/UX
- Add additional functionality
- Practice with the codebase

## 📄 License

This project is for educational purposes only.

---

**Happy coding! 🎉**
