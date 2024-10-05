import React from "react";
import TwoB from "../Assets/twoB.png";
import TwoC from "../Assets/twoC.png";
import Bottom from "../Bottom";

const Two = () => {
  return (
    <div className="tutorialScreen">
      <div className="container">
        <div className="header">Chapter 2</div>
        <div className="header">Introduction to SDG 15 – Life on Land</div>
        <div className="desc">
          Sustainable Development Goal 15 (SDG 15), also known as "Life on Land," aims to protect, restore, and promote the sustainable use of terrestrial ecosystems. This includes
          sustainably managing forests, combating desertification, halting and reversing land degradation, and protecting biodiversity. SDG 15 underscores the importance of
          terrestrial ecosystems for human survival, as these ecosystems provide essential resources such as food, water, and raw materials. They are also vital for regulating
          climate and maintaining biodiversity, which is crucial for the resilience of ecosystems and human communities.
        </div>
        <div className="desc">
          Biodiversity, which encompasses the variety of plant and animal species, ecosystems, and genetic diversity, is under serious threat due to human activities such as
          deforestation, land conversion for agriculture, and illegal wildlife trade. SDG 15 emphasizes the need to halt the loss of biodiversity and restore damaged ecosystems.
          Forests, which cover 30% of the Earth's surface, are a major focus of this goal. They are home to millions of species and play a critical role in regulating the climate
          by absorbing carbon dioxide.
        </div>
        <div className="subHeader">Key Targets of SDG 15</div>
        <ul className="list">
          <li>Conserving and sustainably using terrestrial and freshwater ecosystems by 2030.</li>
          <li>Halting deforestation, restoring degraded forests, and significantly increasing afforestation and reforestation efforts globally.</li>
          <li>Combatting desertification and restoring degraded land and soil, particularly land affected by desertification, drought, and floods.</li>
          <li>Ensuring the conservation of mountain ecosystems, including their biodiversity, to enhance their capacity to provide essential benefits.</li>
          <li>
            Taking urgent action to reduce the degradation of natural habitats and halt the loss of biodiversity, achieving targets to prevent the extinction of endangered species.
          </li>
          <li>Integrating ecosystem and biodiversity values into national and local planning, development processes, poverty reduction strategies, and accounting systems.</li>
        </ul>

        <div className="subHeader">Why is SDG 15 Important?</div>
        <ul className="list">
          <li>
            <b>Biodiversity Under Threat</b>: Human activity has accelerated the loss of biodiversity at an unprecedented rate. Species extinction threatens ecosystems that are
            vital for providing clean air, water, food, and shelter. Protecting biodiversity is essential to sustain life on Earth and ensure the well-being of future generations.
          </li>
          <li>
            <b>Forests and Ecosystems</b>: Forests are home to 80% of all terrestrial species and provide essential resources like timber, medicine, and food. Beyond that, forests
            act as carbon sinks, absorbing about 2.6 billion tonnes of CO2 annually. However, deforestation and forest degradation continue to threaten these ecosystems. SDG 15
            aims to halt deforestation and promote reforestation to maintain the critical role forests play in regulating the Earth's climate and supporting biodiversity.
          </li>
          <li>
            <b>Combatting Desertification and Land Degradation</b>: Nearly 1.5 billion people live on degraded land. Land degradation, driven by unsustainable agricultural
            practices, deforestation, and industrial activities, threatens food security and increases the likelihood of poverty. Combatting desertification and promoting
            sustainable land use practices are key targets under SDG 15 to restore soil fertility and protect livelihoods.
          </li>
        </ul>

        <div className="subHeader">How SDG 15 Relates to Other Goals</div>
        <ul className="list">
          <li>
            <b>SDG 1 (No Poverty)</b>: Protecting ecosystems helps ensure that vulnerable populations have access to vital natural resources like food, water, and materials for
            shelter, which they depend on for their livelihoods.
          </li>
          <li>
            <b>SDG 2 (Zero Hunger)</b>: Sustainable land management and biodiversity conservation ensure long-term food security by maintaining fertile soils, pollinator
            populations, and water cycles, all of which are essential for agriculture.
          </li>
          <li>
            <b>SDG 13 (Climate Action)</b>: Forests and other ecosystems play a critical role in absorbing CO2 from the atmosphere, helping to mitigate the impacts of climate
            change. Protecting and restoring ecosystems is essential to achieving climate goals.
          </li>
        </ul>
        <div className="images">
          <img src={TwoB} alt="Afforestation Efforts" width={500} height={500} />
          <img src={TwoC} alt="Sustainable Forest Management" width={500} height={500} />
        </div>

        <div className="subHeader">Global Challenges to Achieving SDG 15</div>
        <ul className="list">
          <li>
            <b>Deforestation and Habitat Destruction</b>: Forests continue to be destroyed at alarming rates due to agricultural expansion, logging, and infrastructure development.
            Every year, millions of hectares of forests are lost, leading to habitat destruction, species extinction, and the release of CO2 into the atmosphere.
          </li>
          <li>
            <b>Illegal Wildlife Trade</b>: Poaching and the illegal trafficking of animals for their parts (such as ivory and rhino horn) have devastating effects on biodiversity.
            These illegal activities not only push species toward extinction but also disrupt ecosystems and threaten local economies that rely on wildlife conservation.
          </li>
          <li>
            <b>Invasive Species</b>: Non-native species introduced into ecosystems can cause significant ecological and economic harm. These species often outcompete native species
            for resources, leading to the displacement and extinction of indigenous wildlife.
          </li>
        </ul>

        <div className="subHeader">How Can We Achieve SDG 15?</div>
        <div className="desc">
          Achieving SDG 15 requires coordinated efforts at local, national, and international levels. Governments need to implement policies that promote sustainable land use,
          protect biodiversity, and combat illegal activities like poaching and logging. Businesses must adopt practices that prioritize environmental sustainability and reduce
          their ecological footprints. International cooperation is crucial to share knowledge, resources, and technologies that can help restore ecosystems and halt biodiversity
          loss.
        </div>
        <div className="desc">
          Individuals can also contribute by supporting reforestation programs, reducing their consumption of products linked to deforestation (such as palm oil and unsustainable
          timber), and raising awareness about the importance of biodiversity conservation. Volunteering for local conservation projects, promoting sustainable agricultural
          practices, and supporting eco-friendly businesses can make a tangible impact.
        </div>

        <div className="subHeader">Conclusion</div>
        <div className="desc">
          SDG 15 represents a critical component of the global effort to achieve sustainable development. Protecting life on land, halting biodiversity loss, and promoting the
          sustainable management of forests and other ecosystems are essential for the well-being of humanity and the planet. Although the challenges are significant, through
          international cooperation, policy changes, and individual actions, we can work towards a future where ecosystems are protected, biodiversity is preserved, and sustainable
          development is realized.
        </div>
        <Bottom backText="Chapter 1" nextText="Chapter 3" back="/courses/one" next="/courses/three" />
      </div>
    </div>
  );
};

export default Two;
