import "../styles/Solutions.css";
import Modal from "./Modal";
import React, { useState } from "react";

function Solutions() {
    const [activeModal, setActiveModal] = useState(1);

    const modals = [
        {
            id: 1,
            title: 'ESG Data Solution',
            pictures : '../assets/',
            associateWord : 'Mot clé associé',
            content: 'Automatically collect data, launch campaigns, establish quality processes, and build an organization that mirrors your own, all within our platform. Benchmark best practices, set scoring rules, and track performance with custom dashboards.'
        },
        {
            id: 2,
            title: 'Carbon Assessment',
            associateWord : 'Mot clé associé',
            content: 'Choose a Carbon module from our options, estimate emissions across Scopes 1, 2, and 3, generate footprint reports, receive recommendations, and build your decarbonization strategy.'
        },
        {
            id: 3,
            title: 'CSRD',
            associateWord : 'Mot clé associé',
            content: 'Detailed insights into Corporate Sustainability Reporting Directive. Understand the requirements and comply effectively.'
        },
        {
            id: 4,
            title: 'Impact Analysis & Compliance',
            associateWord : 'Mot clé associé',
            content: 'Analyze the impact of your operations and ensure compliance with regulations and standards.'
        }
    ];

    const openModal = (id) => {
        setActiveModal(id);
    }

    const closeModal = () => {
        setActiveModal(null);
    }

    return (
        <div className="solutions">
            <div className="solutionsTitle">
                <h2>All your ESG journey needs in one platform</h2>
            </div>

            <div className="solutionsNav">
                <ul>
                    {modals.map(modal => (
                        <li key={modal.id}>
                            <a href="#" onClick={() => openModal(modal.id)}>
                                {modal.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {activeModal && (
                <Modal
                    title={modals.find(m => m.id === activeModal).title}
                    associateWord={modals.find(m => m.id === activeModal).associateWord}
                    content={modals.find(m => m.id === activeModal).content}
                    onClose={closeModal}
                />
            )}
        </div>
    )
}

export default Solutions;
