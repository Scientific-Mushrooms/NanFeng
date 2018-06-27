import Link from 'next/link'

const Index = () => (
    <div>
        <Link href="/about" style={{ fontSize: 20 }}>
            <a>About Page</a>
        </Link>
        <p>Hello Next.js</p>
    </div>
)

export default Index