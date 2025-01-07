import React from 'react'

export const Features = () => {
  return (
    <div>
        <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow p-6 rounded">
              <h4 className="text-xl font-bold text-indigo-600 mb-2">Expense Tracking</h4>
              <p className="text-gray-600">Monitor all your expenses in one place with detailed insights.</p>
            </div>
            <div className="bg-white shadow p-6 rounded">
              <h4 className="text-xl font-bold text-indigo-600 mb-2">Budget Planning</h4>
              <p className="text-gray-600">Set and stick to your budgets with our easy-to-use tools.</p>
            </div>
            <div className="bg-white shadow p-6 rounded">
              <h4 className="text-xl font-bold text-indigo-600 mb-2">Goal Setting</h4>
              <p className="text-gray-600">Define financial goals and track your progress over time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
