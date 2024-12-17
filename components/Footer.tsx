export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">About</h3>
              <p className="text-sm text-muted-foreground">
                A modern blog built with Next.js 14, featuring the latest insights
                and articles about web development, technology, and programming.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                    All Posts
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for the latest updates and articles.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Blog. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}