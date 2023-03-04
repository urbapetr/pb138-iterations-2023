<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text" />

    <xsl:template match="event">
            <id>
                <xsl:value-of select="@id" />
            </id>
            <eventname>
                <xsl:value-of select="eventname" />
            </eventname>
            <date>
                <xsl:value-of select="date" />
            </date>
            <location>
                <xsl:value-of select="location" />
            </location>
            <description>
                <xsl:value-of select="description" />
            </description>
        <atendees>
            <xsl:apply-templates select="attendees/attendee" />
        </atendees>
    </xsl:template>

    <xsl:template match="attendee">
        <id>
            <xsl:value-of select="@id" />
        </id>
        <username>
            <xsl:value-of select="@username" />
        </username>
    </xsl:template>

</xsl:stylesheet>