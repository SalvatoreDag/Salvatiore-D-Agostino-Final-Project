

const DataPages = {
    temperature: {
		title: 'Temperature',
		subtitle: ' Atmospheric temperature is rising',
		description: `Given the tremendous size and heat capacity of the global oceans, it
        takes a massive amount of heat energy to raise Earth’s average
        yearly surface temperature even a small amount. The roughly 2-degree
        Fahrenheit (1 degrees Celsius) increase in global average surface
        temperature that has occurred since the pre-industrial era
        (1880-1900) might seem small, but it means a significant increase in
        accumulated heat. The current global warming rate is not natural.
        From 1880 to 1981 was (0.07°C / 0.13°F) per decade. Since 1981 this
        rate has increased to (0.18°C / 0.32°F). Some of the past sudden
        increase on global temperature present in this graph, correspond to
        the Roman Warm Period and the Medieval Warm Period.`,
		source:
			`
            Source data 1880 - present: Lenssen, N., G. Schmidt, J. Hansen, M.
            Menne, A. Persin, R. Ruedy, and D. Zyss, 2019: Improvements in the
            GISTEMP uncertainty model. J. Geophys. Res. Atmos., 124, no. 12,
            6307-6326, doi:10.1029/2018JD029522`,
	},
	co2: {
		title: 'Carbon Dioxide',
		subtitle: 'CO2 higher than pre-industrial levels',
		description: ` Carbon dioxide concentrations are rising mostly because of the
        fossil fuels that people are burning for energy. Fossil fuels like
        coal and oil contain carbon that plants pulled out of the atmosphere
        through photosynthesis over many millions of years; we are returning
        that carbon to the atmosphere in just a few hundred. Since the
        middle of the 20th century, annual emissions from burning fossil
        fuels have increased every decade, from an average of 3 billion tons
        of carbon (11 billion tons of carbon dioxide) a year in the 1960s to
        9.5 billion tons of carbon (35 billion tons of carbon dioxide) per
        year in the 2010s`,
		source:
			`From 1958, the measurements of carbon dioxide concentrations are
            done by Mauna Loa Observatory. Source: Ed Dlugokencky and Pieter
            Tans, NOAA/GML.
            From 2010.01.01 the data is measured on a quasi daily basis`,
	},
	methane: {
		title: 'Methane',
		subtitle: 'We have underestimated methane',
		description: `Methane is a flammable gas formed by geological and biological
        processes. Some of the natural ones are leaks from natural gas
        systems and wetlands. 50-65% of total global methane emissions come
        from human activities. These include livestock, agriculture, oil and
        gas systems, waste from homes and businesses, landfills, and so on.
        Methane is a gas with a global warming potential several times
        stronger than of CO2. For more than 650,000 years, methane
        concentration in the atmosphere was between 350 – 800 ppb. From the
        beginning of the industrial revolution, human activities have
        increased this amount by around 150%.`,
		source: `Year 1983 to present data source: Global Monitoring Division of
        NOAA’s Earth System Research Laboratory Ed Dlugokencky, NOAA/GML. Data 800,000 years
        ago to 1983 source: United States, Environmental Protection Agency
        (EPA),
        From 1983.07 this data is measured on a monthly basis`,
	},
      'nitrous-oxide': {
		title: 'Nitrous oxide',
		subtitle: 'NO2 is 300 times more potent than CO2',
		description: ` Nitrous oxide is a gas that is produced by the combustion of fossil
        fuel and solid waste, nitrogen-base fertilizers, sewage treatment
        plants, natural processes, and other agricultural and industrial
        activities. It is the third largest heat-trapping gas in the
        atmosphere and the biggest ozone-destroying compound emitted by
        human activities. Nitrous oxide is 300 times more potent than carbon
        dioxide, and it also depletes the ozone layer. Since it also has a
        shorter life span, reducing it could have a faster, significant
        impact on global warming. But the largest source of nitrous oxide is
        agriculture, particularly fertilized soil and animal waste, and that
        makes it harder to rein in. One could imagine limiting carbon
        dioxide, less methane, less of lots of things. But nitrous oxide is
        so much a food production issue.`,
		source: `From 2001.01 the data is measured on a monthly basis`,
	},
      arctic: {
		title: 'Polar Ice',
		subtitle: 'Polar ice is disappearing',
		description: `The arctic is warming around twice as fast as global average. Some
        of the reasons for this are: The arctic amplification, the albedo
        effect, and black carbon. From 1979 to 1996, we lost 2.2 – 3% of the
        arctic ice cover. From 2010 to present we are losing 12.85% per
        decade! Another consequence is permafrost thawing. This is a process
        in which large amounts of methane is released to the atmosphere,
        fueling more the process of global warming. We lose Arctic sea ice
        at a rate of almost 13% per decade, and over the past 30 years, the
        oldest and thickest ice in the Arctic has declined by a stunning
        95%. If emissions continue to rise unchecked, the Arctic could be
        ice-free in the summer by 2040`,
		source: `Data source: Satellite observations. Credit:NASA`,
	},
}

export default DataPages;