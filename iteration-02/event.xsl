<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />

    <xsl:template match="event">
        <div>
            <h4>
                <xsl:value-of select="eventname" />
            </h4>
            <span>
                <xsl:value-of select="@id" />
            </span>
            <span>
                <xsl:value-of select="date" />
            </span>
            <span>
                <xsl:value-of select="location" />
            </span>
            <span>
                <xsl:value-of select="description" />
            </span>
        </div>
        <div>
            <h3>Atendees:</h3>
            <xsl:apply-templates select="attendees/attendee" />
        </div>
    </xsl:template>

    <xsl:template match="attendee">
        <h5>
            <xsl:value-of select="@username" />
        </h5>
        <span>
            <xsl:value-of select="@id" />
        </span>
    </xsl:template>

</xsl:stylesheet>