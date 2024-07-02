/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TzC0SVLxp11
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "$/lib/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu, DropdownMenuRadioItem, DropdownMenuRadioGroup } from "$/lib/ui/dropdown-menu"

export default function Component() {
  return (
    <div className="grid gap-8 p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Published</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ListOrderedIcon className="w-4 h-4 mr-2" />
                Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="newest">
                <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="oldest">Oldest</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="title">Title</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="author">Author</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button variant="outline">
          <PlusIcon className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>
      <div className="grid gap-8">
        <div className="flex gap-6 bg-white dark:bg-gray-950 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            alt="Blog Post Image"
            className="w-[300px] h-[200px] rounded-l-lg object-cover"
            height={200}
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width={300}
          />
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">Mastering the Art of Responsive Web Design</h2>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost">
                  <DeleteIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <TrashIcon className="w-4 h-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
              <UserIcon className="w-4 h-4 mr-2" />
              John Doe
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Explore the latest techniques and best practices for creating responsive websites that adapt seamlessly to
              any device.
            </p>
            <div className="flex items-center text-sm">
              <div className="bg-green-500 text-white px-2 py-1 rounded-full mr-2">Published</div>
              <div className="text-gray-500 dark:text-gray-400">May 28, 2024</div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 bg-white dark:bg-gray-950 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            alt="Blog Post Image"
            className="w-[300px] h-[200px] rounded-l-lg object-cover"
            height={200}
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width={300}
          />
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">Unleashing the Power of Creativity: A Designer's Journey</h2>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost">
                  <DeleteIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <TrashIcon className="w-4 h-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
              <UserIcon className="w-4 h-4 mr-2" />
              Jane Smith
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Discover how to harness your creative potential and transform your ideas into stunning designs.
            </p>
            <div className="flex items-center text-sm">
              <div className="bg-yellow-500 text-white px-2 py-1 rounded-full mr-2">Draft</div>
              <div className="text-gray-500 dark:text-gray-400">May 28, 2024</div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 bg-white dark:bg-gray-950 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            alt="Blog Post Image"
            className="w-[300px] h-[200px] rounded-l-lg object-cover"
            height={200}
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width={300}
          />
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">The Future of AI: Exploring the Possibilities</h2>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost">
                  <DeleteIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <TrashIcon className="w-4 h-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
              <UserIcon className="w-4 h-4 mr-2" />
              Michael Johnson
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Dive into the latest advancements in artificial intelligence and discover how it's shaping the world
              around us.
            </p>
            <div className="flex items-center text-sm">
              <div className="bg-green-500 text-white px-2 py-1 rounded-full mr-2">Published</div>
              <div className="text-gray-500 dark:text-gray-400">May 28, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DeleteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
