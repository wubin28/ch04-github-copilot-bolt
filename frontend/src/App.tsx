import React, { useState } from "react";
import { PenLine, Clock, ChevronRight } from "lucide-react";

/**
 * The `App` component serves as the main entry point for a React application
 * that helps users optimize prompts for AI interactions using the RABPOC
 * framework. This component is structured into two main sections: a left
 * sidebar for navigation and a main content area for user input and prompt
 * generation. Below is a breakdown of its functionality:
 *
 * ## State Management
 * - `formData`: An object managed using `useState` to store user inputs for
 *   the RABPOC framework:
 *   - `role`: The role the AI should assume.
 *   - `audience`: The target audience for the AI's response.
 *   - `boundary`: The scope or boundary of the discussion.
 *   - `purpose`: The intended purpose or goal of the AI's response.
 *   - `output`: The desired output format.
 *   - `concern`: Any concerns or limitations for the AI to consider.
 *
 * ## Layout
 * - **Left Sidebar**: Contains navigation elements and a button to start a new
 *   session. It also includes links to history items.
 * - **Main Content**: Provides a form for users to input RABPOC parameters,
 *   a button to optimize the prompt, and a section to display the optimized
 *   prompt.
 *
 * ## Components and Features
 * - **Input Fields**: Each RABPOC parameter has a corresponding labeled input
 *   field. Changes to these fields update the `formData` state.
 * - **Optimize Prompt Button**: A button that, when clicked, triggers the
 *   optimization process (logic for this is not implemented in the provided
 *   code).
 * - **Optimized Prompt Display**: A placeholder section to display the
 *   generated optimized prompt.
 *
 * ## Styling
 * - The component uses Tailwind CSS classes for styling, ensuring a responsive
 *   and visually appealing layout.
 *
 * ## Future Modifications
 * - To modify the RABPOC parameters, update the `formData` state structure and
 *   corresponding input fields.
 * - To add new navigation items, update the `<nav>` section in the sidebar.
 * - To implement prompt optimization logic, handle the click event of the
 *   "Optimize Prompt" button.
 *
 * @returns The main `App` component with a sidebar and a prompt optimization form.
 */
function App() {
  const [formData, setFormData] = useState({
    role: "",
    audience: "",
    boundary: "",
    purpose: "",
    output: "",
    concern: "",
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Chat</h1>
          <p className="text-sm text-gray-600">
            Optimize prompts to include RABPOC.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-lg mb-8 hover:bg-gray-800 transition-colors">
          <PenLine size={18} />
          <span>New session</span>
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={18} />
            <span>History</span>
          </div>

          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              提示词优化要素
              <ChevronRight size={16} />
            </a>
            <a
              href="#"
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              免费AI工具推荐
              <ChevronRight size={16} />
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Promptyoo</h1>
          <p className="text-gray-600 leading-relaxed">
            Want high-quality AI responses? I can help you optimize your
            prompts. Before asking AI a question, simply provide brief answers
            to these 6 sub-questions that help generate high-quality prompts.
            Then, I'll ask DeepSeek to generate an excellent prompt based on
            your answers. You can then copy this prompt to ask AI.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              R: What role you want AI to play?
            </label>
            <input
              type="text"
              placeholder="e.g., Prompt Optimization Expert"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              A: What Audience you want AI to generate content for?
            </label>
            <input
              type="text"
              placeholder="e.g., AI tool beginners"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.audience}
              onChange={(e) =>
                setFormData({ ...formData, audience: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              B: What Boundary should AI focus on for this discussion?
            </label>
            <input
              type="text"
              placeholder="e.g., Prompt optimization"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.boundary}
              onChange={(e) =>
                setFormData({ ...formData, boundary: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              P: What Purpose you want AI to help you achieve?
            </label>
            <input
              type="text"
              placeholder="e.g., find popular prompt optimization tools"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.purpose}
              onChange={(e) =>
                setFormData({ ...formData, purpose: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              O: What Output format you want AI to generate?
            </label>
            <input
              type="text"
              placeholder="e.g., tool name (official website link)"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.output}
              onChange={(e) =>
                setFormData({ ...formData, output: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              C: What Concern you have about this discussion with AI?
            </label>
            <input
              type="text"
              placeholder="e.g., AI hallucinations (if not found, please be honest and don't make up information)"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.concern}
              onChange={(e) =>
                setFormData({ ...formData, concern: e.target.value })
              }
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Optimize Prompt
          </button>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-medium mb-2">Optimized Prompt</h3>
            <p className="text-gray-600">
              Your optimized prompt will be displayed here. Optimize your prompt
              now!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
