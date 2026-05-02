import React from 'react';

const Stats = () =>
{
    const stats = [
        {
            number: '1M+',
            label: 'Active Users'
        },
        {
            number: '99.9%',
            label: 'Uptime'
        },
        {
            number: '24/7',
            label: 'Protection'
        },
        {
            number: '50+',
            label: 'Countries'
        }
    ];

    return (
        <section className="stats">
            <div className="stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <h3>{stat.number}</h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
