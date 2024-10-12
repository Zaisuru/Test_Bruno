import "../styles/Solutions.css";
import "../styles/App.css";


import Modal from "./Modal";
import React, { useState } from "react";
import modal from "./Modal";

function Solutions() {
    const [activeModal, setActiveModal] = useState(1);

    const modals = [
        {
            id: 1,
            title: 'ESG Data Solution',
            pictures : '/assets/SolutionsGraph.svg',
            content: 'Automatically collect data, launch campaigns, establish quality processes, and build an organization that mirrors your own, all within our platform. Benchmark best practices, set scoring rules, and track performance with custom dashboards.'
        },
        {
            id: 2,
            title: 'Carbon Assessment',
            pictures : '/assets/SolutionsGraph.svg',
            content: 'Choose a Carbon module from our options, estimate emissions across Scopes 1, 2, \n' +
                'and 3, generate footprint reports, receive recommendations, and build your decarbonization strategy.'
        },
        {
            id: 3,
            title: 'CSRD',
            pictures : '/assets/SolutionsGraph.svg',
            content: 'Leverage our expertise and tools to demystify CSRD and unlock opportunities. Conduct your double materiality assessments, perform gap analyses, collect data, and prepare audit-ready reports.'
        },
        {
            id: 4,
            title: 'Impact Analysis & Compliance',
            pictures : '/assets/SolutionsGraph.svg',
            content: 'Analyze your biodiversity impact and dependencies, achieve Taxonomy alignment, conduct SFDR and PAI analysis, and stay updated on regulatory news'
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
            <div className="solutionsHeader grid">
                <h2 className="ppnm">All your ESG journey needs in one platform</h2>

                    <ul className="solutionsNav">
                        {modals.map(modal => (
                            <li key={modal.id}>
                                <a href="#" className={`solutions-${modal.id} solutionsLink inter`} onClick={(e) => {
                                    e.preventDefault();
                                    openModal(modal.id);
                                }}>
                                    {modal.title}
                                </a>
                            </li>
                        ))}
                    </ul>
            </div>

            {activeModal && (
                <Modal
                    id={modals.find(m => m.id === activeModal).id}
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
